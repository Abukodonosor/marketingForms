import { SelectFieldComponent } from "../components/select";
import { TextFiledRenderer } from "../components/text";
import { DropdownFieldRenderer } from "../components/dropdown";
import { MultiselectFieldComponent } from "../components/multiselect";
import { LocationFieldRenderer } from "../components/location";
import { createElement } from "./helpers";

export function NavigationRender(actionsHandlers, steps) {
  const navigation = createElement("div", {
    class: "web-form-navigation",
    id: "web-from-navigation",
  });

  const navigationButtons = [
    {
      id: "web-form-previous",
      text: "Previous",
      class: "navigation-buttons hidden ",
      onClick: actionsHandlers.goPrevious,
    },
    {
      id: "web-form-next",
      text: "Next",
      class:
        steps.length == 1 ? "navigation-buttons hidden" : "navigation-buttons",
      onClick: actionsHandlers.goNext,
    },
    {
      id: "web-form-submit",
      text: "Submit",
      class:
        steps.length == 1 ? "navigation-buttons" : "navigation-buttons hidden",
      onClick: actionsHandlers.goSubmit,
    },
  ].map((el) => {
    navigation.appendChild(renderButtonElement(el));
  });

  return navigation;
}

function renderButtonElement(buttonOptions) {
  const button = createElement("div", {
    class: buttonOptions.class,
    id: buttonOptions.id,
    innerHTML: buttonOptions.text,
    onclick: buttonOptions.onClick,
  });

  return button;
}
export function ContentRender(webFormId) {
  const formContent = createElement("div", { id: webFormId });
  return formContent;
}

export function ScreensRender(screens) {
  const newScreens = screens.map((currentScreen, key) => {
    const screenRenderer = createElement("div", {
      class:
        key == 0
          ? `web-form-step lg:w-full ${currentScreen.stepName} `
          : `web-form-step lg:w-full ${currentScreen.stepName} hidden`,
      innerHTML: multiComponentRenderer(currentScreen.fields),
    });
    return screenRenderer;
  });

  return newScreens;
}

function multiComponentRenderer(fields) {
  return fields
    .map((el) => {
      return componentRenderer(el);
    })
    .join("", ",");
}

function componentRenderer(currentScreenContext) {
  switch (currentScreenContext.answerType) {
    case "text":
      return TextFiledRenderer(currentScreenContext);
    case "select":
      return SelectFieldComponent(currentScreenContext);
    case "dropdown":
      return DropdownFieldRenderer(currentScreenContext);
    case "multiselect":
      return MultiselectFieldComponent(currentScreenContext);
    case "location":
      return LocationFieldRenderer(currentScreenContext);
    default:
      return null;
  }
}

export function RenderToDOM(elementId, parentElement, elements) {
  elements.forEach((el) => {
    parentElement.appendChild(el);
  });
  document.getElementById(elementId).appendChild(parentElement);
}

export function setDefaultTheme(theme) {
  document.getElementsByTagName("body")[0].className =
    theme == "light" ? "" : theme;
}
