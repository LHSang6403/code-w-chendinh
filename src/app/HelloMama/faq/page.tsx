import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@components/ui/accordion";

export default function page() {
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

  const rightQuestions = [
    {
      question: "Tôi cần chờ bao lâu mới nhận được đơn hàng?",
      answer:
        "Thời gian nhận hàng trung bình: Từ 3 - 5 ngày. Đặt hàng trong khung giờ hành chính (Thứ 2 đến thứ 7 vào 8h - 17h30): hàng sẽ được đóng gói và gửi đi trong ngày. Đặt hàng ngoài khung giờ hành chính (sau 17h30 và Chủ Nhật): hàng sẽ được đóng gói và gửi đi vào ngày hôm sau. Ngày nghỉ, lễ, Tết: hàng sẽ được gói và gửi đi khi đơn vị vận chuyển làm việc.",
    },
    {
      question: "Tôi muốn thay đổi đơn hàng phải làm sao?",
      answer:
        "Bạn vui lòng hủy đơn hàng hiện tại và đặt lại đơn mới. Hoặc liên hệ số điện thoại hotline 1900 066 878 để Hello Mama tư vấn trực tiếp.",
    },
    {
      question: "Làm cách nào để đặt đơn hàng hỏa tốc? ",
      answer: "Chọn vào “Giao hàng giao tốc” tại trang đặt hàng.",
    },
    {
      question: "Chính sách trả hàng",
      answer: "",
    },
    {
      question: "Hướng dẫn đổi phương thức thanh toán",
      answer: "",
    },
    {
      question: "Tôi cần chờ bao lâu mới nhận được đơn hàng?",
      answer:
        "Hello Mama chấp nhận các hình thức thanh toán: VN Pay, Momo, mã QR, và COD. ",
    },
  ];

  return (
    <div className="flex h-auto w-full flex-col items-center gap-4 px-28 pb-4 pt-6 xl:px-3 sm:w-screen sm:px-3">
      <h1 className="bg-gradient-to-b from-[#1E588F] via-[#0E7BB8] to-[#0E7BB8] bg-clip-text text-center text-3xl text-transparent">
        CHÚNG TÔI CÓ THỂ GIÚP GÌ CHO BẠN?
      </h1>
      <div className=""></div>
      <div>
        <div className="">
          <Accordion type="single" collapsible>
            {leftQuestions.map((question, index) => (
              <AccordionItem
                value={index.toString()}
                key={index}
                className="-mt-4 border-none"
              >
                <AccordionTrigger className="justify-start gap-2 font-light hover:no-underline sm:gap-0">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="h-4 w-4 sm:h-5 sm:w-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </div>
                  <span>{question.question}</span>
                </AccordionTrigger>
                <AccordionContent className="font-extralight">
                  {question.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="">
          {/* <Accordion type="single" collapsible>
            {questions.map((question, index) => (
              <AccordionItem
                value={index.toString()}
                key={index}
                className="-mt-4 border-none"
              >
                <AccordionTrigger className="justify-start gap-2 font-light hover:no-underline sm:gap-0">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="h-4 w-4 sm:h-5 sm:w-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </div>
                  <span>{question.question}</span>
                </AccordionTrigger>
                <AccordionContent className="font-extralight">
                  {question.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion> */}
        </div>
      </div>
    </div>
  );
}
