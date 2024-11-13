import { useEffect, useState } from 'react';
import './login.css'
import {useNavigate, useParams,Link} from 'react-router-dom'
import axios from 'axios';
import { apiClient } from '../../apiService/ApiClient.js';
export function tokeer(token){
    const toke=token
}
export default function Login(){
    const [value1,setValue]=useState('in28minutes')
    const [value2,setValuePass]=useState('dummy');
    const [authe1,setAuthe]=useState(false)
    const [notauthe,setnotAuthe]=useState(false);
    const navigate=useNavigate();
    const [token,setToken]=useState('');
    function change(event){
        console.log("change was called");
        setValue(event.target.value);
        
    }
    function changePass(event){
        setValuePass(event.target.value);
        
    }

    // const setToken=(token)=>{
        
    // }
    async function authe(){
        const token1='Basic '+btoa(value1+':'+value2);
        console.log(btoa(value1+':'+value2));

try{

    const res=await axios.post("http://localhost:8080/authenticate",{
        username:value1,
        password:value2
    });

    
        if(res.status===200){
            setAuthe(true);
            setnotAuthe(false);
            navigate(`/welcome/${value1}`);
            setToken('Bearer '+res.data.token);
            tokeer(token1);

             console.log("adding");
             
            
        }else{
            setnotAuthe(true);
            setAuthe(false);
            setToken(null);

        }
    }catch(error){
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
    const [toke,setToke]=useState("");

    async function autho()
    {
        await axios.post("http://localhost:8080/authenticate",{
            username:'in28minutes',
            password:'dummy'
        }).then(response=>{
            setToke(response.data.token);
            console.log(response);
            console.log(toke);
            return response;

        })
      


    }
    function callf(d1){
        if(autho.status===200){

            axios.get(`http://localhost:8080/todos1/${d1}`,{
                headers:{
                Authentication:'Bearer '+toke

            }
        })
        
        .then((response)=>responseTrigger(response))
        .catch((err)=> errTrigger(err))
        .finally(()=>console.log("Completed"));
    }

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
        export const basicauth=(token)=>{
            return axios.get("http://localhost:8080/basic",{
                headers:{
                    Authorization:token,
                }
            })
        }
     export function tokenDist(){
        axios.post(`http://localhost:8080/authenticate`,{
            username:'in28minutes',
            password:'dummy'
        }).then(response=>{
            return response.data.token;

        }).catch(err=>console.log(err));

     }