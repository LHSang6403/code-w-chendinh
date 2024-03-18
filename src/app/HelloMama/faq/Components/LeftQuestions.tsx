"use client";

import { useFAQ } from "@/zustand/useFAQ";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@components/ui/accordion";
import { ChevronDown } from "lucide-react";

import questions from "../static-data/questions.json";

export default function LeftQuestions() {
  const { setQuestionId, setAnswerId } = useFAQ();

  return (
    <Accordion type="multiple">
      {questions.map((question, index) => (
        <AccordionItem
          value={index.toString()}
          key={index}
          className="-mt-4 border-none"
        >
          <AccordionTrigger className="-mb-2 justify-start gap-1 font-light hover:no-underline">
            <span className="bg-gradient-to-b from-[#1E588F] via-[#0E7BB8] to-[#0E7BB8] bg-clip-text text-lg text-transparent">
              {question.question}
            </span>
            <ChevronDown className="h-4.5 w-4.5 shrink-0 text-[#0E7BB8] transition-transform duration-200" />
          </AccordionTrigger>
          <AccordionContent className="-mb-1 flex flex-col justify-start gap-3 font-extralight xl:gap-4">
            {question.answers.map((ans, index) => (
              <span
                onClick={() => {
                  setQuestionId(question.questionId);
                  setAnswerId(ans.answerId);
                }}
                key={index}
                className="text-base hover:cursor-pointer"
              >
                {ans.answer}
              </span>
            ))}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
