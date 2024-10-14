import './counter1.css'
import {useState} from 'react'
import PropTypes from 'prop-types'
export default function Counter(){
    const [value1,setValue]=useState(0);

    function increment(by){
        setValue(value1+by);
        console.log("increment was called");

        
    }
    function decrement(by){
        setValue(value1-by);
    console.log("decrement was called");

    }
    function reet(){
        setValue(0);

    }
    return (
        <div>
            <p className="tmeper">{value1}</p>
            <CounterButton by={1} increase={increment} decrease={decrement}/>
            <CounterButton by={2} increase={increment} decrease={decrement}/>
            <CounterButton by={3} increase={increment} decrease={decrement}/>
            <button onClick={reet} className="reet">Reset</button>

        </div>
    );

}
function CounterButton({by,increase,decrease}){
    const t1=useState(0);
    console.log(by)
function clicked(){
    console.log("clicked");
    
    
    t1[1](t1[0]+by);

    increase(by);
    
    
}
function decre(){
    t1[1](t1[0]-by);
    decrease(by)

}
    return(<div>
        
        <div><button onClick={()=>increase(by)} className="ur1">+{by}</button><button onClick={()=>decrease(by)} className="ur1">-{by}</button></div>
        {/* <div><button onClick={decre} className="ur1">-1</button></div> */}
    </div>
    );
    
}

Counter.propTypes={
    by:PropTypes.number
}
