import { useEffect } from "react"
import axios from 'axios';
import {useState} from'react'
import { useNavigate, useParams } from "react-router-dom";
import {Formik,Form,Field,ErrorMessage} from 'formik';

export default function AddTodo(){
    const param=useParams();
    const id=param.id;
    const navigate=useNavigate();


    useEffect(
        ()=>get1(),[id]
    )
    const temp={
        id:0,
        done:false,
        des:'',
        ld:'',
    }

    const [val,setVal]=useState(temp);

    function get1(){
        axios.get(`http://localhost:8080/todos1/hero/list/${id}`)
        .then((response)=>{
            setVal(response.data)
            console.log(response);
            console.log(val);

        })
        .catch(err=>console.log(err));

    }

    const [err,seterr]=useState({});
    function validate(val1){

        let errors = {
            despi:'this is despi'
        };
        if (val1.val.des.length < 10) {
          errors.des = "Email is too short";
        }
        console.log(errors.des);


        return errors;

    }
    function onSubm(val1){
        console.log(val1);
        console.log(val1.val);
        // console.log(val1)
        // console.log(val);

        // const temper1={
        //     id:val1.id,
        // done:val1.done,
        // des:val1.des,
        // ld:val1.ld,
        // }
        // console.log(temper1);


        axios.post(`http://localhost:8080/todos1/hero/list/${id}`,val1.val)
        .then((response)=>{
            console.log(response);
            navigate('/todo');

            
        })
        .catch((err)=>console.log(err));


    }
    return(

    <Formik initialValues={{val}}
    enableReinitialize={true}
    onSubmit={onSubm}
    validate={validate}
    >
        {
            (props)=>(

        <Form>
            <ErrorMessage component="div" name="despi"/>
            <hr></hr>
                <div>hello</div>
            
        
            <fieldset className="form-group">
                <label>Id</label>
                <Field type="text" className="form-control" name="val.id"></Field>
            </fieldset>
            <fieldset className="form-group">
                <label>Des</label>
                <Field type="text" className="form-control" name="val.des"></Field>
            </fieldset>
            <fieldset className="form-group">
                <label>Id</label>
                <Field type="date" className="form-control" name="val.ld"></Field>
            </fieldset>
            <fieldset className="form-group">
                <label>Id</label>
                <Field type="text" className="form-control" name="val.done"></Field>
            </fieldset>
                <div>

                <button className="btn btn-success" type="submit">Save</button>
                </div>
            
            
        </Form>
            )
        }
        </Formik>
           
    //     <Formik initialValues={ { } } 
    //     enableReinitialize = {true}
    //     // onSubmit = {onSubmit}
    //     // validate = {validate}
    //     validateOnChange = {false}
    //     validateOnBlur = {false}
    // >
    // {
    //     (props) => (
    //         <Form>
    //             {/* <ErrorMessage 
    //                 name="description"
    //                 component="div"
    //                 className = "alert alert-warning"
    //             />
                
    //             <ErrorMessage 
    //                 name="targetDate"
    //                 component="div"
    //                 className = "alert alert-warning"
    //             /> */}

    //             <fieldset className="form-group">
    //                 <label>Description</label>
    //                 <Field type="text" className="form-control" name="description" />
    //             </fieldset>
    //             <fieldset className="form-group">
    //                 <label>Target Date</label>
    //                 <Field type="date" className="form-control" name="targetDate"/>
    //             </fieldset>
    //             <div>
    //                 <button className="btn btn-success m-5" type="submit">Save</button>
    //             </div>
    //         </Form>
    //     )
    // }
    // </Formik>
        

    )
}

{/* Id : <input type="text" value={val.id}></input>
Done : <input type="text" value={val.done}></input>
Date : <input type="text" value={val.ld}></input>
Des : <input type="text" value={val.des}></input> */}