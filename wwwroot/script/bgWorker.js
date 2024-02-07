// This is just an empty worker....
class ClientBackgroundWorker {
    constructor() {
        this._enableDebugLog = false;        
    }    
}

let worker = new ClientBackgroundWorker(indexedDB);
console.log("** --- Background worker created --- ***");
self.onmessage = (e) => {
    console.log(`** --- Background worker message: ${e.data}`);        
};