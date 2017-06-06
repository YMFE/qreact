/**
 * @author qianjun.yang
 * @description do simple transform, may cause problems
 */
var fs = require('fs');
var path = require('path');
var argv = process.argv;
var cwd = process.cwd();
var fname = argv[2];
var opts = {encoding: 'utf8'}
fname = fname && path.join(cwd, fname)
if (fs.existsSync(fname)) {
    var content = fs.readFileSync(fname, opts);
    var ct = content.replace(/import([^\r\n\;]*)from([^\r\n\;]*)([;\r\n])?/g, function(mat, vars, libs, end) {
        vars = vars.trim()
        if (vars.indexOf(/[,\{\}]/g) !== -1) console.log('错误' + vars)
        return 'var ' + vars + ' = require(' + libs.trim() + ')' + end
    }).replace(/export[ ]+default[ ]+([^\r\n;\{\]]*)([;\r\n])?/g, function(mat, vars, end) {
        end = end || ''
        var name = vars.trim()
        if (name.indexOf('function') === 0 || !name || name.indexOf('.') !== -1) {
            name = path.basename(fname).replace(/\..*$/g, '')
        }
        return 'module.exports = require(\'qreact\').' + name + ' = ' + vars + end
    }).replace(/(\/\*|\/\/|\*)[ ]*@provides/g, function(mat, cmt) {return cmt})
    console.log(ct)
}