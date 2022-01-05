import * as plotter from './plotter';

const httpRequestTimeoutOffset = 10;

const run = function(config) {
  const {id, url, timeout, pointCount, from, to} = config;
  const plotterConfig = {pointCount, from, to};

  const plotterContext = plotter.initialize(id, plotterConfig);
  setInterval(() => fetchAndDisplayData(url, timeout, plotterContext), timeout);
};

const fetchAndDisplayData = function(url, timeout, plotterContext) {
  let xhr = new XMLHttpRequest();
  xhr.timeout = timeout - httpRequestTimeoutOffset;
  xhr.responseType = 'json';
  xhr.open('GET', url);

  xhr.onload = function() {
    if (xhr.status != 200) {
      plotter.drawError(plotterContext);
    } else {
      const data = xhr.response;
      plotter.drawGraph(plotterContext, data);
    }
  };

  xhr.onerror = function() {
    plotter.drawError(plotterContext);
  };

  xhr.ontimeout = function () {
    plotter.drawError(plotterContext);
  };

  xhr.send();
};

export { run };
