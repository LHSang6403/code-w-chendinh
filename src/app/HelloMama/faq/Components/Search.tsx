"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useDebouncedCallback } from "use-debounce";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "../../Shadcn/Input";

const FormSchema = z.object({
  searchText: z.string(),
});

export default function Search() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      searchText: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    // Call API
    console.log(data);
  }

  const debounced = useDebouncedCallback((value) => {
    onSubmit(value);
  }, 1000);

  return (
    <div className="flex w-full flex-row">
      <Form {...form}>
        <form
          className="w-full"
          onChange={form.handleSubmit((value) => debounced(value))}
        >
          <FormField
            control={form.control}
            name="searchText"
            render={({ field }) => (
              <FormItem className="rounded">
                <FormControl>
                  <Input
                    className="h-10 border-none font-light xl:h-9"
                    placeholder="Tìm kiếm"
                    {...field}
                    type="text"
                    onChange={field.onChange}
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
