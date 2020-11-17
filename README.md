## Make Gridstack work with Create React App based project (without any extra package)

The fix is simple:

### 1. Install dependencies of gridstack via npm
Refer package.json where gridstack is added as a dependency to the project

### 2. Import Gridstack in your component
Refer App.js, where Gridstack is being imported using import statements

### 3. Use useEffect hook to initialize Gridstack
Refer App.js, where the react hook "useEffect" is initializing GridStack for the DOM