import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@components/ui/accordion";
import { ChevronDown } from "lucide-react";

export default function LeftQuestions() {
  const leftQuestions = [
    {
      question: "Đơn hàng & Vận chuyển",
      answer: ["Đơn hàng", "Thời gian vận chuyển"],
    },
    {
      question: "Trả hàng & Hoàn tiền",
      answer: ["Gửi yêu cầu", "Khiếu nại"],
    },
    {
      question: "Thanh toán",
      answer: ["Phương thức thanh toán"],
    },
    {
      question: "Khuyến mãi & Ưu đãi",
      answer: ["Chương trình khuyến mãi"],
    },
    {
      question: "Thông tin chung",
      answer: ["Ứng dụng Hello Mama", "Chính sách"],
    },
  ];

  return (
    <Accordion type="multiple">
      {leftQuestions.map((question, index) => (
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
          <AccordionContent className="-mb-1 flex flex-col justify-start gap-3 font-extralight">
            {question.answer.map((item, index) => (
              <span key={index} className="text-base hover:cursor-pointer">
                {item}
              </span>
            ))}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
