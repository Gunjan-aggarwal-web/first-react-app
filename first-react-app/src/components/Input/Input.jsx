// eslint-disable-next-line react/prop-types
const Input=({changeHandler,val})=>{
    return <input type="text" onChange={(e)=>{
        console.log('input changed', e.target.value)
        changeHandler(e.target.value);
    }} value={val}/>

}
export default Input;