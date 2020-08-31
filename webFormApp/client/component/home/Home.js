import React, { useState } from "react";
import { DemoView } from "../demoView/DemoView";
import { Edit } from "../edit/Edit";

import { ApplicationContext } from "../../service/ApplicationContext";

export function Home() {
  const initData = ApplicationContext();
  const [appState, setAppState] = useState(initData);

  const [currentPageState, setCurrentPageState] = useState("Edit");
  const webFormSteps = ["Edit", "Create"];

  //Application state
  const [applicationType, setApplicationType] = useState("Apply now");
  const [themeValue, setThemeValue] = useState("light");
  const [disablePages, setDisablePages] = useState([]);

  return (
    <div className="home-content">
      <div className="option-content">
        <FullNavigationRender
          appTypesOptions={webFormSteps}
          setCurrentPageState={setCurrentPageState}
          currentPageState={currentPageState}
        />
        <ShowSelectedPage currentStep={currentPageState}>
          <Edit
            appState={appState}
            applicationType={applicationType}
            setApplicationType={setApplicationType}
            themeValue={themeValue}
            setThemeValue={setThemeValue}
            disablePages={disablePages}
            setDisablePages={setDisablePages}
          />
          <Create />
        </ShowSelectedPage>
      </div>
      <DemoView
        applicationType={applicationType}
        themeValue={themeValue}
        disablePages={disablePages}
      />
    </div>
  );
}

function FullNavigationRender({
  appTypesOptions,
  setCurrentPageState,
  currentPageState,
}) {
  return (
    <div className="options">
      {appTypesOptions.map((el, key) => {
        return (
          <NavigationPageOption
            setCurrentPageState={setCurrentPageState}
            name={el}
            key={key}
            currentPageState={currentPageState}
          />
        );
      })}
    </div>
  );
}

function NavigationPageOption({ setCurrentPageState, name, currentPageState }) {
  const selected = currentPageState == name;
  return (
    <React.Fragment>
      <div
        className={selected ? "option option-background" : "option"}
        onClick={() => setCurrentPageState(name)}
      >
        {name}
      </div>
    </React.Fragment>
  );
}

const ShowSelectedPage = ({ children, currentStep }) => {
  const displayPageInPublicProfile = children.filter(
    (el) => el.type.name === currentStep
  );
  return displayPageInPublicProfile;
};

function Create() {
  return <h1>Create component</h1>;
}
