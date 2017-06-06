import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';


class Header extends Component{
    render(){
        let back = this.props.back ? (
          <Link className='back' to={this.props.back}>返回</Link>
        ) : null;
        return(
            <div className='page-header'>
                {back}
                {this.props.text}
            </div>
        )
    }
}

export default Header;
