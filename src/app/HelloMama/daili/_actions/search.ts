export function searchItems(
  data: any[],
  searchTerm: string,
  provinceName: string,
  districtName: string
) {
  return data.filter((item) => {
    const nameMatch = item.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    // const provinceMatch = provinceName
    //   ? item.province.toLowerCase() === provinceName.toLowerCase()
    //   : true;

    // const districtMatch = districtName
    //   ? item.district.toLowerCase() === districtName.toLowerCase()
    //   : true;

    return nameMatch;
  });
}
