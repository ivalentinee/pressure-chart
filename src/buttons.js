const add = function(config) {
  const {id, text, method, url} = config;
  const button = putButtonElement(id, text);

  button.onclick = function() {
    onButtonClick(method, url);
  };
};

const putButtonElement = function(id, text) {
  let container = document.getElementById("buttons");
  let button = document.createElement("button");
  container.appendChild(button);

  button.innerText = text;

  return button;
};

const onButtonClick = function(method, url) {
  let xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.send();
};

export { add };
