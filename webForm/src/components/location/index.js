export function LocationFieldRenderer(context) {
  return `<span class="text-red-500 text-xs italic" id="${
    context.fieldName
  }_error"></span>
  <br/>
 <div class="w-full max-w-lg mb-2">
  <div class="flex flex-wrap -mx-3 mb-2">
    <!--w-1/2 lg:w-1/2 px-3 mb- md:mb-0-->
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-2">
      <div class="flex-initial text">
        <h3 class="text-left text-salestrekker-font pb-2">${
          context.answerInput.unitNumber
        }</h3>
          <input
              class="text-input-field focus:outline-none focus:shadow-outline;"
              id="${
                context.fieldName + context.answerInput.unitNumber
              }" type="text"
        }">
        </br>
        <div class="text-left"> 
        <span class="text-red-500 text-xs italic" id="${
          context.fieldName + context.answerInput.unitNumber
        }_error"></span>
       <br />
     </div>
      </div>
    </div>
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-2">
    <div class="flex-initial text">
      <h3 class="text-left text-salestrekker-font pb-2">${
        context.answerInput.streetNumber
      }</h3>
        <input
            class="text-input-field focus:outline-none focus:shadow-outline;"
            id="${
              context.fieldName + context.answerInput.streetNumber
            }" type="text"
      }">
      </br>
      <div class="text-left"> 
      <span class="text-red-500 text-xs italic" id="${
        context.fieldName + context.answerInput.streetNumber
      }_error"></span>
     <br />
   </div>
    </div>
  </div>
  </div>
  <!-- 3 columns -->
  <div class="flex flex-wrap -mx-3 mb-2">
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-2">
    <div class="flex-initial text">
    <h3 class="text-left text-salestrekker-font pb-2">${
      context.answerInput.streetName
    }</h3>
      <input
          class="text-input-field focus:outline-none focus:shadow-outline;"
          id="${context.fieldName + context.answerInput.streetName}" type="text"
    }">
    </br>
    <div class="text-left"> 
    <span class="text-red-500 text-xs italic" id="${
      context.fieldName + context.answerInput.streetName
    }_error"></span>
   <br />
 </div>
  </div> </div>
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-2">
    <div class="flex-initial text">
    <h3 class="text-left text-salestrekker-font pb-2">${
      context.answerInput.streetType
    }</h3>
      <input
          class="text-input-field focus:outline-none focus:shadow-outline;"
          id="${context.fieldName + context.answerInput.streetType}" type="text"
    }">
    </br>
    <div class="text-left"> 
    <span class="text-red-500 text-xs italic" id="${
      context.fieldName + context.answerInput.streetType
    }_error"></span>
   <br />
 </div>
  </div> 
    </div>
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
    <div class="flex-initial text">
    <h3 class="text-left text-salestrekker-font pb-2">${
      context.answerInput["shuburb/town/city"]
    }</h3>
      <input
          class="text-input-field focus:outline-none focus:shadow-outline;"
          id="${
            context.fieldName + context.answerInput["shuburb/town/city"]
          }" type="text"
    }">
    </br>
    <div class="text-left"> 
    <span class="text-red-500 text-xs italic" id="${
      context.fieldName + context.answerInput["shuburb/town/city"]
    }_error"></span>
   <br />
 </div>
  </div> </div>
  <!-- last 3-->
  
  </div>
  <div class="flex flex-wrap -mx-3 mb-2">
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-2">
    <div class="flex-initial text">
    <h3 class="text-left text-salestrekker-font pb-2">${
      context.answerInput.state
    }</h3>
      <input
          class="text-input-field focus:outline-none focus:shadow-outline;"
          id="${context.fieldName + context.answerInput.state}" type="text"
    }">
    </br>
    <div class="text-left"> 
    <span class="text-red-500 text-xs italic" id="${
      context.fieldName + context.answerInput.state
    }_error"></span>
   <br />
 </div>
  </div> </div>
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-2">
    <div class="flex-initial text">
    <h3 class="text-left text-salestrekker-font pb-2">${
      context.answerInput.postal
    }</h3>
      <input
          class="text-input-field focus:outline-none focus:shadow-outline;"
          id="${context.fieldName + context.answerInput.postal}" type="text"
    }">
    </br>
    <div class="text-left"> 
    <span class="text-red-500 text-xs italic" id="${
      context.fieldName + context.answerInput.postal
    }_error"></span>
   <br />
 </div>
  </div> 
    </div>
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
    <div class="flex-initial text">
    <h3 class="text-left text-salestrekker-font pb-2">${
      context.answerInput.country
    }</h3>
      <input
          class="text-input-field focus:outline-none focus:shadow-outline;"
          id="${context.fieldName + context.answerInput.country}" type="text"
    }">
    </br>
    <div class="text-left"> 
    <span class="text-red-500 text-xs italic" id="${
      context.fieldName + context.answerInput.country
    }_error"></span>
   <br />
 </div>
  </div> </div>
</div>
  
</div>`;
}
