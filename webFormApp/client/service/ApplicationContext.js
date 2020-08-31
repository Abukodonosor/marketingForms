export function ApplicationContext() {
  const Context = {
    allApplicationTypes: webFormData,
    allApplicationPages: webFormFields,
    pickedData: {
      applicationType: "",
      theme: "",
      disabledPages: "",
    },
  };

  return Context;
}

export async function updateContext(Context) {
  Context.allApplicationTypes = await fetchWebFormJsonData(
    "http://localhost:3000/getWebFormData"
  );
  Context.allApplicationPages = await fetchWebFormJsonData(
    "http://localhost:3000/getWebFormField"
  );
  return Context;
}

function fetchWebFormJsonData(fileName) {
  return new Promise((resolve) => {
    fetch(`${fileName}`)
      .then(async (response) => await response.json())
      .then((json) => resolve(json));
  });
}

const webFormData = {
  "Apply now": [
    {
      stepName: "objectivesPage",
      visible: true,
      fields: ["objectives"],
    },
    {
      stepName: "desiredAmountPage",
      visible: true,
      fields: ["desireAmount"],
    },
    {
      stepName: "applicationPurposePage",
      visible: true,
      fields: ["applicationPurpose"],
    },
    {
      stepName: "currentLanderLoanBalancePage",
      visible: false,
      fields: ["current_lender", "loan_balance", "interest_rate"],
    },
    {
      stepName: "propertyUsedForPage",
      visible: true,
      fields: ["propertyUsedFor"],
    },
    {
      stepName: "investIncomeFreqPage",
      visible: false,
      fields: ["investment_income", "frequency_drop"],
    },
    {
      stepName: "propertyAddressPage",
      visible: true,
      fields: ["demoFieldLocation"],
    },
    {
      stepName: "approximatePropertyValuePage",
      visible: true,
      fields: ["approximatePropertyValue"],
    },
    {
      stepName: "numberOfApplicantsPage",
      visible: true,
      fields: ["numberOfApplicants"],
    },
    {
      stepName: "relationStatusPage",
      visible: false,
      fields: ["relationStatus"],
    },
    {
      stepName: "personalInfoPage",
      visible: true,
      fields: [
        "personal_info_name",
        "personal_info_surname",
        "personal_info_phone",
        "personal_info_email",
        "personal_info_notes",
      ],
    },
  ],
  "Asset Finance": [
    {
      stepName: "objectivesPage",
      visible: true,
      fields: ["objectives"],
    },
    {
      stepName: "desiredAmountPage",
      visible: true,
      fields: ["desireAmount"],
    },
    {
      stepName: "assetTypePage",
      visible: true,
      fields: ["assetType"],
    },
    {
      stepName: "assetCostPage",
      visible: true,
      fields: ["assetCost"],
    },
    {
      stepName: "businessPurposesPage",
      visible: true,
      fields: ["businessPurposes"],
    },
    {
      stepName: "numberOfApplicantsPage",
      visible: true,
      fields: ["numberOfApplicants"],
    },
    {
      stepName: "relationStatusPage",
      visible: false,
      fields: ["relationStatus"],
    },
    {
      stepName: "personalInfoPage",
      visible: true,
      fields: [
        "personal_info_name",
        "personal_info_surname",
        "personal_info_phone",
        "personal_info_email",
        "personal_info_notes",
      ],
    },
  ],
  "Get in tach with us": [
    {
      stepName: "nameAndFamilyInformation",
      visible: true,
      fields: ["firstName", "familyName"],
    },
    {
      stepName: "contactInformation",
      visible: true,
      fields: ["email", "phone"],
    },
    {
      stepName: "contactMessage",
      visible: true,
      fields: ["message"],
    },
  ],
};

const webFormFields = {
  fields: {
    demoFieldLocation: {
      answerType: "location",
      questionTitle: "What is your Address?",
      answerInput: {
        fullAddress: "Full address",
        unitNumber: "Unit number",
        streetNumber: "Street number",
        streetName: "Street name",
        streetType: "Street type",
        "shuburb/town/city": "Town/City",
        state: "State",
        postal: "Postal code",
        country: "Country",
      },
    },
    objectives: {
      answerType: "text",
      questionTitle:
        "In your words, tell us what are your immediate needs and objectives?",
      mandatory: true,
      validator: "min10",
    },
    applicationPurpose: {
      answerType: "select",
      questionTitle: "Purpose of application?",
      answerInput: [
        {
          label: "Refi",
          value: "REFI",
        },
        {
          label: "Purch",
          value: "PURCH",
        },
      ],
      mandatory: true,
    },
    desireAmount: {
      answerType: "dropdown",
      questionTitle: "What is your desired loan amount?",
      answerInput: [
        {
          label: "Salesstraker Credits",
          value: "salesstrakerCreditsApproved",
        },
        {
          label: "Option2",
          value: "option2",
        },
        {
          label: "Option3",
          value: "option3",
        },
      ],
      mandatory: true,
    },
    current_lender: {
      answerType: "text",
      questionTitle: "Current Lender?",
      mandatory: true,
    },
    loan_balance: {
      answerType: "text",
      questionTitle: "Loan Balance?",
      mandatory: true,
    },
    interest_rate: {
      answerType: "text",
      questionTitle: "Interest rate?",
      mandatory: true,
    },
    propertyUsedFor: {
      answerType: "select",
      questionTitle: "What is property used for?",
      answerInput: [
        {
          label: "INV",
          value: "Investment",
        },
        {
          label: "OO",
          value: "Ordering",
        },
      ],
      mandatory: true,
    },
    investment_income: {
      answerType: "text",
      questionTitle: "Investment income?",
      mandatory: true,
    },
    frequency_drop: {
      answerType: "select",
      questionTitle: "Frequency drop?",
      answerInput: [
        {
          label: "Refi",
          value: "REFI",
        },
        {
          label: "Purch",
          value: "PURCH",
        },
      ],
      mandatory: true,
    },
    propertyAddress: {
      answerType: "text",
      questionTitle: "What is the property address?",
      mandatory: true,
    },
    approximatePropertyValue: {
      answerType: "text",
      questionTitle: "What is the approximate property value?",
      mandatory: true,
    },
    numberOfApplicants: {
      answerType: "select",
      questionTitle: "How many applicants?",
      answerInput: [
        {
          label: "1",
          value: 1,
        },
        {
          label: "2",
          value: 2,
        },
      ],
      validator: "numberOfApplicants",
      mandatory: true,
    },
    relationStatus: {
      answerType: "text",
      questionTitle: "What is your relationship status?",
      mandatory: true,
    },
    personal_info_name: {
      answerType: "text",
      questionTitle: "Name?",
      mandatory: true,
    },
    personal_info_surname: {
      answerType: "text",
      questionTitle: "Surname?",
    },
    personal_info_phone: {
      answerType: "text",
      questionTitle: "Phone?",
    },
    personal_info_email: {
      answerType: "text",
      questionTitle: "Email?",
      validator: "email",
    },
    personal_info_notes: {
      answerType: "text",
      questionTitle: "Notes?",
    },
    assetType: {
      answerType: "text",
      questionTitle: "What is the asset type?",
      mandatory: true,
    },
    assetCost: {
      answerType: "text",
      questionTitle: "What is the approximate asset cost?",
      mandatory: true,
    },
    businessPurposes: {
      answerType: "text",
      questionTitle: "Is the asset used for business purposes?",
      mandatory: true,
    },
    firstName: {
      answerType: "text",
      questionTitle: "First name",
      validator: "name",
      mandatory: true,
    },
    familyName: {
      answerType: "text",
      questionTitle: "Family name",
      validator: "familyName",
      mandatory: true,
    },
    email: {
      answerType: "text",
      questionTitle: "E-Mail address",
      validator: "email",
      mandatory: true,
    },
    phone: {
      answerType: "text",
      questionTitle: "Phone number",
      validator: "phone",
      mandatory: true,
    },
    message: {
      answerType: "text",
      questionTitle: "Message",
      validator: "message",
      mandatory: true,
    },
  },
};
