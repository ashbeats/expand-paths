# Expand-Paths



### Install

```bash
$ yarn add @recent-cli/expand-paths
```

```bash
$ npm -i @recent-cli/expand-paths
```



### Usage

```javascript
const {expandUserPath, expandAppData} = require('@recent-cli/expand-paths')

// To resolve a path in the user's home folder

console.log(
    expand.expandUserPath(".bash_profile") 
);

console.log(
    expand.expandUserPath(".bash_profile", true) //# ensures path exists
);

// To resolve the user's AppData folder (Windows only. Returns null otherwise)
console.log(
    expand.expandAppData(".bash_profile", true) //# ensures path exists
);

```



*Created for: @recent-cli tool*



