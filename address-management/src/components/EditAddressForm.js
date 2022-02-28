import axios from 'axios';
import React,{useState,useEffect} from 'react'

const EditAddressForm = (props) => {
    const [form,setForm]=useState(props.address)
    const editHandler=(e)=>{
        e.preventDefault();
        (async ()=>{
            const response =await axios.put(`https://6218ca5d1a1ba20cbaab7005.mockapi.io/api/address/${props.address.id}`,form)
            console.log(response)
        })();
        props.setShowEdit(edit=>!edit);
    }
  return (
    <form onSubmit={editHandler}>
        <input onChange={(e)=>setForm({...form,name:e.target.value})} value={form.name} type="text" placeholder="name"/>
        <input onChange={(e)=>setForm({...form,city:e.target.value})} value={form.city} type="text" placeholder="city"/>
        <input onChange={(e)=>setForm({...form,pincode:e.target.value})} value={form.pincode} type="number" placeholder="pincode"/>
        <input onChange={(e)=>setForm({...form,mobile:e.target.value})} value={form.mobile} type="number" placeholder="mobile"/>
        <button type="submit">Edit</button>
    </form>
  )
}

export default EditAddressForm