import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Header from '../header';

class BasicDemo extends Component{
    render(){
        return (
            <div className='page'>
                <Header text='Basic' back='/'/>
                <div className='page-body'>
                      <div>todo</div>
                </div>
            </div>
        )
    }
}


export default BasicDemo;
