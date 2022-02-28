import './App.css';
import React,{useState,useEffect} from 'react'
import AddressForm from './components/AddressForm';
import AddressCard from './components/AddressCard';
import axios from "axios";

function App() {
  const [addressList,setAddressList]=useState([])


  useEffect(() => {
    (async () => {
      const resp = await axios.get(
        "https://6218ca5d1a1ba20cbaab7005.mockapi.io/api/address"
      );
      console.log(resp);
      const data = await resp.data;
      console.log(data);
      setAddressList(data);
    })();
  }, []);

  return (
    <div className="App">
        <AddressForm addressList={addressList} setAddressList={setAddressList}/>
        {
          addressList.map((add)=>{
            return (
              <AddressCard key={add.id} address={add}/>
            )
          })
        }
    </div>
  );
}

export default App;
