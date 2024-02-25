import { useState } from "react";
import styles from "./Counter.module.css";

const Counter=()=>{
    // eslint-disable-next-line no-unused-vars
    const[count,setCount]=useState(0);
    console.log(count);
    return (
     <div className={styles.container}>   
    <h1>Counter</h1>
    <h1>{count}</h1>
    <button onClick={()=>{
        console.log("btn clicked");
        setCount(count+1);
    }}>Increment</button>
    <button onClick={()=>{
        if(count>0)
        setCount(count-1)
    }}>Decrement</button>
    <button onClick={()=>{
        setCount(0);
    }}>Reset</button>
    </div>
    )

}
export default Counter;