import React,{Component, PureComponent} from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/lib/ReactDOMServer';


let scratch = document.getElementById('example');
let render = ReactDOM.render;
let expect = function(a, b) {
    console.log(a, b, a == b)
};

let removeChild = Element.prototype.removeChild;
Element.prototype.removeChild = function(child) {
    if (window.nima) {
        console.log(child.nodeName, child.className)
    }
    removeChild.call(this, child);
}
// import { Router, Route, hashHistory, Link } from 'react-router';

// import Header from './header';
// import BasicDemo from './Basic/basic';
// import EventDemo from './Basic/Event';

import style from './style/index.scss';

// let basic = [
//     {name:'basic',src:'/basic',component:BasicDemo},
//     {name:'event',src:'/event',component:EventDemo}
// ]


// class CataLog extends Component{
//     render(){
//         var s  = basic.map((item,index)=>{
//             return(
//                 <Link className='link' key={item.name} to={item.src}>{item.name}</Link>
//             )
//         })

//         console.log(s)
//         return(
//             <div className='page'>
//                 <Header text='demo'/>
//                 <div className='page-body'>
//                     <div className='section-title'>
//                         基础
//                     </div>
//                     {
//                         basic.map((item,index)=>{
//                             return(
//                                 <Link className='link' key={item.name} to={item.src}>{item.name} {100}</Link>
//                             )
//                         })
//                     }
//                 </div>

//             </div>
//         )
//     }
// }

// class Demo extends Component{
//     render(){

//         var basicCatalog = basic.map((item,index)=>{
//               return(
//                   <Route path='/basic' key='basic' component={BasicDemo}></Route>
//               )
//         })
//         return (
//           <Router history={hashHistory}>
//               <Route path={'/'} component={CataLog}/>
//               <Route path={'/basic'} component={BasicDemo}/>
//               <Route path={'/event'} component={EventDemo}/>




//           </Router>
//         )
//     }
// }

// class ParentClass extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             pstatus: true,
//         }
//     }

//     toggle() {
//         this.setState({
//             pstatus: !this.state.pstatus,
//         })
//     }

//     render() {
//         window.p = this;
//         return (<div className="page">
//             <div key="p1">p1</div>
//             <ChildClass />
//             <div key="p2">p2</div>
//         </div>)
//     }
// }

// class ChildClass extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             pstatus: true,
//         }
//     }

//     toggle() {
//         this.setState({
//             pstatus: !this.state.pstatus,
//         })
//     }

//     render() {
//         window.c = this;
//         return (<div className="page-body">
//             <div key="C1">C1</div>
//             <GrandChildClass name={this.state.pstatus}/>
//             <div key="p2">C2</div>
//         </div>)
//     }
// }

// function GrandChildClass (props) {
//     return props.name ?  (<div className="page-head">
//             <div key="GC1">GC1</div>
//             <div key="GC2">GC2</div>
//         </div>) : <div key="GC1">GC1</div>
// }

// class _GrandChildClass extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             pstatus: true,
//         }
//     }

//     toggle() {
//         this.setState({
//             pstatus: !this.state.pstatus,
//         })
//     }

//     render() {
//         window.g = this;
//         return (<div className="page-head">
//             <div key="GC1">GC1</div>
//             <div key="GC2">GC2</div>
//         </div>)
//     }
// }


// class LifeCycle extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             child: 1,
//         }
//     }

//     componentDidUpdate() {
//         console.log('LifeCycle', 'componentDidUpdate')
//     }

//     componentDidMount() {
//         console.log('LifeCycle', 'componentDidMount')
//     }

//     toggle() {
//         let child = this.state.child;
//         this.setState({
//             child: child > 1 ? 1 : 2,
//         })
//     }

//     render() {
//         window.LifeCycleEx = this;
//         let child = this.state.child;
//         let arr = [];
//         while(arr.length < child) {
//             arr.push(<ChildLife 
//                 name={arr.length} 
//                 key={arr.length} 
//             />)
//         }
//         return <div>
//             {arr}
//         </div>
//     }
// }



// class ChildLife extends Component {
//     constructor(props) {
//         super(props);
//     }

//     componentDidUpdate() {
//         console.log('ChildLife', this.props.name, 'componentDidUpdate')
//     }

//     componentDidMount() {
//         if (this.props.name > 0) {
//             console.log('ChildLife')
//         }
//         console.log('ChildLife', this.props.name, 'componentDidMount')
//     }

//     componentWillUnmout() {
//         window['ChildLife' + this.props.name] = null;
//     }

//     toggle() {
//         this.setState({
//             status: 0,
//         })
//     }

//     render() {
//         let name = this.props.name;
//         window['ChildLife' + name] = this;

//         return <div id={'C' + name}>
//             <GrandChildLife name={name} />
//         </div>
//     }
// }

// class GrandChildLife extends Component {
//     constructor(props) {
//         super(props);
//     }

//     componentDidUpdate() {
//         console.log('GrandChildLife', this.props.name, 'componentDidUpdate')
//     }

//     componentDidMount() {
//         if (this.props.name > 0) {
//             console.log('GrandChildLife')
//         }
//         console.log('GrandChildLife', this.props.name, 'componentDidMount')
//     }

//     componentWillUnmout() {
//         window['GrandChildLife' + this.props.name] = null;
//     }

//     toggle() {
//         this.setState({
//             status: 0,
//         })
//     }

//     render() {
//         let name = this.props.name;
//         window['GrandChildLife' + name] = this;

//         return (
//             <div 
//                 id={'G' + name} 
//             >
//                 {name}
//             </div>
//         )
//     }
// }

// class Foo extends Component {
//     componentDidMount() {
//         debugger
//     }
//     componentWillUnmount() {
//         console.log('Foo', 'componentWillUnmount')
//     }
//     render() {
//         return null
//     }
// }
// class Bar extends Component {
//     componentDidMount() {
//     }
//     componentWillUnmount() {
//         console.log('Bar', 'componentWillUnmount')
//     }
//     render() {
//         return null
//     }
// }

// window.A = function() {
//     ReactDOM.render( <Foo / > , document.getElementById('example'));
// }

// window.B = function() {
//     ReactDOM.render( <Bar / > , document.getElementById('example'));
// }

// // A()
// let outerContext = { outer:true },
//     innerContext = { inner:true };
// class Outer extends Component {
//     // getChildContext() {
//     //     return { outerContext };
//     // }
//     render() {
//         console.log(this.props.children)
//         return <div><Inner /></div>;
//     }
// }

// class Inner extends Component {
//     // getChildContext() {
//     //     return { innerContext };
//     // }
//     render() {
//         return <InnerMost />;
//     }
// }

// class InnerMost extends Component {
//     render() {
//         console.log(this.props)
//         return <strong>test</strong>;
//     }
// }
// var lastA, lastB
// class A extends Component {
//     constructor(props) {
//         super(props);
//         this.state = this.state || {};
//         if (lastA) console.log(this.state === lastA.state)
//         lastA = this;
//     }
//     render() {
//         return null
//     }
// }
// class B extends PureComponent {
//     constructor(props) {
//         super(props);
//         this.state = this.state || {};
//         if (lastB) console.log(this.state === lastB.state)
//         lastB = this;
//     }
//     render() {
//         return null
//     }
// }
// class C extends Component {
//     constructor(props) {
//         super(props);
//         this.state = this.state || {defined: 'defined in constructor'}
//     }

//     getInitialState(props) {
//         return {
//             defined: 'defined in getInitialState'
//         }
//     }

//     render() {
//         console.log(this.state);
//         return <div>"C"</div>
//     }
// }
// ReactDOM.render(<C/>, scratch)
// ReactDOM.render(<div><A/><A/><B/><B/></div>, scratch);

// const PROPS = { foo:'bar', onBaz:()=>{} };

// var Outer2 = (props) => {
//     let a = <Inner2 {...props} />
//     return a
// }

// var Inner2 = (props) => {
//     let a = <div {...props}>inner</div>
//     return a
// }
// let useIntermediary = false;

// let createComponent = (Intermediary) => {
//     class C extends Component {
//         componentWillMount() {
//             console.log(2)
//         }
//         componentDidUnmount() {}
//         render() {
//             let { children } = this.props;
//             if (!useIntermediary) return children;
//             let I = useIntermediary===true ? Intermediary : useIntermediary;
//             return <I>{children}</I>;
//         }
//     }
//     return C;
// };

// let createFunction =() => ({ children }) => children;

// let root;
// let rndr = n => root = ReactDOM.render(n, scratch);

// let F1 = createFunction();
// let F2 = createFunction();
// let F3 = createFunction();

// let C1 = createComponent(F1);
// let C2 = createComponent(F2);
// let C3 = createComponent(F3);

// rndr(<C1><C2><C3>Some Text</C3></C2></C1>);

// ReactDOM.render(<Outer2 {...PROPS} />, document.getElementById('example'));


// ReactDOM.render( <Outer2 props={PROPS}/> , document.getElementById('example'));


;(function() {
    // class Foo extends Component {
    //     componentDidMount() {
    //         console.log('mount Foo')
    //     }
    //     componentDidUpdate() {
    //         console.log('update Foo')
    //     }
    //     componentWillUnmount() {
    //         if (window.nima) {
    //             console.log('xxx')
    //         }
    //         console.log('unmount Foo', this.props.rank)
    //     }
    //     render() {
    //         let alt = this.props.alt || this.state && this.state.alt || this.alt;
    //         let c = [
    //             <d>D</d>,
    //             // <b>{ alt?'alt':'bar' }</b>
    //         ];
    //         c = c[0]
    //         // if (alt) c.reverse();
    //         return <div className="Foo">{c}</div>;
    //     }
    // }
    // let comp;
    // let root, ca, a, b, c;
    // c = window.CC = document.createElement('c');
    // a = window.AA = document.createElement('a');
    // b = window.BB = document.createElement('b');
    // b.textContent = 'B';
    // c.textContent = 'C';
    // a.textContent = 'A';
    // if (c.parentNode != scratch) scratch.appendChild(c);
    // // clearContainer
    // root = render(<Foo ref={ c => comp = c } rank="1"/>, scratch);
    // // return
    // // ca = ReactDOM.findDOMNode(comp);
    // if (c.parentNode != scratch) scratch.appendChild(c);
    // // if (b.parentNode != ca) ca.appendChild(b);
    // // instance change clear container
    // root = render(<div className="P"><Foo ref={ c => comp = c }  rank="2"/></div>, scratch);
    // // return
    // ca = ReactDOM.findDOMNode(comp);
    // if (c.parentNode != scratch) scratch.appendChild(c);
    // // if (b.parentNode != ca) ca.appendChild(b);
    // // return
    // console.log(2);
    // window.nima = true;
    // // instance update won't clear container
    // root = render(<div className="P"><Foo ref={ c => comp = c }  rank="3"/></div>, scratch);
    // console.log(3)
})();


;(function() {
    // let html = '<b>foo &amp; bar</b>';
    // let root = render(<div dangerouslySetInnerHTML={{ __html: html }} />, scratch);

    // expect(scratch.firstChild.innerHTML, html);
    // expect(scratch.innerHTML, '<div>'+html+'</div>');

    // render(<div>a<strong>b</strong></div>, scratch);
    // expect(scratch.innerHTML, `<div>a<strong>b</strong></div>`);

    // render(<div dangerouslySetInnerHTML={{ __html: html }} />, scratch);
    // expect(scratch.innerHTML, '<div>'+html+'</div>');
})();

;(function() {
//     let parent = window._Parent = document.createElement('div');
//     let child = window._Child = document.createElement('div');
//     parent.className = "Parent";
//     parent.appendChild(child);
//     child.className = "Child";
//     child.id = 'child';
//     scratch.appendChild(parent); // scratch contains: <div><div></div></div>

//     // let ref = spy('ref');
//     let o = {
//         ref: function(dom) {
//             let a = dom;
//             console.log(dom === scratch.firstChild.firstChild, dom === child)
//         }
//     }
//     // spyAll(o, 'ref');

//     function Wrapper() {
//         return <div className="Wrapper"></div>;
//     }
// window.nima = true;
//     render(<div className="Top"><Wrapper ref={o.ref} /></div>, scratch, scratch.firstChild);
//     expect(document.querySelectorAll('.top')[0], parent);
})();

;(function() {
    let ele = <div className="Top">anihaoa{['anihaoa', 'pi']}<div>你是谁啊</div></div>;
    if (ReactDOMServer && ReactDOMServer.renderToString) {
        let html = ReactDOMServer.renderToString(ele);
        scratch.innerHTML = html;
        console.log(html);
    }
    render(ele, scratch);
})();
