var h = require('virtual-hyperscript');
var isarray = require('isarray');
var xtend = require('xtend');

var ns = 'http://www.w3.org/2000/svg';

module.exports = function (name, props, ch) {
    if (name === 'svg' && (!props || !props.xmlns)) {
        props = xtend({ xmlns: ns }, props);
    }
    if (props && !isarray(props)) {
        return h(name, {
            namespace: ns,
            attributes: props
        }, ch);
    }
    else return h(name, { namespace: ns }, props);
};
