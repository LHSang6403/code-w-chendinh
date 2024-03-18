"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "../../Shadcn/Button";
import { useOrder } from "@/zustand/useOrder";

const FormSchema = z.object({
  familyName: z.string().min(2),
  name: z.string().min(2),
  address: z.string().min(2),
  phone: z.string().min(9),
  note: z.string().optional(),
});

export default function ShipmentForm() {
  const { order } = useOrder();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      familyName: "",
      name: "",
      address: "",
      phone: "",
      note: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    // Call API
    console.log(data, order);
    form.reset();
  }

  return (
    <div className="w-full xl:w-[90vw]">
      <Form {...form}>
        <form
          className="flex w-full flex-col gap-3.5 sm:gap-2.5"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <div className="flex w-auto flex-row gap-2.5 sm:gap-1">
            <div className="w-1/2">
              <FormField
                control={form.control}
                name="familyName"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="h-9 !w-full border-black font-light text-[#9D9B9B] !ring-0 !ring-offset-0 focus:border-black xl:w-auto"
                        placeholder="Họ"
                        {...field}
                        type="text"
                        onChange={field.onChange}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="w-1/2">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="h-9 !w-full border-black font-light text-[#9D9B9B] !ring-0 !ring-offset-0 focus:border-black xl:w-auto"
                        placeholder="Tên"
                        {...field}
                        type="text"
                        onChange={field.onChange}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="h-9 border-black font-light text-[#9D9B9B] !ring-0 !ring-offset-0 focus:border-black"
                    placeholder="Điạ chỉ"
                    {...field}
                    type="text"
                    onChange={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="h-9 border-black font-light text-[#9D9B9B] !ring-0 !ring-offset-0 focus:border-black"
                    placeholder="Số điện thoại"
                    {...field}
                    type="text"
                    onChange={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="note"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder="Ghi chú thêm (nếu có)"
                    className="h-24 resize-none border-black font-light text-[#9D9B9B] !ring-0 !ring-offset-0 focus:border-black"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            disabled={!form.formState.isValid || !order}
            className="group mx-auto w-fit px-3 sm:mt-2"
          >
            <span className="bg-gradient-to-b from-[#1E588F] via-[#0E7BB8] to-[#0E7BB8] bg-clip-text font-light text-[#9D9B9B] text-transparent group-hover:text-white">
              XÁC NHẬN
            </span>
          </Button>
        </form>
      </Form>
    </div>
  );
}
