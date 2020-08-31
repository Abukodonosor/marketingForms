import { readFromDOM } from "./ElementDataReader";

export function WebFormContext(config) {
  const contextSchema = {
    WEB_FORM_ID: "web-form",
    elementId: "webForm",
    //Name of application verticals
    applicationType: "",
    //External file with all application type verticals
    webFormApplications: null,
    //External file with webFormEngine enable/disable page rules
    webFormRules: null,
    //External file with all field definitions
    webFormFields: null,
    //External file with all validation rules for webFormEngine
    webFormValidators: null,
    //ApplicationType pages
    steps: [],
    //pages to exclude from
    excludeSteps: [],
    //application theme
    theme: "",
    //webForm sending data
    webForm: {
      url: "www.salestrekker.com",
      method: "POST",
      token: "",
      sendData: null,
      queryParamsInterface: {
        //We expect those params inside queryParam in iFrame
        applicationType: "",
        disableSteps: [],
      },
    },
    webFormOptions: {
      //Structure of a field element inside webFormEngine
      genericField: {
        fieldName: "must-be-uniq",
        visible: true,
        questionTitle: "",
        mandatory: true,
        // filedDefinition
        answerType: "",
        answerInput: {},
        answerValue: {},
        // validation rule name
        validator: "",
        validation: null, //callbackFunction
        validationMessage: "",
      },
      //Structure of generic page element inside webFormEngine
      genericPage: {
        stepName: "must-be-uniq",
        visible: true,
        mandatory: true,
        fields: [],
        viewTrigger: null, //callbackFunction
      },
      //All possible field types inside webFormEngine (If you want to make new field, you need to introduce him here)
      filedDefinition: {
        text: {
          selectItems: [],
          value: null,
        },
        select: {
          selectItems: [],
          value: null,
        },
        dropdown: {
          selectItems: [],
          value: null,
        },
        multiselect: {
          selectItems: [],
          value: null,
        },
        location: {
          selectItems: [],
          value: null,
        },
      },
    },
    onSubmit: () => {},
    onError: () => {},
  };

  var Context = buildContext(Object.assign(contextSchema, config));

  function buildContext(context) {
    context.steps = expendStepsContext(context);
    context.webForm.sendData = sendData;
    return context;
  }

  function expendStepsContext(context) {
    let expandedSteps = [];
    const fieldGenericDefinition = context.webFormOptions.genericField;
    const pageGenericDefinition = context.webFormOptions.genericPage;

    let dataSteps = context.webFormApplications[context.applicationType];
    const fieldDefinitions = context.webFormFields.fields;

    const excludeSteps = context.excludeSteps;
    //disable rules for specific application type
    const disableRules = context.webFormRules[context.applicationType];
    const validatorRules = context.webFormValidators;

    //disable pages from appType
    dataSteps = dataSteps.filter((el) => {
      if (!excludeSteps.includes(el.stepName)) {
        return el;
      }
    });

    for (let pageIndex = 0; pageIndex < dataSteps.length; pageIndex++) {
      const currentPage = dataSteps[pageIndex];
      //exclude pages from wizard
      currentPage["index"] = pageIndex;
      let newPage = Object.assign(pageGenericDefinition, currentPage);

      newPage = Object.assign({}, newPage);
      newPage = Object.assign(newPage, disableRules[currentPage.stepName]);

      //move it from loop (suggestion to make map and O(n) solution)
      newPage.fields = newPage.fields.map((el) => {
        const newField = Object.assign(
          Object.assign({}, fieldGenericDefinition),
          fieldDefinitions[el]
        );
        newField.fieldName = currentPage.stepName + "_" + el;
        if (newField.validator != "") {
          newField["validation"] =
            validatorRules[newField.validator].validation;
          newField["validationMessage"] =
            validatorRules[newField.validator].validationMessage;
        }
        return Object.assign({}, newField);
      });

      expandedSteps.push(newPage);
    }

    return expandedSteps;
  }

  function value() {
    return Context;
  }

  function sendData() {
    const sendData = snapshot();
    const context = value();
    fetch(context.webForm.uploadUrl, {
      method: context.webForm.method,
      body: JSON.stringify(sendData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log("error data", err);
      });
  }

  function snapshot() {
    const resultObject = { token: Context.webForm.token };
    const steps = Context.steps;
    steps.map((step) => {
      if (!!step.answerValue) {
        //workaround
        const answers = Object.keys(step.answerValue);
        answers.map((el) => {
          if (el.split("_")[1] == "demoFieldLocation") {
            const keys = Object.keys(step.answerValue[el]);
            keys.map((field) => {
              resultObject[el + "_" + field] = step.answerValue[el][field];
            });
          } else {
            resultObject[el] = step.answerValue[el].value;
          }
        });
      }
    });

    return resultObject;
  }

  function disableWizardStep(activeStep) {
    if (activeStep.viewTrigger) {
      activeStep.viewTrigger(activeStep.answerValue, stepOperations);
    }
  }

  const stepOperations = {
    disableStep: function (stepName, disableCondition) {
      let stepSelected = selectStep(stepName);
      if (disableCondition == true) {
        return (stepSelected["visible"] = false);
      }
      if (disableCondition == false) {
        return (stepSelected["visible"] = true);
      }
    },
    enableStep: function (stepName, disableCondition) {
      let stepSelected = selectStep(stepName);
      if (disableCondition == true) {
        return (stepSelected["visible"] = true);
      }
      if (disableCondition == false) {
        return (stepSelected["visible"] = false);
      }
    },
  };

  function selectStep(stepName) {
    for (let step = 0; step < Context.steps.length; step++) {
      const currentStep = Context.steps[step];
      if (currentStep.stepName === stepName) {
        return currentStep;
      }
    }
  }

  function validationPage(activeStep) {
    let validationProcessResult = false;
    const allRules = Context.webFormValidators; //to do remove
    activeStep.fields.map((el) => {
      //changeName
      const customFieldName = el.fieldName.split("_")[1];
      if (customFieldName == "demoFieldLocation") {
        const locationKeys = Object.keys(el.answerInput);
        locationKeys.map((complexEl) => {
          const complexFiledValue = document.getElementById(
            el.fieldName + el.answerInput[complexEl]
          );
          const ruleOptions = allRules[complexEl];
          if (
            ruleOptions != undefined &&
            ruleOptions.validation != null &&
            ruleOptions.validation(complexFiledValue.value)
          ) {
            document.getElementById(
              el.fieldName + el.answerInput[complexEl] + "_error"
            ).innerHTML = ruleOptions.validationMessage;
            validationProcessResult = true;
            return true;
          }
          document.getElementById(
            el.fieldName + el.answerInput[complexEl] + "_error"
          ).innerHTML = "";
        });
      }

      if (
        el.validation != null &&
        el.validation(activeStep.answerValue[el.fieldName].value)
      ) {
        document.getElementById(el.fieldName + "_error").innerHTML =
          el.validationMessage;
        validationProcessResult = true;
        return true;
      }
      document.getElementById(el.fieldName + "_error").innerHTML = "";
    });
    return validationProcessResult;
  }

  function updateContext(activeStep) {
    const questionResult = readFromDOM(activeStep, Context);
    if (activeStep) activeStep.answerValue = Object.assign({}, questionResult);
    // debugger;
  }

  return { value, snapshot, disableWizardStep, validationPage, updateContext };
}
