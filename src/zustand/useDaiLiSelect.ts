import { create } from "zustand";
import { SearchListItemProps } from "@utils/types";

interface useDaiLiSelectState {
  selectedDaiLi: SearchListItemProps;
  setDaiLi: (selectedDaiLi: SearchListItemProps) => void;
}

export const useDaiLiSelect = create<useDaiLiSelectState>((set) => ({
  selectedDaiLi: {
    name: "",
    province: "",
    district: "",
    address: "",
    phones: [],
    images: [],
  },
  setDaiLi: (selectedDaiLi) => set({ selectedDaiLi }),
}));
