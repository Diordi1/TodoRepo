import { useState } from 'react';
import './login.css'
import {useNavigate, useParams,Link} from 'react-router-dom'
import axios from 'axios';
export default function Login(){
    const [value1,setValue]=useState('in28')
    const [value2,setValuePass]=useState('pass');
    const [authe1,setAuthe]=useState(false)
    const [notauthe,setnotAuthe]=useState(false);
    const navigate=useNavigate();

    function change(event){
        console.log("change was called");
        setValue(event.target.value);

    }
    function changePass(event){
        setValuePass(event.target.value);

    }
    function authe(){
        if(value1==='in28'&&value2==='pass'){
        setAuthe(true);
        setnotAuthe(false);
        navigate(`/welcome/${value1}`);


        }else{
            setnotAuthe(true);
            setAuthe(false);

        }
    }
    // function Dis(){
    //     if(authe1){
    //         return(
    //             <div>Authenicated</div>
    //         );
    //     }
    // }
    // function Dis1(){
    //     if(notauthe){
    //         return(
    //             <div>Not authenicated</div>
    //         );
    //     }
    // }

    return(
        <div>

        {authe1&&<div>Authenicated</div>}
        {notauthe&&<div>Not authe</div>}
        <p><label>UserName:</label> <input type="text" value={value1} onChange={change}></input></p>
        <p><label>Password:</label> <input type="password" value={value2} onChange={changePass}></input></p>
        <p><button onClick={authe}>Login</button></p>
        </div>
    );

}
export function Welcome(){
    const param=useParams();
    console.log(param.username);
    const [prev,setPrev]=useState("");
    const [data,setData]=useState("data");
    
    function callf(d1){
        axios.get(`http://localhost:8080/todos1/${d1}`)
        .then((response)=>responseTrigger(response))
        .catch((err)=> errTrigger(err))
        .finally(()=>console.log("Completed"));

    }
    function responseTrigger(response){
        console.log(response);
        console.log(response.data.message);
        setPrev(response.data.message);


    }
    function errTrigger(err){
        console.log(err);

    }
    // const change=onChange();

    function changed(event){
        setData(event.target.value);

    }
    return(
        <div>

        <div><h1>welcome {param.username}</h1></div>
        <p>You are welcomed</p>
        <p>List of todos <Link to="/todo">Go Here</Link></p>
        <input type="text" value={data} onChange={changed}></input>
        <p>{prev}</p>
        <p><button className="btn btn-success"  onClick={()=>callf(data)}>Click here</button></p>
        </div>
    );
}
// axios.create(
//     {
//         baseURL:'http://localhost:8080'
//     }
// )