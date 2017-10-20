const fs = require("fs-extra");
const path = require("path");
const exec = require("child_process").exec;
const ora = require("ora");

const anuPath = path.join(__dirname, "../../anu");
const qreactPath = path.join(__dirname, "../");
const dirs = ["build", "lib", "src", "ssr", "test"];
const spinner = ora("开始同步").start();

function empty(dir) {
  return new Promise((resolve, reject) => {
    fs.emptyDir(path.join(qreactPath, dir), err => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

function copy(dir) {
  return new Promise((resolve, reject) => {
    fs.copy(path.join(anuPath, dir), path.join(qreactPath, dir), err => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

function emptyDirs(dirs) {
  return Promise.all(dirs.map(dir => empty(dir)));
}

function copyDirs(dirs) {
  return Promise.all(dirs.map(dir => copy(dir)));
}

function build() {
  return new Promise((resolve, reject) => {
    exec(
      "npm run build",
      {
        cwd: path.join(qreactPath)
      },
      err => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      }
    );
  });
}

function start() {
  const emptyPromise = emptyDirs(dirs);
  emptyPromise
    .then(() => {
      spinner.succeed("已清除 QReact 下目录");
      return copyDirs(dirs);
    })
    .then(() => {
      spinner.succeed("已复制 anujs 至 QReact");
      spinner.start("正在编译...");
      return build();
    })
    .then(() => {
      spinner.succeed("已完成编译");
    })
    .catch(e => {
      console.error(e); // eslint-disable-line
      spinner.fail("同步失败");
    });
}

// async function start() {
//   try {
//     await emptyDirs(dirs);
//     spinner.succeed("已清除 QReact 下目录");
//     await copyDirs(dirs);
//     spinner.succeed("已复制 anujs 至 QReact");
//     spinner.start("正在编译...");
//     await build();
//     spinner.succeed("已完成编译");
//   } catch (e) {
//     console.error(e); // eslint-disable-line
//     spinner.fail("同步失败");
//   }
// }

start();
