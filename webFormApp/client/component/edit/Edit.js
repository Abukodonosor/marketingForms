import React, { useState } from "react";

export function Edit({
  appState,
  applicationType,
  setApplicationType,
  themeValue,
  setThemeValue,
  disablePages,
  setDisablePages,
}) {
  const onApplicationChangeHandler = (e) => {
    setDisablePages([]);
    setApplicationType(e.target.value);
  };

  const onThemeChangeHandler = (e) => {
    setThemeValue(event.target.value);
  };

  const onPageClickHandler = (e) => {
    const value = e.target.value;
    if (disablePages.includes(value)) {
      setDisablePages(
        disablePages.filter((el) => {
          if (el != value) return el;
        })
      );
    } else {
      setDisablePages([...disablePages, value]);
    }
  };

  const applicationTypes = Object.keys(appState.allApplicationTypes);
  const applicationTypesOptions = applicationTypes.map((el, key) => {
    return (
      <option value={el} key={key}>
        {el}
      </option>
    );
  });

  const allPageElementForAppType = appState.allApplicationTypes[
    applicationType
  ].map((el, key) => {
    return (
      <div key={key}>
        {key}.{" "}
        <input
          type="checkbox"
          value={el.stepName}
          onChange={onPageClickHandler}
        />{" "}
        pageName: {el.stepName}
      </div>
    );
  });

  return (
    <React.Fragment>
      <div className="w-1/2">
        <div className="form-row">
          Select application type:
          <select onChange={onApplicationChangeHandler}>
            {applicationTypesOptions}
          </select>
        </div>
        <div className="form-row">
          <div className="">
            Theme: <br />
            dark:{" "}
            <input
              type="radio"
              name="theme"
              onChange={onThemeChangeHandler}
              value="dark"
            />
            light:
            <input
              type="radio"
              name="theme"
              checked={themeValue == "light"}
              onChange={onThemeChangeHandler}
              value="light"
            />
          </div>
        </div>
        <div className="form-row">
          <h3>Pick pages which you want to exclude from flow:</h3>
          <br />
          <div className="">{allPageElementForAppType}</div>
        </div>
      </div>
    </React.Fragment>
  );
}
