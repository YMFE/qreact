import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Header from '../header';

class Button extends Component{
    constructor(props){
        super(props);
        this.state = {
            log:[]
        }
    }
    updateLog(e,info){
        var newState = this.state.log;
        var clicklog = newState.length + e.type + ':' + info;
        newState.unshift(clicklog);
        this.setState({
            log: newState
        });
        console.log(e,e.nativeEvent);
    }
    render(){
      let log = this.state.log.length >= 1 ? (
            <div className='log-block'>{this.state.log.join(' ')}</div>
         ):null;

      return(
          <div className='section-body'>
              <div className="box">
                  <div className='outer' onClick={(e)=>this.updateLog(e,'outer')}>
                      onClick
                      <div className="inner" onClick={(e)=>this.updateLog(e,'inner')}>onClick</div>
                  </div>
                  <div className='outer' onClickCapture={(e)=>this.updateLog(e,'outer capture')}>
                      onClickCapture
                      <div className="inner" onClick={(e)=>this.updateLog(e,'inner')}>onClick</div>
                  </div>
              </div>
              {log}
          </div>

      )
    }
}

class Input extends Component{
    constructor(props){
        super(props);
        this.state = {
            log:'log'
        }
    }
    updateLog(e,info){
        this.setState({log:info});
        console.log(e,info);
    }
    render(){
      return(
          <div className='section-body'>
              <input
                className='basic-input'
                onFocus = {e=>this.updateLog(e,'input onFocus')}
                onBlur = {e=>this.updateLog(e,'input onBlur')}
                onChange = {e=>this.updateLog(e,'input onChange')}
                onInput = {e=>this.updateLog(e,'input onInput')}

                onCompositionStart = {e=>this.updateLog(e,'input onCompositionStart')}
                onCompositionUpdate = {e=>this.updateLog(e,'input onCompositionUpdate')}
                onCompositionEnd = {e=>this.updateLog(e,'input onCompositionEnd')}

                onCopy = {e=>this.updateLog(e,'input onCopy')}
                onCut = {e=>this.updateLog(e,'input onCut')}
                onPaste = {e=>this.updateLog(e,'input onPaste')}
              />
              <textarea className='basic-textarea' onSelect = {e=>this.updateLog(e,'textarea onSelect')} />
              <div className='log-inline'>{this.state.log}</div>

          </div>

      )
    }
}


class TouchEvent extends Component{
    constructor(props){
        super(props);
        this.state = {
            type:'',
            pageX:'',
            pageY:'',
        }
    }

    updateLog(e){
        console.log(e.nativeEvent);
        var point = e.nativeEvent.touches[0] || e.nativeEvent.changedTouches[0] || {};
        this.setState({type:e.type});
        this.setState({pageX:point.pageX});
        this.setState({pageY:point.pageY});
    }

    render(){
        return(
            <div className='section-body'>
                <div className='touch-box'
                    onTouchStart = {e=>this.updateLog(e)}
                    onTouchMove = {e=>this.updateLog(e)}
                    onTouchEnd = {e=>this.updateLog(e)}
                >
                    在此处拖拽

                </div>
                <div className='log-block'>
                    <div>type: {this.state.type}</div>
                    <div>pageX: {this.state.pageX}</div>
                    <div>pageY: {this.state.pageY}</div>
                </div>
            </div>
        )
    }
}


class Other extends Component{
    constructor(props){
        super(props);
        this.state = {
            log:'log'
        }
    }
    updateLog(e){
        this.setState({log:e.type});
        console.log(e);
    }
    render(){
      return(
          <div className='section-body'>
              <div className = 'other-box'
                  onScroll = {(e)=>this.updateLog(e)}
                  onSelect = {(e)=>this.updateLog(e)}
              >
                  <div className = 'other-cell'>
                     你可以测试<br/>
                     滑动onScroll<br/>

                   </div>
              </div>
              <div className='log-inline'>{this.state.log}</div>

          </div>

      )
    }
}




class Animation extends Component{
    constructor(props){
        super(props);
        this.state = {
            log:'log',
            animation: false,
            transition : false,
        }
    }
    updateLog(e){
        this.setState({log:e.type});
        if(e.type === 'animationEnd'){
            this.setState({play:false});
        }
        console.log(e);
    }
    render(){
        return(
          <div className='section-body'>
              <div className = 'animation-buttons'>
                <div className = 'basic-button'
                    onClick = {()=>{this.setState({animation:true})}}>
                    startAnimation
                </div>
                <div className = 'basic-button'
                    onClick = {()=>{this.setState({animation:false})}}>
                    resetAnimation
                </div>
              </div>
              <div className = 'animation-buttons'>
                <div className = 'basic-button'
                    onClick = {()=>{this.setState({transition:true})}}>
                    startTransion
                </div>
                <div className = 'basic-button'
                    onClick = {()=>{this.setState({transition:false})}}>
                    resetTransition
                </div>
              </div>
              <div className = {this.state.animation ? 'animation-box animate' : this.state.transition ? 'animation-box transition' : 'animation-box'}
                  onAnimationStart = {this.updateLog.bind(this)}
                  onAnimationIteration = {this.updateLog.bind(this)}
                  onAnimationEnd = {this.updateLog.bind(this)}
                  onTransitionEnd = {this.updateLog.bind(this)}
              ></div>
              <div className='log-inline'>{this.state.log}</div>

          </div>
        )

    }
}



class EventDemo extends Component{
    render(){
        return (
            <div className='page'>
                <Header text='Basic' back='/'/>
                <div className='page-body page-event'>
                      <div className='section-title'>onClick & onClickCapture</div>
                      <Button/>
                      <div className='section-title'>Input</div>
                      <Input/>
                      <div className='section-title'>TouchEvent</div>
                      <TouchEvent/>
                      <div className='section-title'>Other</div>
                      <Other/>
                      <div className='section-title'>Animation</div>
                      <Animation/>
                </div>
            </div>
        )
    }
}


export default EventDemo;
