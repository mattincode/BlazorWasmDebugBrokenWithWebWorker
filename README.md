# Demo - Blazor WASM Debugger not working with Web worker present
This is an example project to illustrate that the Debug proxy will stop working when a Web Worker is running in the same browser instance as the Blazor app beeing debugged.

## Overview
[VS2022] -> CDP over WebSockets -> [Debugging Proxy] -> CDP over WebSockets -> [Browser]

## How to reproduce
1. Run the project in the VS2022 debugger.
2. Open the "Counter"-page <- This will create a web worker
3. Set a breakpoint in the "IncrementCount" method
4. Click the "Click me" button.
5. The breakpoint will be hit -> Press "continue" in the VS2022 debugger.
6. Uncheck the breakpoint and then set it again on the same line.

### Result
The debugger will stop in javascript and display `Unable to retrieve source content`

### Expected result
The breakpoint should be set without any error message.

### Related 
I recall Steve Sanderson mentioning (can't find the issue) way back in ~2020 an issue with the Debug proxy not working with a Service Worker active.
