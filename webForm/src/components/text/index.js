export function TextFiledRenderer(context) {
  return `
  <div class="flex flex-wrap -mx-3 mb-1">
    <div class="w-full px-3">
        <div class="flex-initial text">
          <h3 class="text-left text-salestrekker-font pb-2">${context.questionTitle}</h3>
            <input
                class="text-input-field focus:outline-none focus:shadow-outline;"
                id="${context.fieldName}" type="text">
          <div class="text-left"> 
             <span class="text-red-500 text-xs italic" id="${context.fieldName}_error"></span>
            <br />
          </div>
        </div>
    </div>
  </div>`;
}
