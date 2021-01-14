import React, {Component} from 'react';
import ScrollBox from './ScrollBox';

class App extends Component{

    state ={
        upDown :'u',
        value: 'To Bottom',
    }

    upOrDown = () => {
        if(this.state.upDown ==='u'){
            this.setState({
                upDown:'d',
                value:'To top',
            });
        }
        else{
            this.setState({
                upDown:'u',
                value:'To Bottom',
            })
        }
    }

    render(){
        return(
            <div>
                <ScrollBox ref={(ref)=>this.scrollBox=ref}/>
                <button onClick={()=>{
                    this.scrollBox.scrollChange(this.state.upDown);
                    this.upOrDown();
                }}>
                    이동
                </button>
            </div>
        );
    }
}

export default App;