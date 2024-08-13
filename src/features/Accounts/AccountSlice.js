const accountInitialState = {
  balance: 1000,
  deposit: 0,
  loanAmount: 0,
  loanPurpose: "",
  currency: "USD",
};

export default function accountReducer(state = accountInitialState, action) {
  switch (action.type) {
    case "account/deposit":
      return { ...state, balance: state.balance + action.payload };

    case "account/withdraw":
      return { ...state, balance: state.balance - action.payload };
    case "account/loanTaken":
      console.log(action.payload.loanAmount);
      console.log("loan : " + state.loanAmount)
      return {
        ...state,
        loanAmount:
          state.loanAmount > 0
            ? state.loanAmount
            : state.loanAmount + action.payload.loanAmount,
        loanPurpose: action.payload.purpose,
        balance: state.loanAmount > 0
        ? state.balance
        : state.balance + action.payload.loanAmount,
      };
    case "account/payLoan":
      return {
        ...state,
        loanAmount: 0,
        balance: state.balance - state.loanAmount,
      };
    default:
      return state;
  }
}

// store.dispatch({ type: "account/deposit", payload: 500 });
// console.log(store.getState());
// store.dispatch({ type: "account/withdraw", payload: 200 });
// console.log(store.getState());
// store.dispatch({
//   type: "account/loanTaken",
//   payload: { loanAmount: 5000, purpose: "bike buy" },
// });

// IT'S TIME TO MAKE ACTION CREATORS IN OUR APPLICATION , THOUGH ACTION CREATOR ARE NOT THE PART OF
// REDUX , BUT IT'S MORE HANDY TO USE AND PREVENT UNNESSESERY TYPO MISTAKES

// console.log(store.getState());
export function deposit(amount) {
  return { type: "account/deposit", payload: amount };
}
export function withdraw(amount) {
  return { type: "account/withdraw", payload: amount };
}
export function loanTaken(loanAmount, purpose) {
  console.log(loanAmount, purpose);
  return {
    type: "account/loanTaken",
    payload: { loanAmount: loanAmount, purpose: purpose },
  };
}

export function payLoan() {
  return { type: "account/payLoan" };
}
