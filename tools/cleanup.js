"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var packageJson = JSON.parse(fs_1.readFileSync('./dist/package.json').toString());
delete packageJson.devDependencies;
delete packageJson.scripts;
fs_1.writeFileSync('./dist/package.json', JSON.stringify(packageJson, null, 2));
//# sourceMappingURL=cleanup.js.map