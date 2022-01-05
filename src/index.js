import * as visualizer from './visualizer';

const visualizerConfig = {
  id: 'pressure-chart',
  url: '/data',
  timeout: 50,
  height: 300,
  pointCount: 100,
  from: 0,
  to: 5
};

visualizer.run(visualizerConfig);
