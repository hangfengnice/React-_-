
export const incrementAction = (number) => ({
  type: 'increment',
  data: number
})

export const decrementAction = number => ({
  type: "decrement",
  data: number
});
