import axios from "axios";
import { Form, Formik ,Field} from "formik";
import { useState } from "react";

export default function Imgtest(){
    const [val,setval]=useState({
        id:0,
        
    })
    const [img,setimg]=useState("");


    
function handleoutput(val1){
    setval(val1);

}
function handlerFile(event){
    
        setimg("file", event.currentTarget.img);
      

}
    function sub(val1){
        var data = new FormData();
    
    data.append("data", val1.img);
        console.log(val1.img);
        axios.post("http://localhost:8080/adder",data,{
            headers:{
                "Content-Type":"multipart/form-data"
            }
        }).catch(err=>console.log(err));


    }

    
    return(

        <Formik initialValues={img}
            onSubmit={sub}
            enableReinitialize={true}
           
        >
            {
                (props)=>(

                    <Form>
               
                <fieldset className="form-group">
                    <label>upload the file</label>
                    <Field value={undefined}   type="file"  name="img" className="form-control" onChange={handlerFile}></Field>
                </fieldset>
                <button type="submit" className="btn btn-success"> submit </button>
            </Form>
            )
                }
        </Formik>
    );

}