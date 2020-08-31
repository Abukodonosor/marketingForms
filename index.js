const { default: WebForm } = require("./webForm/src");

import { webFormRules } from "./data/webFormRules";
import { webFormValidators } from "./data/webFormValidators";
import webAppData from "./data/webForm.json";
import webFormFields from "./data/webFormFields.json";

(async function run() {
  const WebFormEngine = WebForm();

  const hardcodedQueryStringMOCK = document.URL;
  const queryParams = WebFormEngine.readQueryParams(hardcodedQueryStringMOCK);

  const configSchema = {
    applicationType: queryParams.applicationType,
    excludeSteps: queryParams.disableSteps || [],
    theme: queryParams.theme,
    //engine config
    webFormApplications: webAppData,
    webFormFields: webFormFields,
    webFormRules: webFormRules,
    webFormValidators: webFormValidators,
    webForm: {
      uploadUrl: "http://localhost:3000/submit-app",
      method: "POST",
      token:
        "NDRlNmRkN2ViYmUwMTgwYjVmNDE4MmE5NTlhZjkyYzc3OTVhMmJiZTlkZTkwYzM1M2MwMjk0ODZiMDc0Y2M2Ng",
    },
  };

  const GenericFormNew = WebFormEngine.init(configSchema);
  GenericFormNew.start();
})();

// const webAppData = await WebFormEngine.fetchWebFormJsonData(
//   "http://localhost:3000/getWebFormData"
// );
// const webFormFields = await WebFormEngine.fetchWebFormJsonData(
//   "http://localhost:3000/getWebFormField"
// );
