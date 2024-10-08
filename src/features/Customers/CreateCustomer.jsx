import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createCustomer } from "./CustomerSlice";



function Customer() {
  const [fullName, setFullName] = useState("");
  const [nationalId, setNationalId] = useState("");
  const dispatch = useDispatch()
  const customer =  useSelector(store=> store.customer)
  function handleClick() {
    if (!fullName || !nationalId) return null 
dispatch (createCustomer(fullName , nationalId))
  }
if (customer.fullName) return null
  return (
    
    <div>
      <h2>Create new customer</h2>
      <div className="inputs">
        <div>
          <label>Customer full name</label>
          <input
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div>
          <label>National ID</label>
          <input
            value={nationalId}
            onChange={(e) => setNationalId(e.target.value)}
          />
        </div>
        <button onClick={handleClick}>Create new customer</button>
      </div>
    </div>
 
  );
}

export default Customer;
