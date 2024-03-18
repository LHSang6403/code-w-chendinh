"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@components/ui/accordion";
import { ChevronDown } from "lucide-react";
import { useFAQ } from "@/zustand/useFAQ";

import questions from "../static-data/questions.json";

export default function RightQuestions() {
  const { questionId, answerId } = useFAQ();

  let filteredSubQuestions:
    | { subQuestionId: string; subQuestion: string; subAnswer: string }[]
    | undefined = [];

  questions.forEach((question) => {
    if (question.questionId === questionId) {
      question.answers.forEach((answer) => {
        if (answer.answerId === answerId) {
          filteredSubQuestions = answer.sub;
        }
      });
    }
  });

  return (
    <Accordion type="multiple">
      {filteredSubQuestions.map((sub, index) => (
        <AccordionItem
          value={index.toString()}
          key={index}
          className="-mt-4 border-none xl:-mt-2.5"
        >
          <AccordionTrigger className="-mb-3 justify-start gap-1 font-light hover:no-underline">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="h-3 w-3"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
            <span className="text-left text-lg font-light leading-6">
              {sub.subQuestion}
            </span>
            <ChevronDown className="h-4 w-4 shrink-0 rounded-full border-[1.5px] border-black transition-transform duration-200" />
          </AccordionTrigger>
          <AccordionContent className="-mb-4 text-base font-extralight">
            <div dangerouslySetInnerHTML={{ __html: sub.subAnswer }} />
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
