import { create } from "zustand";
import { CustomerType } from "@/utils/types";

interface SessionState<T extends CustomerType> {
  session: T | null;
  setSession: (session: T) => void;
  removeSession: () => void;
}

export const useSession = create<SessionState<CustomerType>>((set) => ({
  session: null,
  setSession: (session: CustomerType | null) => set({ session }),
  removeSession: () => set({ session: null }),
}));
