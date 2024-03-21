"use client";

import Search from "./Search";
import SearchListItem from "./SearchListItem";
import { SearchListItemProps } from "@utils/types";
import useAddressPicker from "@/zustand/useAddressPicker";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useDebouncedCallback } from "use-debounce";
import { useState, useEffect } from "react";
import { useDaiLiSelect } from "@/zustand/useDaiLiSelect";

import daiLi from "../StaticData/daiLi.json";

const FormSchema = z.object({
  searchText: z.string(),
});

export default function SearchList() {
  const { values } = useAddressPicker();

  const { setDaiLi } = useDaiLiSelect();

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

      const provinceMatch = item.province
        .toLowerCase()
        .includes(data.searchText.toLowerCase());

      const districtMatch = item.district
        .toLowerCase()
        .includes(data.searchText.toLowerCase());

      const addressMatch = item.address
        .toLowerCase()
        .includes(data.searchText.toLowerCase());

      return nameMatch || provinceMatch || districtMatch || addressMatch;
    });

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
      <ul className="mt-2 flex max-h-[620px] w-full flex-col gap-2 overflow-y-scroll pr-1 sm:max-h-[500px]">
        {searchedItems.length > 0 ? (
          searchedItems.map((item, index) => (
            <span onClick={() => setDaiLi(item)}>
              <SearchListItem key={index} row={item as SearchListItemProps} />
            </span>
          ))
        ) : (
          <div className="mx-2">Không có đại lí đại đây.</div>
        )}
      </ul>
    </div>
  );
}
