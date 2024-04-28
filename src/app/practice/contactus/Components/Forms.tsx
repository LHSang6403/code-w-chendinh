"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const FormSchema = z.object({
  name: z.string().min(2, { message: "Name is required." }),
  email: z.string().email(),
  phone: z.string().min(2, {
    message: "Phone number is required.",
  }),
  subject: z.string().min(2, { message: "Subject is required." }),
  message: z.string().nullable(),
});

export default function Forms() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {}

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid w-full grid-cols-2 gap-10 px-6 xl:px-0 lg:gap-6"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="w-full sm:col-span-2">
              <FormLabel className="text-base font-light">
                Enter Your Name
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Please enter your full name"
                  {...field}
                  type="text"
                  className="rounded-none border-l-0 border-r-0 border-t-0 border-b-[#898989] bg-transparent px-0 text-base font-light text-[#D3D1D1]"
                  onChange={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="w-full sm:col-span-2">
              <FormLabel className="text-base font-light">
                Email address
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your email address"
                  {...field}
                  type="email"
                  className="rounded-none border-l-0 border-r-0 border-t-0 border-b-[#898989] bg-transparent px-0 text-base font-light text-[#D3D1D1]"
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
            <FormItem className="w-full sm:col-span-2">
              <FormLabel className="text-base font-light">
                Phone Number
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your phone number"
                  {...field}
                  type="text"
                  className="rounded-none border-l-0 border-r-0 border-t-0 border-b-[#898989] bg-transparent px-0 text-base font-light text-[#D3D1D1]"
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
            <FormItem className="w-full sm:col-span-2">
              <FormLabel className="text-base font-light">Subject</FormLabel>
              <FormControl>
                <Input
                  placeholder="Add subject here"
                  {...field}
                  type="text"
                  className="rounded-none border-l-0 border-r-0 border-t-0 border-b-[#898989] bg-transparent px-0 text-base font-light text-[#D3D1D1]"
                  onChange={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={() => (
            <FormItem className="col-span-2">
              <FormLabel className="text-base font-light">
                Your Message
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Describe your message here"
                  className="min-h-36 resize-none rounded-none border-l-0 border-r-0 border-t-0 border-b-[#898989] bg-transparent px-0 text-base font-light text-[#D3D1D1]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-fit rounded bg-[#1A367C] px-8 py-7 text-xl font-normal text-white">
          Send message
        </Button>
      </form>
    </Form>
  );
}
