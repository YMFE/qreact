export let PropTypes = {};
function noop() {
    return PropTypes;
}
'array bool func number object string any arrayOf element instanceOf node objectOf oneOf oneOfType shape'.split(' ').forEach(function(f) {
    PropTypes[f] = noop;
});

