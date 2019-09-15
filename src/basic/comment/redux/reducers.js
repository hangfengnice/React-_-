let commentList = [
      {
        userId: "001",
        userName: "hangfeng",
        content: "react so easy"
      },
      {
        userId: "002",
        userName: "yingying",
        content: "react so cool"
      },
      {
        userId: "003",
        userName: "jiaying",
        content: "react so great"
      }
    ]
export default (state = commentList, action) => {
  switch (action.type) {
    case "addComment":
      // state.unshift(action.data);
      return [action.data,...state];
    case "deleteComment":
      let index = action.data
      let newState = [...state]
      newState.splice(index, 1)
      return newState;
    default:
      return state;
  }
};
