export function QueryLib() {
  // This is manual mapper, this list need to be updated every time when we change appType pages
  const queryOptionsMap = {
    //queryParserInterface
    at: "applicationType",
    ds: "disableSteps",
    tm: "theme",
    li: "light",
    dr: "dark",
    //application types
    appNow: "Apply now",
    assFinan: "Asset Finance",
    richUs: "Get in tach with us",
    //screens
    // name: Apply now
    objP: "objectivesPage",
    desireAm: "desiredAmountPage",
    appPur: "applicationPurposePage",
    currLander: "currentLanderLoanBalancePage",
    prop: "propertyUsedForPage",
    invInc: "investIncomeFreqPage",
    propAdre: "propertyAddressPage",
    approxProp: "approximatePropertyValuePage",
    numOfApp: "numberOfApplicantsPage",
    relStat: "relationStatusPage",
    persInf: "personalInfoPage",
    // name: Asset Finance
    //objP
    //desireAm
    asTy: "assetTypePage",
    asCo: "assetCostPage",
    bussPur: "businessPurposesPage",
    //numOfApp
    //relStat
    //persInf
    // name: Get in tuch with us
    namFamInfo: "nameAndFamilyInformation",
    contInf: "contactInformation",
    contMess: "contactMessage",
  };

  function fetchWebFormJsonData(fileName) {
    return new Promise((resolve) => {
      fetch(`${fileName}`)
        .then((response) => response.json())
        .then((json) => resolve(json));
    });
  }

  function readQueryParams(url = window.location.search) {
    const urlParams = getParams(url);
    const resultParams = Object.create({
      applicationType: "",
      disableSteps: [],
      theme: "",
    });

    const urlKeys = Object.keys(urlParams);
    urlKeys.map((el) => {
      if (urlParams[el].indexOf(",") == -1) {
        resultParams[el] = queryOptionsMap[urlParams[el]];
      }
      if (urlParams[el].indexOf(",") != -1) {
        resultParams[el] = urlParams[el]
          .split(",")
          .map((screen) => queryOptionsMap[screen])
          .filter((el) => {
            if (!!el) {
              return el;
            }
          });
      }
      if (el == "disableSteps" && urlParams[el] == "") {
        resultParams[el] = [];
      }
    });

    return resultParams;
  }

  let getParams = (url) => {
    let params = {};
    let vars = url.split("?")[1].split("&");
    for (let i = 0; i < vars.length; i++) {
      let pair = vars[i].split("=");
      params[queryOptionsMap[pair[0]]] = pair[1];
    }
    return params;
  };
  return {
    fetchWebFormJsonData,
    readQueryParams,
  };
}
