export function MultiselectFieldComponent(context) {
  const renderSelectMenu = (context1) => {
    const selectOptionsNew = context1.answerInput
      .map((el, key) => {
        return `<div class="" for="${context1.fieldName + "_" + el.label}">
        <input 
        id="${
          context1.fieldName + "_" + el.label
        }" type="checkbox" class="form-radio ${
          context1.fieldName
        }_multi" name="${context1.fieldName}" value="${el.value}">
        <label class="selectItem" for="${
          context1.fieldName + "_" + el.label
        }">${el.label}</label>
        </div>`;
      })
      .join("", ",");

    return selectOptionsNew;
  };
  return `${`<h3 class="text-left text-salestrekker-font pb-2">
      ${context.questionTitle}
    </h3>`}
        <div class="selectionContainer">
          ${renderSelectMenu(context)}
          ${!!context.index ? "<br />" : ""}
        </div>
        <div class="text-left"> 
        <span class="text-red-500 text-xs italic" id="${
          context.fieldName
        }_error"></span>
        </div>
        <br />`;
}
