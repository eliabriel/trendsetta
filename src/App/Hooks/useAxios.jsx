import { useContext } from "react";
import AppContext from "../Provider/Context";
import axios from "axios";

function useaxios() {
  const request = { user: "skimz", id: 1, age: 25 };
  return request;
}

export default useaxios;
