import React,{useState} from 'react'
import '../App.css'
import EditAddressForm from './EditAddressForm'

const AddressCard = (prop) => {
  const [showEdit,setShowEdit] = useState(false)
  return (
    <div className="address-card">
        <p>{prop.address.name}</p>
        <p>{prop.address.city}</p>
        <p>{prop.address.pincode}</p>
        <p>{prop.address.mobile}</p>
        <button onClick={()=>prop.deleteHandler(prop.address)}>Delete</button>
        <button onClick={()=>setShowEdit(edit=>!edit)}>Edit</button>
        {showEdit && <EditAddressForm address={prop.address} addressList={prop.addressList} setAddressList={prop.setAddressList} showEdit={showEdit} setShowEdit={setShowEdit}/>}
    </div>
  )
}

export default AddressCard