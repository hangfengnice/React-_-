import { ERROR, SUCCESS, LOADING } from "./constant";
export default (
  state = {
    isFirst: true,
    isLoading: false,
    users: [],
    errMsg: ""
  },
  action
) => {
  switch (action.type) {
    case LOADING:
      return {
        isFirst: false,
        isLoading: true,
        users: [],
        errMsg: ""
      };
    case SUCCESS:
      return {
        isFirst: false,
        isLoading: false,
        users: action.data,
        errMsg: ""
      };
    case ERROR:
      return {
        isFirst: false,
        isLoading: false,
        users: [],
        errMsg: "no message"
      };

    default:
      return state;
  }
};
