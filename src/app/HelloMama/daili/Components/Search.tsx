"use client";

import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "../../Shadcn/Input";

export default function Search({
  form,
  debounced,
}: {
  form: any;
  debounced: any;
}) {
  return (
    <div className="flex w-full flex-row">
      <Form {...form}>
        <form
          className="w-full"
          onChange={form.handleSubmit((value: any) => debounced(value))}
        >
          <FormField
            control={form.control}
            name="searchText"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center rounded-lg border bg-[#DFDDDD]">
                <FormControl>
                  <Input
                    className="h-8 border-none bg-[#DFDDDD]"
                    placeholder="Tìm kiếm"
                    {...field}
                    type="text"
                    onChange={field.onChange}
                  />
                </FormControl>
                <button
                  onClick={() => form.setFocus("searchText")}
                  className="flex h-fit w-fit items-center justify-center"
                  type="submit"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="mb-2 mr-2 h-5 w-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    />
                  </svg>
                </button>
              </FormItem>
            )}
          />
        </form>
      </Form>
    </div>
  );
}
