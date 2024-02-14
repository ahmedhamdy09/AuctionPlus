import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import LeftButton from "./LeftButton";
import RightButton from "./RightButton";
import { useParams } from "react-router-dom";
import ViewOneProductsDetailsHook from "../../HookLogicCode/ProductsLogicHook/ViewOneProductsDetailsHook";
const ProductsGallery = () => {
  // to view images gallery
  const { id } = useParams();
  // eslint-disable-next-line
  const [item, images, cat] = ViewOneProductsDetailsHook(id);
  // console.log(item);
  return (
    <div
      className="product-gallary-card d-flex justfiy-content-center  align-items-center
    pt-2"
    >
      <ImageGallery
        items={images}
        showFullscreenButton={false}
        isRTL={true}
        showPlayButton={false}
        showThumbnails={false}
        renderRightNav={RightButton}
        renderLeftNav={LeftButton}
      />
    </div>
  );
};

export default ProductsGallery;
