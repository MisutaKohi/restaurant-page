function createDropdownMenu(menuPlaceholder, optionsText, optionsFunctions) {
  if (optionsText.length !== optionsFunctions.length) {
    throw new Error("Invalid dropdown menu arguments");
  }

  const div = document.createElement("div");
  div.style.display = "relative";
  div.style.flexDirection = "column";
  div.style.alignItems = "center";
  div.style.marginRight = "10px";

  const button = document.createElement("button");
  button.innerText = menuPlaceholder;
  button.classList.add("button");
  button.classList.add("nav-level");
  button.style.marginRight = 0;
  div.append(button);

  const dropdownContent = document.createElement("div");
  dropdownContent.style.position = "absolute";
  dropdownContent.style.borderCollapse = "collapse";
  dropdownContent.style.right = 0;
  dropdownContent.style.marginRight = "10px";
  div.append(dropdownContent);

  const options = [];

  for (let i = 0; i < optionsText.length; i++) {
    const option = document.createElement("div");
    options.push(option);
    option.innerText = optionsText[i];
    option.onclick = optionsFunctions[i];
    option.classList.add("hidden");
    option.style.border = "2px solid black";
    option.style.padding = "8px";
    option.style.width = "100px";
    option.style.cursor = "pointer";
    option.style.backgroundColor = "rgb(225, 225, 225)";
    option.onmouseover = () => {
      option.style.backgroundColor = "#d1b48a";
    };
    option.onmouseleave = () => {
      option.style.backgroundColor = "rgb(225, 225, 225)";
    };

    dropdownContent.append(option);
  }

  div.onmouseover = () => {
    button.style.borderBottomLeftRadius = 0;
    button.style.borderBottomRightRadius = 0;

    options.forEach((option) => {
      option.classList.remove("hidden");
    });
  };

  div.onmouseleave = () => {
    options.forEach((option) => {
      option.classList.add("hidden");
    });

    button.style.borderRadius = "10px";
  };

  return div;
}

export default createDropdownMenu;
