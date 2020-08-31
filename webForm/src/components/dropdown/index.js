export function DropdownFieldRenderer(context) {
  const renderDropdownMenu = (currentScreen) => {
    const optionItems = [];
    for (let item = 0; item < currentScreen.answerInput.length; item++) {
      const currentItem = currentScreen.answerInput[item];
      const renderHTML = `<option value="${currentItem.value}">${currentItem.label}</option>`;
      optionItems.push(renderHTML);
    }
    return optionItems.join("", ",");
  };
  return `<div class="flex-wrap mb-1>
  <div class="w-full px-3">
    <h3 class="text-left text-salestrekker-font pb-2">${
      context.questionTitle
    }</h3>
      <div class="text">
      <div class="w-full md:w-1/1 md:mb-0">
        <div class="relative">
            <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="${
              context.fieldName
            }">
                ${renderDropdownMenu(context)}
                <br />
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
        </div>
        <div class="text-left"> 
          <span class="text-left text-red-500 text-xs italic" id="${
            context.fieldName
          }_error"></span>
        </div>
        <br />
    </div>
   </div>`;
}
