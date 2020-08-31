export function WebFormNavigation(context) {
  const ctx = context.value();

  const PREV_BUTTON_ID = "web-form-previous";
  const NEXT_BUTTON_ID = "web-form-next";
  const SUBMIT_BUTTON_ID = "web-form-submit";

  const wizardSteps = ctx.steps;
  let activeStep = wizardSteps[0]; // put activeStep inside wizard
  const stepsLength = wizardSteps.length;

  function goNext() {
    context.updateContext(activeStep);
    if (context.validationPage(activeStep)) {
      return false;
    }
    context.disableWizardStep(activeStep);
    //introduce generator
    let newStep = calcStep("next");
    if (newStep != undefined) {
      activeStep = newStep;
      stepUpdate();
      NavigationUpdate();
    }
  }

  function goPrevious() {
    let newStep = calcStep("back");
    if (newStep != undefined) {
      activeStep = newStep;
      stepUpdate();
      NavigationUpdate();
    }
  }

  function goSubmit() {
    context.updateContext(activeStep);
    if (context.validationPage(activeStep)) {
      return false;
    }
    ctx.onSubmit();
    ctx.webForm.sendData();
    console.log(context.value());
  }

  function getActiveStep() {
    return activeStep;
  }

  function stepUpdate() {
    const wizardSteps1 = document.getElementsByClassName("web-form-step");
    for (let page = 0; page < wizardSteps1.length; page++) {
      wizardSteps1[page].classList.add("hidden");
      if (page === activeStep.index) {
        wizardSteps1[page].classList.remove("hidden");
      }
    }
  }

  function calcStep(direction) {
    const DIRECTION = {
      next: 1,
      back: -1,
    };

    const stepDirection = DIRECTION[direction];
    for (
      let step = activeStep.index + stepDirection;
      step < stepsLength, step >= 0;
      step += stepDirection
    ) {
      const currentStep = ctx.steps[step];
      if (currentStep.visible) {
        return currentStep;
      }
    }
  }

  function NavigationUpdate() {
    if (activeStep.index != 0) {
      document.getElementById(PREV_BUTTON_ID).classList.remove("hidden");
    } else {
      document.getElementById(NEXT_BUTTON_ID).classList.add("hidden");
      document.getElementById(PREV_BUTTON_ID).classList.add("hidden");
    }
    if (activeStep.index == stepsLength - 1) {
      document.getElementById(SUBMIT_BUTTON_ID).classList.remove("hidden");
      document.getElementById(NEXT_BUTTON_ID).classList.add("hidden");
    }
    if (activeStep.index != stepsLength - 1) {
      document.getElementById(SUBMIT_BUTTON_ID).classList.add("hidden");
      document.getElementById(NEXT_BUTTON_ID).classList.remove("hidden");
    }
    if (stepsLength == 1) {
      document.getElementById(SUBMIT_BUTTON_ID).classList.remove("hidden");
      document.getElementById(NEXT_BUTTON_ID).classList.add("hidden");
    }
  }

  function steps() {
    return wizardSteps;
  }

  return {
    goNext,
    goPrevious,
    getActiveStep,
    goSubmit: goSubmit,
    steps,
  };
}
