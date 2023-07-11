setChartLibrary('google-chart');
setChartTitle('Light Intensity Monitor');
setChartType('areaGraph');
setAxisName('Time', 'Light');
setCrosshair(true);
setAnimation(true);
plotChart("time_stamp", "light");
