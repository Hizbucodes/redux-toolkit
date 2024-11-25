import React from "react";
import { addAmount, resetCounter } from "../store/features/counterSlice";
import { useDispatch } from "react-redux";

const ResetButton = () => {
  const dispatch = useDispatch();

  const resetAll = () => {
    dispatch(() => addAmount(2));
    dispatch(resetCounter());
  };
  return <button onClick={() => resetAll()}>Reset</button>;
};

export default ResetButton;
