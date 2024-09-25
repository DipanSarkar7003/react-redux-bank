// import { combineReducers, createStore  } from "redux";
import accountReducer from "./features/Accounts/AccountSlice";
import customerReducer from "./features/Customers/CustomerSlice";
import { configureStore } from "@reduxjs/toolkit";


// const store = createStore(accountReducer);

// const rootReducer = combineReducers({
//   account: accountReducer,
//   customer: customerReducer
// });

// const store = createStore (rootReducer)
 const store =  configureStore ({
  reducer : {
    account : accountReducer,
    customer : customerReducer
  }
 })



// console.log(store.getState());
// store.dispatch (createCustomer("Dipan" ,"111223"))

// console.log(store.getState().customer)


export default store;
