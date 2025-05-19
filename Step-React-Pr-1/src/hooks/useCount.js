import { useContext } from "react";
import CountContext from "../context/CountContex";

export default function useCount(){
    return useContext(CountContext)
}