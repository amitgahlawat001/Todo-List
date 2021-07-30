import { useState, useEffect } from "react";

function btn(){
    const [count, setCount] = useState(0);
    const [loaded, setLoaded] = useEffect(false);

    useEffect(() =>{
        alert("hello")

    })

    useEffect(() =>{
        fetch("foo").then(()=> setLoaded(true))
    },[count]
        )

    return(
        <button onClick={() => setCount(count+1)}>
            {count}
        </button>
    );

}