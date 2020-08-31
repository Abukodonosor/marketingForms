export function readFromDOM(activeStep, Context) {
  if (!!activeStep.fields) {
    const resultValue = Object.create({});
    activeStep.fields.map((el) => {
      return (resultValue[el.fieldName] = readFrom(el, Context));
    });
    return resultValue;
  }
  return readFrom(activeStep, Context);
}

function readFrom(activeStep, Context) {
  switch (activeStep.answerType) {
    case "text":
      let textFieldResult = Object.assign(
        {},
        Context.webFormOptions.filedDefinition[activeStep.fieldName]
      );
      const textResult = document.getElementById(activeStep.fieldName);
      textFieldResult.value = textResult.value;
      return textFieldResult;
    case "select":
      let selectFieldResult = Object.assign(
        {},
        Context.webFormOptions.filedDefinition[activeStep.fieldName]
      );
      const selectResult = document.querySelector(
        `input[name="${activeStep.fieldName}"]:checked`
      );
      if (selectResult) selectFieldResult.value = selectResult.value;
      return selectFieldResult;
    case "dropdown":
      let dropdownFieldResult = Object.assign(
        {},
        Context.webFormOptions.filedDefinition[activeStep.fieldName]
      );
      const dropdownResult = document.getElementById(activeStep.fieldName);
      if (dropdownResult) dropdownFieldResult.value = dropdownResult.value;
      return dropdownFieldResult;
    case "multiselect":
      let multiselectAnswerResult = [];
      let multiselectFieldResult = Object.assign(
        {},
        Context.webFormOptions.filedDefinition[activeStep.fieldName]
      );
      const multiselectResult = document.getElementsByClassName(
        activeStep.fieldName + "_multi"
      );
      if (multiselectFieldResult) {
        for (let i = 0; i < multiselectResult.length; i++) {
          const current = multiselectResult[i];
          if (current.checked) {
            multiselectAnswerResult.push(current.value);
          }
        }
      }
      return multiselectAnswerResult;
    case "location":
      const locationAnswerResult = {};
      const idKey = activeStep.fieldName;

      const allAnswers = Object.keys(activeStep.answerInput);
      allAnswers.map((el) => {
        locationAnswerResult[el] = document.getElementById(
          activeStep.fieldName + activeStep.answerInput[el]
        ).value;
      });
      return locationAnswerResult;
    default:
      return null;
  }
}
