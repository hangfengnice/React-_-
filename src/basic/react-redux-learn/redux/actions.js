
export const incrementAction = (number) => ({
  type: 'increment',
  data: number
})

export const decrementAction = number => ({
  type: "decrement",
  data: number
});

export const asyncIncrementAction = number => {
  return dispatch => {
    setTimeout(() => {
      dispatch(incrementAction(number));
    }, 2000);
  };
};
