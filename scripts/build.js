const fs = require("fs");
const ora = require("ora");
const path = require("path");
const gzipSize = require("gzip-size");
const format = require("prettier-eslint");
const UglifyJS = require("uglify-js");
const exec = require("child_process").exec;
const spinner = ora("building...").start();

// 配置文件
const configFiles = [
  "build/rollup.ie.js",
  "build/rollup.js",
  "build/rollup.selection.js",
  "build/rollup.shim.js",
  "build/rollup.ssr.js"
];

// 编译产物
const distFiles = [
  "dist/React.js",
  "dist/ReactIE.js",
  "dist/ReactDOMServer.js",
  "dist/ReactSelection.js",
  "dist/ReactShim.js"
];

const readFile = path => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, { encoding: "utf8" }, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

const writeFile = (filename, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(filename, data, { encoding: "utf8" }, err => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

const readdir = () =>
  new Promise((resolve, reject) => {
    fs.readdir("dist", (err, fileList) => {
      if (err) {
        reject(err);
      } else {
        resolve(fileList.map(file => path.resolve(__dirname, "../dist", file)));
      }
    });
  });

const deleteFile = filename =>
  new Promise((resolve, reject) => {
    fs.unlink(filename, err => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });

const emptyDist = () => {
  return readdir("dist").then(fileList =>
    Promise.all(fileList.map(file => deleteFile(path.resolve(file))))
  );
};

const execute = cmd =>
  new Promise((resolve, reject) => {
    exec(
      cmd,
      {
        cwd: path.resolve(__dirname, "..")
      },
      (err, stdout) => {
        if (err) {
          reject(err);
        } else {
          resolve({ stdout });
        }
      }
    );
  });

const shim = code => {
  return code
    .replace(/Object\.freeze/g, "extend")
    .replace(/\/\/freeze_start[\s\S]+?freeze_end/, "");
};

const computeSize = v => (v / 1024).toFixed(2);

const outputLog = ({ filename, code, source }) => {
  gzipSize(code).then(len => {
    const name = filename.split("/").slice(-1);
    const sourceSize = computeSize(source.length);
    const minifiedSize = computeSize(code.length);
    const gzippedSize = computeSize(len);

    spinner.info(
      `${name} 原始大小：${sourceSize} KB 压缩大小：${minifiedSize} KB gzip 大小：${gzippedSize} KB`
    );
  });
};

const minifyCode = filename => {
  const options = {
    sourceMap: true
  };

  // 针对 IE 启用 IE 支持
  if (/ie/i.test(filename)) {
    options.ie8 = true;
  }

  return readFile(filename)
    .then(source => {
      const { code, map } = UglifyJS.minify(source, options);
      return {
        code,
        map,
        source
      };
    })
    .then(({ code, map, source }) => {
      outputLog({ filename, code, source });

      return Promise.all([
        writeFile(filename.replace(/\.js/, ".min.js"), code),
        writeFile(filename.replace(/\.js/, ".min.js.map"), map)
      ]);
    });
};

const minify = () => Promise.all(distFiles.map(file => minifyCode(file)));

const rollup = config => execute(`node_modules/.bin/rollup -c ${config}`);

const pretty = file =>
  readFile(file).then(code =>
    writeFile(
      file,
      format({
        text: shim(code),
        filePath: path.resolve(__dirname, "../.eslint.js")
      })
    )
  );

const formatCode = () => Promise.all(distFiles.map(file => pretty(file)));

(() => {
  emptyDist()
    .then(() =>
      Promise.all(configFiles.map(config => rollup(config)))
        .then(() => {
          spinner.text = "beautifying...";
          return formatCode();
        })
        .then(() => {
          spinner.text = "minifying...";
          return minify();
        })
        .then(() => {
          spinner.succeed("build complete");
          spinner.stop();
        })
    )
    .catch(err => {
      spinner.fail(err);
      spinner.stop();
    });
})();
