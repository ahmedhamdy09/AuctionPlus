import React from "react";
import BrandContainer from "../../Components/Brand/BrandContainer";
import Pagination from "../../Components/Utility/Pagination";
import AllBrandPageLogic from "../../HookLogicCode/BrandLogic/AllBrandPageLogic";
const AllBrand = () => {
  const [brand, loading, pageCount, getPage] = AllBrandPageLogic();

  return (
    <div style={{ minHeight: "670px" }}>
      <BrandContainer data={brand.data} loading={loading} />
      <Pagination pageCount={pageCount} onPress={getPage} />
    </div>
  );
};

export default AllBrand;
