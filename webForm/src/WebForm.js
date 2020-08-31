import {
  NavigationRender,
  ScreensRender,
  RenderToDOM,
  ContentRender,
  setDefaultTheme,
} from "./utils/ElementRenderer";
import { WebFormNavigation } from "./utils/FormNavigation";
import { WebFormContext } from "./utils/WebFormContext";

export function WebFormEngine(config) {
  const WebFormCtx = WebFormContext(config);
  const WebFormCurrent = WebFormCtx.value();

  const navigationWizard = WebFormNavigation(WebFormCtx);

  function start() {
    setDefaultTheme(WebFormCurrent.theme);
    const contentBox = ContentRender(WebFormCurrent.WEB_FORM_ID);
    const screens = ScreensRender(WebFormCurrent.steps);
    const navigation = NavigationRender(
      {
        goPrevious: navigationWizard.goPrevious,
        goNext: navigationWizard.goNext,
        goSubmit: navigationWizard.goSubmit,
      },
      WebFormCurrent.steps
    );

    RenderToDOM(WebFormCurrent.elementId, contentBox, [...screens, navigation]);
  }

  return {
    start: start,
  };
}
