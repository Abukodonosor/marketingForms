export function createElement(elType, elAttributes) {
  const advancedOptions = ["innerHTML", "onclick"];
  const newElement = document.createElement(elType);

  const elKeys = Object.keys(elAttributes);
  elKeys.map((el, key) => {
    newElement.setAttribute(el, elAttributes[el]);
    if (advancedOptions.includes(el)) {
      newElement[el] = elAttributes[el];
    }
  });
  return newElement;
}
