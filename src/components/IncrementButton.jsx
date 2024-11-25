import React from "react";
import { useDispatch } from "react-redux";
import { incrementCount } from "../store/features/counterSlice";
const IncrementButton = () => {
  const dispatch = useDispatch();
  return <button onClick={() => dispatch(incrementCount())}>+</button>;
};

export default IncrementButton;
