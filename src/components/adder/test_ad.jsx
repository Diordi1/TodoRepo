import { useEffect } from "react";
import axios from "axios";
export default function Tester(){
    useEffect(
        ()=>get2()
    )
    function get2(){
        axios.post("http://localhost:8080/authenticate",{
            username:"in28minutes",
            password:"dummy"
        })
        .then(response=>{
            console.log(response);
            console.log("done");
            console.log(response.data.token);
            
        })
        .catch(err=>console.log(err))
        .finally(()=>console.log("fetched"));

    }
    
}