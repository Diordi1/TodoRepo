import { useContext } from "react";
import { AuthContext } from "../authContext";

export default function Footer(){
    const authContext=useContext(AuthContext);

    console.log(`footer ${authContext.value1}`);
    return(

      
      <div>
        <hr></hr>
        footer
      </div>
    );
  }