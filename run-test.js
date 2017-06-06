const http = require('http');
const urlParser = require('url');
const path = require('path');
const fs = require('fs');
const currentDir = __dirname;
const detect = require('detect-port');
process.env.singleRun = String(!!process.argv[2]);
const seleniumPort = 4444;
detect(seleniumPort, function(err, port) {
    if (port === seleniumPort) {
        console.log('Standalone Selenium Server unavailable at port', seleniumPort, 'run Generic tests except test/ui/*.');
        process.env.seleniumEnable = 'false';
    }
    http.createServer((request, response) => {
        let urlObject = urlParser.parse(request.url, true),
            pathname = decodeURIComponent(urlObject.pathname),
            filePath = path.join(currentDir, pathname);
        if (filePath.indexOf(pathname) !== -1 && (path.extname(pathname) in {'.js': '', '.html': '', '.css': '', '.json': '' }) && fs.existsSync(filePath)) {
            response.writeHead(200, {});
            response.end(fs.readFileSync(filePath, {encoding: 'utf8'}));
        } else {
            response.writeHead(404, {});
            response.end('File not found!');
        }
    }).listen(8849);


    let { init } = require('karma-event-driver-ext');
    init({
        onExit: (exitCode) => {
            console.log('exitCode',  exitCode);
        }
    });
});