import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAmount } from "../store/features/counterSlice";

const InputCount = () => {
  const dispatch = useDispatch();
  //   const [amount, setAmount] = useState(0);
  //   const addValue = Number(amount) || 0;
  const amount = useSelector((state) => state.counter.amountState);
  console.log(amount);
  return (
    <form>
      <input type="text" />

      <button type="button">add count</button>
    </form>
  );
};

export default InputCount;
