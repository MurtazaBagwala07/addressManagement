import React from 'react'
import '../App.css'

const AddressCard = (prop) => {
  return (
    <div className="address-card">
        <p>{prop.address.name}</p>
        <p>{prop.address.city}</p>
        <p>{prop.address.pincode}</p>
        <p>{prop.address.mobile}</p>
        <button onClick={()=>prop.deleteHandler(prop.address.id)}>Delete</button>
        <button>Edit</button>
    </div>
  )
}

export default AddressCard