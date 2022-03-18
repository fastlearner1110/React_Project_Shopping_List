import React,{useState} from "react";

function InputArea(props) {
  const [inputText, setInputText] = useState("");
  const [quantity,setQuantity]=useState(0);
  let [price,setPrice]=useState("");
  function handleChange(event) {
    let newValue = event.target.value;
    setInputText(newValue);
  }
  let handleQuantity=(event)=>{
    let newQuantity=event.target.value;
    setQuantity(newQuantity);
  }
  let handlePrice=event=>{
       let newPrice=event.target.value;
       setPrice(newPrice);
  }
  return (
    <div className="form">
      <label style={{color:"green"}}>Item</label>
    <input onChange={handleChange} type="text" value={inputText} required/>
    <br/>
    <label style={{color:"green"}}>Quantity</label>
    <input onChange={handleQuantity} type="number" value={quantity}/>
    <br/>
    <label style={{color:"green"}}>Price</label>
    <input onChange={handlePrice} type="text" value={price}/>
    <br/>
      <button
         disabled={inputText.length<1 || price.length<1?true:false} 
         onClick={()=>{
         props.onAdd(inputText,quantity,price);
         setInputText("");
         setQuantity(0);
         setPrice("");
      }}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
