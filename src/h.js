import { VNode } from './vnode';
import options from './options';

/** JSX/hyperscript reviver
*    Benchmarks: https://esbench.com/bench/57ee8f8e330ab09900a1a1a0
 *    @see http://jasonformat.com/wtf-is-jsx
 *    @public
 *  @example
 *  /** @jsx h *\/
 *  import { render, h } from 'preact';
 *  render(<span>foo</span>, document.body);
 */
export function h(nodeName, attributes) {
    let children = null, args = arguments, i = args.length;
    if (i === 3) {
        children = args[2];
    } else {
        for (; i-- > 2;) {
            (children = children || []).unshift(args[i]);
        }
    }
    if (attributes) {
        if (children == null) children = attributes.children;
        delete attributes.children;
    }
    let p = new VNode(nodeName, attributes || undefined, children);

    // if a "vnode hook" is defined, pass every created VNode to it
    if (options.vnode) options.vnode(p);

    return p;
}
