import React from "react";
import CategoryContainer from "../../Components/Category/CategoryContainer";
import Pagination from "../../Components/Utility/Pagination";
import AllCatogoryPageLogic from "../../HookLogicCode/CategoryLogic/AllCatogoryPageLogic";
const AllCatogoryPage = () => {
  // in all catogory page hooks
  const [category, loading, pageCount, getPage] = AllCatogoryPageLogic();
  // console.log("🚀 ~ AllCatogoryPage ~ category:", category);
  return (
    <div style={{ minHeight: "670px" }}>
      <CategoryContainer data={category.data} loading={loading} />
      {pageCount >= 1 ? (
        <Pagination pageCount={pageCount} onPress={getPage} />
      ) : null}
    </div>
  );
};

export default AllCatogoryPage;
