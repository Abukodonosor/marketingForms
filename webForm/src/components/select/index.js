export function SelectFieldComponent(context) {
  const renderSelectMenu = (context1) => {
    const selectOptionsNew = context1.answerInput
      .map((el, key) => {
        return `<div class="" for="${context1.fieldName + "_" + el.label}">
        <input id="${
          context1.fieldName + "_" + el.label
        }" type="radio" class="form-radio" name="${
          context1.fieldName
        }" value="${el.value}">
        <label class="selectItem" for="${
          context1.fieldName + "_" + el.label
        }">${el.label}</label>
        </div>`;
      })
      .join("", ",");

    return selectOptionsNew;
  };
  return `<div class="flex flex-wrap -mx-3 mb-1">
  <div class="w-full px-3">
      <div class="flex-initial text">
      <br/>
        <h3 class="text-left text-salestrekker-font pb-2">${
          context.questionTitle
        }</h3>
        <div class="selectionContainer flex flex-wrap -mx-3 mb-1">
          ${renderSelectMenu(context)}
        </div>
        <div class="text-left"> 
           <span class="text-red-500 text-xs italic" id="${
             context.fieldName
           }_error"></span>
          <br />
        </div>
      </div>
  </div>
</div>`;
}
