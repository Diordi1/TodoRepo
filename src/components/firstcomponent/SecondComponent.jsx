const name={
    namer:"dolly",
    profiles:["link","tree"],
    check1:()=>{
        
        console.log("hello");
        name.profiles.map(
            (profile)=>{
                console.log(profile);

            }
        )
    }

}
export default function SecondComponent(){
    return(
        <div>

        <div className="mem">this is the secondComponent</div>
        <p>{name.namer}</p>
        <p>{name.profiles}</p>
        <p>{name.check1()}</p>
        <p>{name.check1()}</p>
        </div>
    );

}