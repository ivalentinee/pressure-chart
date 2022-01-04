const draw = function(context) {
  const { ctx, width, height } = context;
  drawBackground(context);
  drawGridLines(context);
  drawText(context);
};

const drawBackground = function(context) {
  const { ctx, colors, width, height } = context;
  ctx.fillStyle = colors.background;
  ctx.fillRect(0, 0, width, height);
};

const drawText = function(context) {
  const { ctx, colors, width, height } = context;
  ctx.font = "20px serif";
  ctx.fillStyle = colors.grid;
  ctx.fillText(context.to, 10, 25);
  ctx.fillText(context.from, 10, height - 10);
};

const drawGridLines = function(context) {
  const { ctx, width, height } = context;
  drawGridLine(context, 0, 0, width, 0);
  drawGridLine(context, 0, height, width, height);
};

const drawGridLine = function(context, xFrom, yFrom, xTo, yTo) {
  const { ctx, colors } = context;

  ctx.beginPath();
  ctx.moveTo(xFrom, yFrom);
  ctx.lineTo(xTo, yTo);
  ctx.strokeStyle = colors.grid;
  ctx.stroke();
};

export { draw };
