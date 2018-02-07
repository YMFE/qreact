const path = require("path");
const fs = require("fs");
const ora = require("ora");
const UglifyJS = require("uglify-js");
const gzipSize = require("gzip-size");
const spinner = ora().start("开始压缩...");
const files = [
  "React.js",
  "ReactIE.js",
  "ReactDOMServer.js",
  "ReactSelection.js",
  "ReactShim.js"
];
const minifiedFiles = files.map(item =>
  path.join("dist", item.replace(/\.js$/, ".min.js"))
);
const filePaths = files.map(file => path.join("dist", file));
let completedCount = 0;

function readFile(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, "utf8", (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
}

function writeFile(path, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, data, "utf8", err => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
}

function start() {
  filePaths.forEach((path, i) => {
    readFile(path)
      .then(data => writeFile(minifiedFiles[i], UglifyJS.minify(data).code))
      .then((code) => {
        const originalSize = code.length / 1024;
        const gzippedSize = gzipSize.sync(code) / 1024;
        spinner.succeed(`${path} 已压缩，原始大小 ${originalSize.toPrecision(4)}KB，gzip 大小 ${gzippedSize.toPrecision(4)}KB`);
        if (++completedCount === files.length) {
          spinner.succeed("压缩完成");
        }
      });
  });
}

start();
