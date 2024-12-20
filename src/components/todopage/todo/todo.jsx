import axios from 'axios'
import {useEffect, useState} from 'react'
import { useActionData, useNavigate } from 'react-router-dom';
import { apiClient } from '../../apiService/ApiClient';
import { basicauth, tokeer } from '../login/Login';
import { getAll}  from '../../apiService/todoService';
function ListTodoComponent(){
    // const today=new Date();
    const [todos,setTodos]=useState([]);
    const navigate=useNavigate();
    const [mess,setMess]=useState("");

    useEffect(
        ()=>{
         autho().then(get1())
        }

        

    )
    const [token,setToken]=useState('');
    const [res,setRes]=useState(401);
  
    async function autho(){
    await axios.post("http://localhost:8080/authenticate",{
        username:"in28minutes",
        password:"dummy"
      }).then(response=>{
        

          setToken(response.data.token);
          console.log(response);
          console.log(response.data.token);
          console.log(response.status);
          setRes(response.status);

          console.log(token);
        return response;


       


        

      })
    }
    function get1(){
        console.log("ent1");
        
        
     

        if(res===200){
          console.log("entered");

          axios.get(`http://localhost:8080/todos1/hero/list`,{
            headers:{
              Authorization:'Bearer '+token



          }
        })
            .then((response)=>{
              // getResponse(response);

              console.log(response+"here");
              console.log("here");
              getResponse(response);


            })
            .catch((err)=> console.log(err))
            .finally(()=>console.log("ended"));
            
        // getAll("hero")
        // .then(response=>console.log(response))
        // .catch(err=>console.log(err));
        
        // console.log(apiClient);
        
        // apiClient.get(`/todos1/hero/list`).then(response=>console.log(response +"we are here"))
        // .catch(err=>console.log(err+"details"));
        
      }
    }
    function getResponse(response){
        setTodos(response.data);
       

    }
    function updateTodo(id){
        navigate(`/addtodo/${id}`)
    }
    const [tok,setTok]=useState("");

    function deleteTodo(id){
      
        axios.delete(`http://localhost:8080/todos1/hero/list/${id}`,{
          headers:{
            Authorization:'Bearer '+token
          }

        }).then((response)=>console.log(response)).catch((err)=>console.log(err));
       get1();
       setMess("deleted:"+id);


        
    }
    function adder(){
      navigate('/addtodo');

    }


    // const date1=new Date(today.getFullYear()+12,today.getMonth(),today.getDay());
//     const todos=[{
//       id:12,
//       des:'popoer',
//       done:false,
//       date:date1
//     },{
//     id:123,
//     des:'popoer',
//       done:false,
//       date:date1
//   },
//   {
//     id:124,
//     des:'popoer',
//       done:false,
//       date:date1
//   }
//   ];

  // console.log(todos);
  // console.log(todos[0]);
  // console.log(todos[0].id);
  // todos.forEach(element1=>{
  //   console.log(element1);

  // })

    return(
      <div className="container">
       
      <h1>Things to do</h1>
      <p>{mess}</p>
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Description</th>
            <th>Done</th>
            <th>Date</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
       <tbody>

          {
            

            todos.map(todos1=>(
              <tr key={todos1.id}>
              <td>{todos1.id}</td>
              <td>{todos1.des}</td>
              <td>{todos1.done.toString()}</td>
              <td>{todos1.ld.toString()}</td>
              <td><button className="btn btn-success" onClick={()=>updateTodo(todos1.id)}>Update</button></td>
              <td><button className="btn btn-danger" onClick={()=>deleteTodo(todos1.id)}>Delete</button></td>
             </tr>
          
            ),
        console.log(todos),

      )
      }
      </tbody>
          
         
       
      </table>
      <div><button onClick={adder} className="btn btn-success">Add todo</button></div>
      </div>
    );

  }
  
export default ListTodoComponent;
