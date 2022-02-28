import React,{useState,useEffect} from 'react'
import axios from "axios";

const AddressForm = (props) => {
    const [form,setForm] =useState({
        name:"",
        city:"",
        pincode:"",
        mobile:""
    })

    const submitHandler=(e)=>{
        e.preventDefault();
        props.setAddressList([...props.addressList,form])
        console.log(form)
        console.log(props.addressList)
    }

    useEffect(()=>{
        (async ()=>{
            const response = await axios.post("https://6218ca5d1a1ba20cbaab7005.mockapi.io/api/address",form)
            console.log(response)
        })();
    },[props.addressList])
    
  return (
    <form onSubmit={submitHandler}>
        <input onChange={(e)=>setForm({...form,name:e.target.value})} type="text" placeholder="name"/>
        <input onChange={(e)=>setForm({...form,city:e.target.value})} type="text" placeholder="city"/>
        <input onChange={(e)=>setForm({...form,pincode:e.target.value})} type="number" placeholder="pincode"/>
        <input onChange={(e)=>setForm({...form,mobile:e.target.value})} type="number" placeholder="mobile"/>
        <button type="submit">Submit</button>
    </form>
    )
}

export default AddressForm