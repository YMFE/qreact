import { h, render, Component } from '../../src/preact';
/** @jsx h */

// gives call count and argument errors names (otherwise sinon just uses "spy"):
let spy = (name, ...args) => {
    let spy = sinon.spy(...args);
    spy.displayName = `spy('${name}')`;
    return spy;
};

describe('refs', () => {
    let scratch;

    before( () => {
        scratch = document.createElement('div');
        (document.body || document.documentElement).appendChild(scratch);
    });

    beforeEach( () => {
        scratch.innerHTML = '';
    });

    after( () => {
        scratch.parentNode.removeChild(scratch);
        scratch = null;
    });

    it('should invoke refs in render()', () => {
        let ref = spy('ref');
        render(<div ref={ref} />, scratch);
        expect(ref).to.have.been.calledOnce.and.calledWith(scratch.firstChild);
    });

    it('should invoke refs in Component.render()', () => {
        let outer = spy('outer'),
            inner = spy('inner');
        class Foo extends Component {
            render() {
                return (
                    <div ref={outer}>
                        <span ref={inner} />
                    </div>
                );
            }
        }
        render(<Foo />, scratch);

        expect(outer).to.have.been.calledWith(scratch.firstChild);
        expect(inner).to.have.been.calledWith(scratch.firstChild.firstChild);
    });

    it('should pass rendered DOM from functional components to ref functions', () => {
        let ref = spy('ref');

        const Foo = () => <div />;

        let root = render(<Foo ref={(a) => {
            ref(a)
        }} />, scratch);
        expect(ref).to.have.been.calledOnce;

        ref.reset();
        render(<Foo ref={ref} />, scratch, root);
        expect(ref).to.have.been.calledOnce;

        ref.reset();
        render(<span />, scratch, root);
        expect(ref).to.have.been.calledOnce.and.calledWith(null);
    });


    it('should not pass ref into component as a prop', () => {
        let foo = spy('foo'),
            bar = spy('bar');

        class Foo extends Component {
            render(){ return <div />; }
        }
        const Bar = spy('Bar', (p) => {
            bar(p)
            return <div />
        });

        sinon.spy(Foo.prototype, 'render');

        render((
            <div>
                <Foo ref={foo} a="a" />
                <Bar ref={bar} b="b" />
            </div>
        ), scratch);

        expect(Foo.prototype.render).to.have.been.calledWithMatch({ ref:sinon.match.falsy, a:'a' }, { }, { });
        expect(Bar).to.have.been.calledWithMatch({ b:'b', ref:sinon.match.falsy }, { });
    });

    it('should add refs to components representing DOM nodes with no attributes if they have been pre-rendered', () => {
        // Simulate pre-render
        let parent = document.createElement('div');
        let child = document.createElement('div');
        parent.appendChild(child);
        scratch.appendChild(parent); // scratch contains: <div><div></div></div>

        let ref = spy('ref');

        class Wrapper {
            render() {
                return <div></div>;
            }
        }

        render(<div><Wrapper ref={ c => ref(c.base) } /></div>, scratch, scratch.firstChild);
        expect(ref).to.have.been.calledOnce.and.calledWith(scratch.firstChild.firstChild);
    });
});
