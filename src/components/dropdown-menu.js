function createDropdownMenu(menuPlaceholder, optionsText, optionsFunctions) {
  if (optionsText.length !== optionsFunctions.length) {
    throw new Error("Invalid dropdown menu arguments");
  }

  const div = document.createElement("div");
  Object.assign(div.style, {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
  });

  const button = document.createElement("button");
  button.innerText = menuPlaceholder;
  button.classList.add("button", "nav-level");
  div.append(button);

  const dropdownContent = document.createElement("div");
  Object.assign(dropdownContent.style, {
    position: "absolute",
    top: "100%",
    overflow: "hidden",
    height: 0,
    marginRight: "15px",
    transition: "height 0.5s ease",
  });
  div.append(dropdownContent);

  for (let i = 0; i < optionsText.length; i++) {
    const option = document.createElement("div");
    option.innerText = optionsText[i];
    option.onclick = optionsFunctions[i];

    if (i === 0) {
      option.style.borderTop = "2px solid black";
    }

    Object.assign(option.style, {
      padding: "8px",
      width: "100px",
      cursor: "pointer",
      backgroundColor: "rgb(225, 225, 225)",
      borderLeft: "2px solid black",
      borderRight: "2px solid black",
      borderBottom: "2px solid black",
    });

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

    const borderThickness = 2;
    dropdownContent.style.height = `${
      calculateDropdownHeight(dropdownContent) + borderThickness
    }px`;
  };

  div.onmouseleave = () => {
    dropdownContent.style.height = "0px";

    setTimeout(() => {
      button.style.borderRadius = "10px";
    }, 400);
  };

  return div;
}

function calculateDropdownHeight(parentElement) {
  const options = Array.from(parentElement.children);
  // console.log(options);

  let totalHeight = 0;
  options.forEach((option) => {
    totalHeight += option.offsetHeight;

    // console.log(option.offsetHeight);
  });
  return totalHeight;
}

export default createDropdownMenu;
