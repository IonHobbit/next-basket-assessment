import { useDispatch, useSelector, useStore } from "react-redux";
import { AppDispatch, AppStore, RootState } from "./store";
import type { TypedUseSelectorHook } from 'react-redux'

export const useAppStore: () => AppStore = useStore;
export const useAppDispatcher: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;