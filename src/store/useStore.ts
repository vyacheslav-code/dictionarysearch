import { useContext } from "react";
import { StoreContext } from "./storeProvider";
import { AppStore } from "./store";

export const useStore = (): AppStore => useContext(StoreContext);
