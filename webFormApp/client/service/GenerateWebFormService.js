export function GenerateWebFormService(
  applicationType,
  themeValue,
  disablePages
) {
  const queryOptionsMap = {
    //queryParserInterface
    applicationType: "at",
    disableSteps: "ds",
    theme: "tm",
    light: "li",
    dark: "dr",
    //application types
    "Apply now": "appNow",
    "Asset Finance": "assFinan",
    "Get in tach with us": "richUs",
    //screens
    // name: Apply now
    objectivesPage: "objP",
    desiredAmountPage: "desireAm",
    applicationPurposePage: "appPur",
    currentLanderLoanBalancePage: "currLander",
    propertyUsedForPage: "prop",
    investIncomeFreqPage: "invInc",
    propertyAddressPage: "propAdre",
    approximatePropertyValuePage: "approxProp",
    numberOfApplicantsPage: "numOfApp",
    relationStatusPage: "relStat",
    personalInfoPage: "persInf",
    // name: Asset Finance
    //objP
    //desireAm
    assetTypePage: "asTy",
    assetCostPage: "asCo",
    businessPurposesPage: "bussPur",
    //numOfApp
    //relStat
    //persInf
    // name: Get in tuch with us
    nameAndFamilyInformation: "namFamInfo",
    contactInformation: "contInf",
    contactMessage: "contMess",
  };

  function generateUrl() {
    let disableStepsParams = [];
    disablePages.map((el) => {
      if (queryOptionsMap[el]) disableStepsParams.push(queryOptionsMap[el]);
    });

    const exampleUrl = `https://s3-ap-southeast-2.amazonaws.com/public-salestrekker/app-webform/index.html?at=${
      queryOptionsMap[applicationType]
    }&tm=${queryOptionsMap[themeValue]}&ds=${disableStepsParams.toString()}`;
    return exampleUrl;
  }

  function generateIframeCode(test) {
    const url = test
      ? "https://s3-ap-southeast-2.amazonaws.com/public-salestrekker/app-webform/index.html?at=appNow&tm=li&ds="
      : generateUrl();

    const markup = `<div><iframe
        src=${url}\
        style="border:0;height:600px;width:100%;" \
      ></iframe>\</div>`;
    const parser = new DOMParser();
    const generatedCode = parser.parseFromString(markup, "text/html");
    return generatedCode.body.innerHTML.replace(/amp;/g, "");
  }

  return {
    generateUrl: generateUrl,
    generateIframeCode,
  };
}
