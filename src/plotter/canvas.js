const putCanvas = function(canvasID) {
  let container = document.getElementById("charts");
  let canvas = document.createElement("canvas");
  container.appendChild(canvas);

  const width = window.screen.width;
  const height = 450;

  canvas.setAttribute('width', width);
  canvas.setAttribute('height', height);
  canvas.setAttribute('id', canvasID);

  return { canvas, width, height };
};

export { putCanvas };
