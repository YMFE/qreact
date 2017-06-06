import { h } from '../../src/preact';
import { VNode } from '../../src/vnode';
import options from '../../src/options';
import { expect } from 'chai';

/*eslint-env browser, mocha */
const EMPTY_CHILDREN = undefined; //[];
/** @jsx h */

const buildVNode = (nodeName, attributes, children) => {
    let vnode = {
        nodeName,
        children,
        attributes,
        key: attributes && attributes.key
    };
    if (children === undefined) delete vnode.children;
    options.vnode(vnode);
    return vnode;
};

describe('h(jsx)', () => {
    it('should return a VNode', () => {
        let r;
        expect(() => r = h('foo')).not.to.throw();
        expect(r).to.be.an('object');
        expect(r).to.be.an.instanceof(VNode);
        expect(r).to.have.property('nodeName', 'foo');
        expect(r).to.have.property('attributes', undefined);
        expect(r.children).eql(EMPTY_CHILDREN);
    });

    it('should perserve raw attributes', () => {
        let attrs = { foo: 'bar', baz: 10, func: () => {} },
            r = h('foo', attrs);
        expect(r).to.be.an('object')
            .with.property('attributes')
            .that.deep.equals(attrs);
    });

    it('should support element children', () => {
        let r = h(
            'foo',
            null,
            h('bar'),
            h('baz')
        );

        expect(r).to.be.an('object')
            .with.property('children')
            .that.deep.equals([
                buildVNode('bar'),
                buildVNode('baz')
            ]);
    });

    it('should support multiple element children, given as arg list', () => {
        let r = h(
            'foo',
            null,
            h('bar'),
            h('baz', null, h('test'))
        );

        expect(r).to.be.an('object')
            .with.property('children')
            .that.deep.equals([
                buildVNode('bar'),
                buildVNode('baz', undefined, buildVNode('test'))
            ]);
    });

    it('should handle multiple element children, given as an array', () => {
        let r = h(
            'foo',
            null, [
                h('bar'),
                h('baz', null, h('test'))
            ]
        );
        // algorithm change
        expect(r).to.be.an('object')
            .with.property('children')
            .that.deep.equals([
                buildVNode('bar'),
                buildVNode('baz', undefined, buildVNode('test'))
            ]);
    });

    it('should handle multiple children, flattening one layer as needed', () => {
        let r = h(
            'foo',
            null,
            h('bar'), [
                h('baz', null, h('test'))
            ]
        );

        expect(r).to.be.an('object')
            .with.property('children')
            .that.deep.equals([
                buildVNode('bar'), [buildVNode('baz', undefined, buildVNode('test'))]
            ]);
    });

    // algorithm change
    /*
        children = [
            0: xxx
            1: [
                0: xxx
                1: xxx
            ],
            2: xxx
        ]
    */
    it('should support nested children', () => {
        const m = x => {
            return Array.isArray(x) ? x.map(m) : h(x);
        };
        expect(
            h('foo', null, m('a'), [m('b'), m('c')], m('d'))
        ).to.have.property('children').that.eql(['a', ['b', 'c'], 'd'].map(m));

        expect(
            h('foo', null, [m('a'), [m('b'), m('c')], m('d')])
        ).to.have.property('children').that.eql([
            'a', ['b', 'c'], 'd'
        ].map(m));

        expect(
            h('foo', { children: [m('a'), [m('b'), m('c')], m('d')] })
        ).to.have.property('children').that.eql([
            'a', ['b', 'c'], 'd'
        ].map(m));

        expect(
            h('foo', {
                children: [
                    [m('a'), [m('b'), m('c')], m('d')]
                ]
            })
        ).to.have.property('children').that.eql([[
            'a', ['b', 'c'], 'd'
        ].map(m)]);

        expect(
            h('foo', { children: m('a') })
        ).to.have.property('children').that.eql(m('a'));

        expect(
            h('foo', { children: 'a' })
        ).to.have.property('children').that.eql('a');
    });
    // algorithm change
    /*
        children = {
            xxx
        }
    */
    it('should support text children', () => {
        let r = h(
            'foo',
            null,
            'textstuff'
        );

        expect(r).to.be.an('object')
            .with.property('children')
            .that.equals('textstuff');
    });

    // algorithm change
    it('should not merge adjacent text children', () => {
        let r = h(
            'foo',
            null,
            'one',
            'two',
            h('bar'),
            'three',
            h('baz'),
            h('baz'),
            'four',
            null,
            'five',
            'six'
        );
        expect(r).to.be.an('object')
            .with.property('children')
            .that.deep.equals([
                'one',
                'two',
                buildVNode('bar'),
                'three',
                buildVNode('baz'),
                buildVNode('baz'),
                'four',
                null,
                'five',
                'six'
            ]);
    });
    // algorithm change
    it('should not merge nested adjacent text children', () => {
        let r = h(
            'foo',
            null,
            'one', ['two', null, 'three'],
            null, ['four', null, 'five', null],
            'six',
            null
        );

        expect(r).to.be.an('object')
            .with.property('children')
            .that.deep.equals([
                'one', ['two', null, 'three'],
                null, ['four', null, 'five', null],
                'six',
                null
            ]);
    });
    // algorithm change
    // it('should set children that are boolean values to null', () => {
    it('should do nothing to children', () => {
        let r = h(
            'foo',
            null,
            'one',
            true,
            'two',
            false,
            'three'
        );

        expect(r).to.be.an('object')
            .with.property('children')
            .that.deep.equals(['one', true, 'two', false, 'three']);
    });
    /*
        algorithm change, won't change key
        flatted {
            
        }
    */
    // it('should recompute key if children has same key',() => {
    //     let r = h(
    //         'div',
    //         null,
    //         h('p', {key: '1'}),
    //         h('p', {key: '2'}),
    //         h('p', {key: '3'}),
    //         h('p', {key: '1'})
    //     );
    //     let keyMap = {};
    //     let hasSameKey = false;
    //     r.children.map(child => {
    //         if(keyMap[child.key]){
    //             hasSameKey = true;
    //         }
    //            keyMap[child.key] = true;
    //     });
    //     expect(hasSameKey).equal(false);
    // });
});
