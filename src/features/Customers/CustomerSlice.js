


const customerInitialState = {
  fullName: "",
  nationalId: "",
};

// MAKING A REDUCER FOR CUSTOMERS  NAMING IT CUSTOMERREDUCER

export default function customerReducer(state = customerInitialState, action) {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalId: action.payload.nationalId,
      };

    case "customer/updateName":
      return { ...state, fullName: action.payload };

    case "customer/deleteCustomer":
      return customerInitialState;

      default : return state
  }
}

// ACTION CREATORS FOR CUSTOMER REDUCER ACTIONS

export function createCustomer(fullName, nationalId) {
  return { type: "customer/createCustomer", payload: { fullName, nationalId } };
}

export function updateName(fullName) {
  return { type: "customer/updateName", payload: fullName };
}

export function deleteCustomer(fullName) {
  return { payload: fullName, type: "customer/deleteCustomer" };
}