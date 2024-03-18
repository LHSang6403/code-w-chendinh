import { create } from "zustand";

interface useAddressPickerState {
  values: {
    address: string;
    area: string;
    idArea: string;
    province: string;
    idProvince: string;
    district: string;
    idDistrict: string;
    commune: string;
    idCommune: string;
  };
  setAddress: (address: string) => void;
  setArea: (area: string, idArea: string) => void;
  setProvince: (province: string, idProvince: string) => void;
  setDistrict: (district: string, idDistrict: string) => void;
  setCommune: (commune: string, idCommune: string) => void;
  clearAll: () => void;
}

const useAddressPicker = create<useAddressPickerState>((set) => ({
  values: {
    address: "",
    area: "",
    idArea: "",
    province: "",
    idProvince: "",
    district: "",
    idDistrict: "",
    commune: "",
    idCommune: "",
  },
  setAddress: (address: string) =>
    set((state) => ({ values: { ...state.values, address } })),
  setArea: (area: string, idArea: string) =>
    set((state) => ({ values: { ...state.values, area, idArea } })),
  setProvince: (province: string, idProvince: string) =>
    set((state) => ({
      values: { ...state.values, province, idProvince },
    })),
  setDistrict: (district: string, idDistrict: string) =>
    set((state) => ({
      values: { ...state.values, district, idDistrict },
    })),
  setCommune: (commune: string, idCommune: string) =>
    set((state) => ({
      values: { ...state.values, commune, idCommune },
    })),
  clearAll: () => {},
}));

export default useAddressPicker;
