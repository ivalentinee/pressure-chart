const fs = require('fs');
const process = require('process');

const exitWithMessage = function(message) {
  console.log(message);
  process.exit(1);
};

const tryReadFile = function(fileName) {
  let content;

  try {
    content = fs.readFileSync(fileName, 'utf8');
  } catch (err) {
    exitWithMessage(`Error reading ${fileName}`);
  }

  return content;
};

const tryWriteFile = function(fileName, content) {
  try {
    fs.writeFileSync(fileName, content);
  } catch (err) {
    exitWithMessage(`Error writing ${fileName}`);
  }
};

const args = process.argv.slice(2);

if (args.length < 3) exitWithMessage("Missing args");

const destFileName = args[0];
const sourceFileName = args[1];
const substitutionMarker = args[2];

if (!fs.existsSync(destFileName)) exitWithMessage(`File ${destFileName} does not exist`);
if (!fs.existsSync(sourceFileName)) exitWithMessage(`File ${sourceFileName} does not exist`);

const destFile = tryReadFile(destFileName);
const sourceFile = tryReadFile(sourceFileName);

const processedDestFile = destFile.replace(substitutionMarker, sourceFile);

tryWriteFile(destFileName, processedDestFile);
