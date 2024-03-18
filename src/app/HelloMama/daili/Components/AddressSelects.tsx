"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../../Shadcn/Select";
import useAddressPicker from "@/zustand/useAddressPicker";
import { useState, useEffect } from "react";

import areas from "@/static-data/areas.json";
import province from "@/static-data/provinces.json";
import district from "@/static-data/districts.json";

interface ProvinceType {
  idProvince: string;
  name: string;
  idArea: string;
}

interface DistrictType {
  idDistrict: string;
  name: string;
  idProvince: string;
}

export default function AddressSelects() {
  const { values, setArea, setProvince, setDistrict } = useAddressPicker();

  const [provinces, setProvinces] = useState<ProvinceType[]>([]);
  const [districts, setDistricts] = useState<DistrictType[]>([]);

  useEffect(() => {
    const provincesInArea = province.filter(
      (pro) => pro.idArea === values.idArea
    );
    setProvinces(provincesInArea);

    const districtsInProvince = district.filter(
      (dis) => dis.idProvince === values.idProvince
    );
    setDistricts(districtsInProvince);
  }, [values, setArea, setProvinces, setDistricts]);

  const handleApi = () => {
    // call api here
    console.log(values);
  };

  if (values.district) {
    handleApi();
  }

  return (
    <div className="grid w-full grid-cols-6 justify-center gap-2 xl:flex-col">
      <div className="col-span-2 xl:col-span-3">
        <Select
          onValueChange={(value) => {
            const parsedValue = JSON.parse(value);
            setArea(parsedValue.area, parsedValue.idArea);
            setProvince("", "");
            setDistrict("", "");
          }}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Vùng" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel className="bg-gradient-to-r from-[#CE9F2E] via-[#F9F3A5] to-[#CE9F2E] bg-clip-text text-transparent">
                Vùng
              </SelectLabel>
              {areas.map((area, index) => (
                <SelectItem
                  key={index}
                  value={JSON.stringify({
                    idArea: area.idArea.toString(),
                    area: area.area,
                  })}
                >
                  {area.area}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="col-span-2 xl:col-span-3">
        <Select
          disabled={values.idArea === ""}
          onValueChange={(value) => {
            const parsedValue = JSON.parse(value);
            setProvince(parsedValue.name, parsedValue.id);
            setDistrict("", "");
          }}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Tỉnh" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Tỉnh</SelectLabel>
              {provinces.map((pro, index) => (
                <SelectItem
                  key={index}
                  value={JSON.stringify({ name: pro.name, id: pro.idProvince })}
                >
                  {pro.name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="col-span-2 xl:col-span-6">
        <Select
          disabled={values.idProvince === ""}
          onValueChange={(value) => {
            const parsedValue = JSON.parse(value);
            setDistrict(parsedValue.name, parsedValue.id);
          }}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Quận" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Quận</SelectLabel>
              {districts.map((dis, index) => (
                <SelectItem
                  key={index}
                  value={JSON.stringify({ name: dis.name, id: dis.idDistrict })}
                >
                  {dis.name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
