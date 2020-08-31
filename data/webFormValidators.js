export const webFormValidators = {
  min10: {
    validation: (currentValue) => {
      return currentValue.length < 10;
    },
    validationMessage: "Length of answer need to be more then 10 characters!",
  },
  max20: {
    validation: (currentValue) => {
      return currentValue.length > 20;
    },
    validationMessage: "Length of answer need to be less then 20 characters!",
  },
  email: {
    validation: (currentValue) => {
      return currentValue.indexOf("@") == -1;
    },
    validationMessage: "Please enter the valid email address!",
  },
  numberOfApplicants: {
    validation: (currentValue) => {
      return !currentValue || (currentValue != 0 && currentValue > 2);
    },
    validationMessage: "Please select some of answers!",
  },
  name: {
    validation: (currentValue) => {
      return currentValue == "";
    },
    validationMessage: "Please, enter the name!",
  },
  familyName: {
    validation: (currentValue) => {
      return currentValue == "";
    },
    validationMessage: "Please, enter the family name!",
  },
  phone: {
    validation: (currentValue) => {
      return isNaN(parseInt(currentValue));
    },
    validationMessage: "Please, enter your phone!",
  },
  message: {
    validation: (currentValue) => {
      return currentValue == "";
    },
    validationMessage: "Please, fill the message field!",
  },
  fullAddress: {
    validation: (currentValue) => {
      return currentValue == "";
    },
    validationMessage: "Please, enter the full address!",
  },
  unitNumber: {
    validation: (currentValue) => {
      return currentValue == "";
    },
    validationMessage: "Please enter the number of unit!",
  },
  streetNumber: {
    validation: (currentValue) => {
      return currentValue == "";
    },
    validationMessage: "Please enter the street number!",
  },
  streetName: {
    validation: (currentValue) => {
      return currentValue == "";
    },
    validationMessage: "Please enter the street name!",
  },
  streetType: {
    validation: (currentValue) => {
      return currentValue == "";
    },
    validationMessage: "Please enter the street type!",
  },
  "shuburb/town/city": {
    validation: (currentValue) => {
      return currentValue == "";
    },
    validationMessage: "Please enter the town/city!",
  },
  state: {
    validation: (currentValue) => {
      return currentValue == "";
    },
    validationMessage: "Please enter the state!",
  },
  postal: {
    validation: (currentValue) => {
      return currentValue == "";
    },
    validationMessage: "Please enter the postal code!",
  },
  country: {
    validation: (currentValue) => {
      return currentValue == "";
    },
    validationMessage: "Please enter the postal code!",
  },
};
