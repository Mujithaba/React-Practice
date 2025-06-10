import React from "react";
import { useDispatch } from "react-redux";
import { handleIncreaseCounterAction } from "../store/slices/counterSlice";

export default function CounterButton() {

    const dispatch = useDispatch()

    function handleClickIncrease(){
        dispatch(handleIncreaseCounterAction({'user':'hello','age':20}))
    }
    
  return (
    <div>
      <button
      onClick={handleClickIncrease}
        style={{ backgroundColor: "black", color: "white", fontWeight: "bold" }}
      >
        Increase Count
      </button>
    </div>
  );
}
