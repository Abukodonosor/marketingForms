export const webFormRules = {
  "Asset Finance": {
    numberOfApplicantsPage: {
      viewTrigger: (currentValue, step) => {
        step.disableStep(
          "relationStatusPage",
          currentValue["numberOfApplicantsPage_numberOfApplicants"].value != 2
        );
      },
    },
  },
  "Apply now": {
    numberOfApplicantsPage: {
      viewTrigger: (currentValue, step) => {
        step.disableStep(
          "relationStatusPage",
          currentValue["numberOfApplicantsPage_numberOfApplicants"].value != 2
        );
      },
    },
    applicationPurposePage: {
      viewTrigger: (currentValue, step) => {
        step.disableStep(
          "currentLanderLoanBalancePage",
          currentValue["applicationPurposePage_applicationPurpose"].value ==
            "PURCH"
        );
      },
    },
    propertyUsedForPage: {
      viewTrigger: (currentValue, step) => {
        step.disableStep(
          "investIncomeFreqPage",
          currentValue["propertyUsedForPage_propertyUsedFor"].value ==
            "Ordering"
        );
      },
    },
  },
  "Get in tach with us": {},
};
