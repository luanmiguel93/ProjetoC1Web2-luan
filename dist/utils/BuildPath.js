"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//reajuste de caminho
function BuildPath(pathDirName) {
    var paths = pathDirName.split("\\");
    var path = "";
    for (var i = 0; i < paths.length - 1; i++) {
        path = path + paths[i] + "\\";
    }
    return path;
}
exports.default = BuildPath;
