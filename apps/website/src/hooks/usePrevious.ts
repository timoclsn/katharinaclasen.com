import { useState } from "react";

export const usePrevious = <State>(state: State) => {
  const [tuple, setTuple] = useState([null, state]);

  if (tuple[1] !== state) {
    setTuple([tuple[1], state]);
  }

  return tuple[0];
};