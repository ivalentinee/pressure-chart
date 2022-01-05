import { putCanvas } from './plotter/canvas';
import * as grid from './plotter/grid';
import * as points from './plotter/points';

const defaultColors = {
  graph: "red",
  background: 'rgb(255, 246, 201)',
  grid: 'black',
  error: "red",
};

const initialize = function(canvasID, config) {
  const { canvas, width, height } = putCanvas(canvasID, config.height);
  const ctx = canvas.getContext("2d");
  const abscissaPoints = buildAbscissaPoints(width, height, config.pointCount);

  const colors = {
    graph: config.graphColor || defaultColors.graph,
    background: config.backgroundColor || defaultColors.background,
    grid: config.gridColor || defaultColors.grid,
    error: config.errorColor || defaultColors.error,
  };

  const context = {
    ctx,
    width,
    height,
    abscissaPoints,
    pointCount: config.pointCount,
    from: config.from,
    to: config.to,
    colors: colors,
  };

  return context;
};

const buildAbscissaPoints = function(width, height, pointCount) {
  const increment = width / (pointCount - 1);

  let abscissaPoints = [];

  for (let i = 0; i < pointCount; i++) {
    abscissaPoints.push(i * increment);
  }

  return abscissaPoints;
};

const drawError = function(context) {
  const { ctx, colors, width, height } = context;
  ctx.font = "40px serif";
  ctx.fillStyle = colors.error;
  ctx.fillText("Error", 100, 50);
};

const drawGraph = function(context, values) {
  clear(context);
  grid.draw(context);
  points.draw(context, values);
};

const clear = function(context) {
  const { ctx } = context;
  ctx.clearRect(0, 0, ctx.width, ctx.height);
};

export { initialize, drawGraph, drawError };
