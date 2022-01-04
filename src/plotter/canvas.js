const setSize = function(canvas) {
  const width = window.screen.width;
  const height = 450;

  canvas.setAttribute('width', width);
  canvas.setAttribute('height', height);

  return { width, height };
};

export { setSize };
