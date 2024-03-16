import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@components/ui/accordion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export default function RightQuestions() {
  const rightQuestions = [
    {
      question: "Tôi cần chờ bao lâu mới nhận được đơn hàng?",
      answer: `
    <p>
      Thời gian nhận hàng trung bình: Từ 3 - 5 ngày. <br />
      &#8226; Đặt hàng trong khung giờ hành chính (Thứ 2 đến thứ 7 vào 8h - 17h30): hàng sẽ được đóng gói và gửi đi trong ngày. <br />
      &#8226; Đặt hàng ngoài khung giờ hành chính (sau 17h30 và Chủ Nhật): hàng sẽ được đóng gói và gửi đi vào ngày hôm sau. <br />
      &#8226; Ngày nghỉ, lễ, Tết: hàng sẽ được gói và gửi đi khi đơn vị vận chuyển làm việc.
    </p>
  `,
    },
    {
      question: "Tôi muốn thay đổi đơn hàng phải làm sao?",
      answer: `<p>Bạn vui lòng hủy đơn hàng hiện tại và đặt lại đơn mới. Hoặc liên hệ số điện thoại hotline 1900 066 878 để Hello Mama tư vấn trực tiếp.</p>`,
    },
    {
      question: "Làm cách nào để đặt đơn hàng hỏa tốc? ",
      answer: `<p>Chọn vào “Giao hàng giao tốc” tại trang đặt hàng.<p>`,
    },
    {
      question: "Chính sách trả hàng",
      answer: `<p><p>`,
    },
    {
      question: "Hướng dẫn đổi phương thức thanh toán",
      answer: `<p><p>`,
    },
    {
      question: "Tôi cần chờ bao lâu mới nhận được đơn hàng?",
      answer: `<p>Hello Mama chấp nhận các hình thức thanh toán: VN Pay, Momo, mã QR, và COD..<p>`,
    },
  ];

  return (
    <Accordion type="multiple">
      {rightQuestions.map((question, index) => (
        <AccordionItem
          value={index.toString()}
          key={index}
          className="border-none xl:-mt-2.5"
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
              {question.question}
            </span>
            <ChevronDown className="h-4 w-4 shrink-0 rounded-full border-[1.5px] border-black transition-transform duration-200" />
          </AccordionTrigger>
          <AccordionContent className="-mb-4 text-base font-extralight">
            <div dangerouslySetInnerHTML={{ __html: question.answer }} />
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
