"use client";

import Search from "./Search";
import SearchListItem from "./SearchListItem";
import { SearchListItemProps } from "./SearchListItem";
import useAddressPicker from "@/zustand/useAddressPicker";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useDebouncedCallback } from "use-debounce";
import { searchItems } from "../_actions/search";

import daiLi from "../StaticData/daiLi.json";

const FormSchema = z.object({
  searchText: z.string(),
});

export default function SearchList() {
  const { values } = useAddressPicker();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      searchText: "",
    },
  });

  const filteredDaiLi = daiLi.filter((item) => {
    return values.district
      ? item.idDistrict === values.idDistrict
      : values.province
      ? item.idProvince === values.idProvince
      : values.idArea
      ? item.idArea === values.idArea
      : false;
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    const searchedItems = searchItems(
      filteredDaiLi,
      data.searchText,
      values.province,
      values.district
    );

    console.log(searchedItems);
  }

  const debounced = useDebouncedCallback((value) => {
    onSubmit(value);
  }, 0);

  return (
    <div className="h-fit w-fit min-w-72 xl:w-full sm:min-w-0">
      <div className="w-[383px] xl:w-full">
        <Search form={form} debounced={debounced} />
      </div>
      <ul className="mt-2 flex max-h-[620px] w-full flex-col gap-2 overflow-y-scroll pr-1">
        {filteredDaiLi.map((item, index) => (
          <SearchListItem key={index} row={item as SearchListItemProps} />
        ))}
      </ul>
    </div>
  );
}
