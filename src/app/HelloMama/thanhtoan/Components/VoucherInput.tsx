"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "../../Shadcn/Input";

const FormSchema = z.object({
  voucher: z.string().nullable(),
});

export default function VoucherInput() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      voucher: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {}

  return (
    <div className="flex w-full flex-row">
      <Form {...form}>
        <form className="w-full" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="voucher"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center rounded-lg border bg-[#DFDDDD]">
                <FormControl>
                  <Input
                    className="h-9 border-none bg-[#DFDDDD] text-[14px] font-light"
                    placeholder="Nhập mã ưu đãi (nếu có)"
                    {...field}
                    type="text"
                    onChange={field.onChange}
                    value={field.value ?? ""}
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </form>
      </Form>
    </div>
  );
}
