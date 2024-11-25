import React from "react";
import { decrementCount } from "../store/features/counterSlice";
import { useDispatch } from "react-redux";

const DecrementButton = () => {
  const dispatch = useDispatch();

  return <button onClick={() => dispatch(decrementCount())}>-</button>;
};

export default DecrementButton;
