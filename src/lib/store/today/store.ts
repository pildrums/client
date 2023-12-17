import { create } from "zustand";

interface TodayStore {
  bears: any;
  setToday: (item: any) => void;
}

export const useTodayStore = create<TodayStore>((set) => ({
  bears: "",
  setToday: (item) => {
    set((state) => ({ ...state, setToday: item }));
  },
}));
