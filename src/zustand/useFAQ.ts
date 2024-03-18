import { create } from "zustand";

interface useFAQState {
  questionId: string;
  answerId: string;
  setQuestionId: (questionId: string) => void;
  setAnswerId: (answerId: string) => void;
}

export const useFAQ = create<useFAQState>((set) => ({
  questionId: "1",
  answerId: "01",
  setQuestionId: (questionId: string) => set({ questionId }),
  setAnswerId: (answerId: string) => set({ answerId }),
}));
