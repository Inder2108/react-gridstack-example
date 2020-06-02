## Make Gridstack work with Create React App based project (without any extra package)

The fix is simple:

### 1. Load dependencies of gridstack
Refer index.html, where the dependencies are added from CDN links

### 2. Store Gridstack in a global space
Refer index.html, where the Gridstack is stored in global window object for reference

### 3. Use useEffect hook to initialize Gridstack
Refer App.js, where the react hook "useEffect" is initializing GridStack for the DOM

#### Note
The approach used is not "The Best". You should consider referencing the Gridstack using the correct way (either by using require syntax: If your project steup allows you to use require). But for those looking for using GridStack's amazing capabilities in React, this approach works just fine.
