import { useEffect, useState } from "react";
import { store } from "@/store";

export const useStoreSelector = (selector) => {
  const [selectedState, setSelectedState] = useState(() =>
    selector(store.getState()),
  );

  useEffect(() => {
    return store.subscribe(() => setSelectedState(selector(store.getState())));
  }, [selector]);

  return selectedState;
};
