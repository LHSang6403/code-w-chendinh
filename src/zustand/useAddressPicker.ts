import { create } from "zustand";

interface useAddressPickerState {
  values: {
    address: string;
    area: string;
    areaId: string;
    province: string;
    provinceId: string;
    district: string;
    districtId: string;
    commune: string;
    communeId: string;
  };
  setAddress: (address: string) => void;
  setArea: (area: string, areaId: string) => void;
  setProvince: (province: string, provinceId: string) => void;
  setDistrict: (district: string, districtId: string) => void;
  setCommune: (commune: string, communeId: string) => void;
  clearAll: () => void;
}

const useAddressPicker = create<useAddressPickerState>((set) => ({
  values: {
    address: "",
    area: "",
    areaId: "",
    province: "",
    provinceId: "",
    district: "",
    districtId: "",
    commune: "",
    communeId: "",
  },
  setAddress: (address: string) =>
    set((state) => ({ values: { ...state.values, address } })),
  setArea: (area: string, areaId: string) =>
    set((state) => ({ values: { ...state.values, area, areaId } })),
  setProvince: (province: string, provinceId: string) =>
    set((state) => ({
      values: { ...state.values, province, provinceId },
    })),
  setDistrict: (district: string, districtId: string) =>
    set((state) => ({
      values: { ...state.values, district, districtId },
    })),
  setCommune: (commune: string, communeId: string) =>
    set((state) => ({
      values: { ...state.values, commune, communeId },
    })),
  clearAll: () => {},
}));

export default useAddressPicker;
