const backgroundWorkerInstanceName = "myWorker";

window[backgroundWorkerInstanceName] = new Worker('script/bgWorker.js');