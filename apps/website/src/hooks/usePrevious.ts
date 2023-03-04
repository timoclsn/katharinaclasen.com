import { useEffect, useRef } from "react";

export const usePrevious = <State>(state: State) => {
  const ref = useRef(state);
  useEffect(() => {
    ref.current = state;
  }, [state]);
  return ref.current;
};