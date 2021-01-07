import React, {Component}from 'react';

class Counter extends Component{
    //여기서
    state = {
        number:0,
        fixedNumber:0
    };
    //여기까지
    render(){
        const{number,fixedNumber}=this.state;//state조회할때에는 this.state로 조회
        return(
            <div>
                <h1>{number}</h1>
                <h2>바뀌지 않는 값:{fixedNumber}</h2>
                <button
                //onClick을 통해 클릭되었을 때 호출할 함수 지정
                onClick={()=>{
                    //this.setState로 state에 새로운 값 넣기
                    this.setState(
                        {
                       number : number + 1
                        },
                        () => {
                            console.log('방금 setState 호출됨');
                            console.log(this.state);
                        }
                    );
                }}
                >

                
            +1
            </button>
            </div>
        );
    }
}

export default Counter;