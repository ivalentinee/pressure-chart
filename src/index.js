import * as plotter from './plotter';
import * as values from './values';

const drawConfig = { pointCount: 100, from: 0, to: 5 };
const drawContext = plotter.initialize("chart", drawConfig);

const valueGenerator = values.generator();

function drawEachSecond() {
  const { value } = valueGenerator.next();
  plotter.drawGraph(drawContext, value);
  setTimeout(drawEachSecond, 50);
}

drawEachSecond();
