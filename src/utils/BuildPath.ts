
//reajuste de caminho
function BuildPath(pathDirName: string): string {
  const paths = pathDirName.split("\\");
  let path = "";
  for (let i = 0; i < paths.length - 1; i++) {
    path = path + paths[i] + "\\";
  }
  return path;
}

export default BuildPath;
