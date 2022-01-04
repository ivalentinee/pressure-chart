const draw = function(context, values) {
  const { ctx, colors } = context;
  const points = valuesToPoints(context, values);
  const [firstPoint, ...restPoints] = points;

  ctx.beginPath();
  ctx.moveTo(firstPoint.x, firstPoint.y);
  restPoints.forEach(point => ctx.lineTo(point.x, point.y));
  ctx.strokeStyle = colors.grap;
  ctx.stroke();
};

const valuesToPoints = function(context, values) {
  let points = [];

  const startFrom = tooMuchValues(context, values) ? 0 : startOffset(context, values);

  for(let i = 0; i < context.pointCount; i++) {
    const point = {
      x: context.abscissaPoints[i + startFrom],
      y: valueToOrdinate(context, values[i]),
    };

    points.push(point);
  }

  return points;
};

const valueToOrdinate = function(context, value) {
  const span = context.to - context.from;
  const resolution = context.height / span;
  const lowBottomValue = value * resolution;
  const lowTopValue = context.height - lowBottomValue;

  return lowTopValue;
};

const tooMuchValues = function(context, values) {
  return values.length > context.pointCount;
};

const startOffset = function(context, values) {
  return context.pointCount - values.length;
};

export { draw };
