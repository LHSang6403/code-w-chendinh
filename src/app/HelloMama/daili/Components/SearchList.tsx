"use client";

import Search from "./Search";
import SearchListItem from "./SearchListItem";
import { SearchListItemProps } from "./SearchListItem";
import useAddressPicker from "@/zustand/useAddressPicker";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useDebouncedCallback } from "use-debounce";
import { useState, useEffect } from "react";

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
    if (values.idDistrict === "0") {
      // all districts in province
      return item.idProvince === values.idProvince;
    } else if (values.idProvince === "0") {
      // all provinces in area
      return item.idArea === values.idArea;
    } else if (values.idArea === "0") {
      // Select all areas
      return true;
    } else if (values.district) {
      return item.idDistrict === values.idDistrict;
    } else if (values.province) {
      return item.idProvince === values.idProvince;
    } else {
      return item.idArea === values.idArea;
    }
  });

  const [searchedItems, setSearchedItems] = useState(daiLi);

  useEffect(() => {
    setSearchedItems(filteredDaiLi);
  }, [values]);

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    const searchedItems = filteredDaiLi.filter((item) => {
      const nameMatch = item.name
        .toLowerCase()
        .includes(data.searchText.toLowerCase());

      return nameMatch;
    });

    console.log(searchedItems);
    setSearchedItems(searchedItems);
  }

  const debounced = useDebouncedCallback((value) => {
    onSubmit(value);
  }, 200);

  return (
    <div className="h-fit w-fit min-w-72 xl:w-full sm:min-w-0">
      <div className="w-[383px] xl:w-full">
        <Search form={form} debounced={debounced} />
      </div>
      <ul className="mt-2 flex max-h-[620px] w-full flex-col gap-2 overflow-y-scroll pr-1">
        {searchedItems.map((item, index) => (
          <SearchListItem key={index} row={item as SearchListItemProps} />
        ))}
      </ul>
    </div>
  );
}
