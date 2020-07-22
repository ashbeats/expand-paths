# Quick way to get paths to windows folders

## Usage

Examples:

To resolve %USERPROFILE%/.bash_history

```
const { expandUserPath } = require('....');

let path_xyz = expandUserPath('.bash_history');

// to ensure the path exists
path_xyz = expandUserPath('.bash_history', true);

// expandAppData works the same way
```

Notes: 

Can be used for `%USERPROFILE%, %APPDATA%` now directly.  


