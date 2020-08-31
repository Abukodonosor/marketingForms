// https://tailwindcss-custom-forms.netlify.app/
import { WebFormEngine } from "./WebForm";
import { QueryLib } from "./utils/ioQuery";
import "./styles.css";
export default function WebForm() {
  var webFormInstance = null;
  const queryLib = QueryLib();

  function init(config) {
    if (webFormInstance != null) {
      webFormInstance;
    }
    webFormInstance = WebFormEngine(config || configSchema);
    return webFormInstance;
  }

  function fetchWebFormJsonData(fileName) {
    return queryLib.fetchWebFormJsonData(fileName);
  }

  function readQueryParams(url) {
    return queryLib.readQueryParams(url);
  }

  return {
    init: init,
    readQueryParams: readQueryParams,

    fetchWebFormJsonData: fetchWebFormJsonData,
  };
}
