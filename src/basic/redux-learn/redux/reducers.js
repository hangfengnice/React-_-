

function counterReducer(state = 0, action) {
  console.log("counterReducer", state, action);
  switch(action.type) {
    case "increment":
      return state + action.data
    case "decrement":
      return state - action.data
    default:
      return state
  }
}

export default counterReducer; 
