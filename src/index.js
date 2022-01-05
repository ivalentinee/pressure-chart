import * as visualizer from './visualizer';
import * as buttons from './buttons';

visualizer.add({
  id: 'pressure-chart',
  url: '/data',
  timeout: 50,
  height: 300,
  pointCount: 100,
  from: 0,
  to: 5
});

buttons.add({
  id: 'null-button',
  text: 'NULL',
  method: 'POST',
  url: '/null',
});
