import axios from "axios";
import {Formik,Form, Field,ErrorMessage } from "formik";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Adder(){
    useEffect(
        ()=>{
          autho()
          
        },[]
        

    )
    const [tok1,setToken]=useState('');
    async function autho(){
      await axios.post("http://localhost:8080/authenticate",{
        username:"in28minutes",
        password:"dummy"
      }).then(response=>{
        if(response.status===200){

          setToken(response.data.token);
          SetToker(response.data.token);
          
          console.log(response);
        
          
        }else{
          console.log("errer")
        }


        

      })
    }
    
    const navigate=useNavigate();
    const [val,setVal]=useState(
        {
            id:6,
            ld:'',
            des:'',
            done:'',
        }
    );
    const [id,setId]=useState(val.id);
    const [ld,setld]=useState(val.ld);
    const [des,setdes]=useState(val.des);
    const [done,setdone]=useState(val.done);
    const [toker,SetToker]=useState('');
   

    
    function submit(values){
        console.log(values);

        const to1={
            id:values.id,
            ld:values.ld,
            des:values.des,
            done:values.done,
        }

        console.log(to1);
       


        axios.post(`http://localhost:8080/todos1/hero/list`,to1,{
            headers:{
                Authorization:'Bearer '+toker
            }
        })
        .then((reponse)=>{
            console.log(reponse);
            navigate('/todo');
        })
        .catch(err=>console.log(err))
        .finally(()=>console.log("ended"));

    }
    function validate(values){
        let errors={
            
        }
        if(values.des.length<5){
            errors.des="greater than 5";

        }
        if(values.done.length<4){
            errors.done="Done is empty";
        }
        return errors;

    }

    return(
        <Formik onSubmit={submit}
            initialValues={{id,ld,des,done}}
            enableReinitialize={true}
            validate={validate}
            validateOnBlur={false}
            validateOnChange={false}
        >
            {
                (props)=>(

            <Form>
                <ErrorMessage 
                                name="des"
                                component="div"
                                className = "alert alert-warning"
                                
                            />
                <ErrorMessage 
                                name="done"
                                component="div"
                                className = "alert alert-warning"
                                
                            />
            <fieldset className="form-group">
                <label c>Id</label>
                <Field type="text" className="form-control" name="id"></Field>
            </fieldset>
            <fieldset className="form-group">
                <label>LD</label>
                <Field type="date" className="form-control" name="ld"></Field>
            </fieldset>
            <fieldset className="form-group">
                <label>Des</label>
                <Field type="text"className="form-control" name="des"></Field>
            </fieldset>
            <fieldset className="form-group">
                <label>Done</label>
                <Field type="text"className="form-control" name="done"></Field>
            </fieldset>
            <div><button type="submit" className="btn btn-success">Add Todo</button></div>
            </Form>
                )
            }
        </Formik>

    );
}