const putCanvas = function(canvasID, height) {
  let container = document.getElementById("charts");
  let canvas = document.createElement("canvas");
  container.appendChild(canvas);

  const width = window.screen.width;

  canvas.setAttribute('width', width);
  canvas.setAttribute('height', height);
  canvas.setAttribute('id', canvasID);

  return { canvas, width, height };
};

export { putCanvas };
