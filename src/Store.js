import { combineReducers, createStore  } from "redux";
import accountReducer from "./features/Accounts/AccountSlice";
import customerReducer from "./features/Customers/CustomerSlice";




// const store = createStore(accountReducer);

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer
});

const store = createStore (rootReducer)


// console.log(store.getState());
// store.dispatch (createCustomer("Dipan" ,"111223"))

// console.log(store.getState().customer)


export default store;
