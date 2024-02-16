import React, { useState } from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import LeftButton from "../../Products/LeftButton";
import RightButton from "../../Products/RightButton";
import { useParams } from "react-router-dom";
import ViewOneProductsDetailsHook from "../../../HookLogicCode/ProductsLogicHook/ViewOneProductsDetailsHook";
import { Spinner } from "react-bootstrap";
const AuctionGallery = () => {
  // to view images gallery
  const { id } = useParams();
  // eslint-disable-next-line
  const [item, images, cat] = ViewOneProductsDetailsHook(id);
  const [loading, setLoading] = useState(true);
  const handleImageLoad = () => {
    setLoading(false);
  };
  return (
    <div
      className="product-gallary-card d-flex justfiy-content-center  align-items-center
    pt-2"
    >
      {loading && (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
      <ImageGallery
        items={images}
        showFullscreenButton={false}
        isRTL={true}
        showPlayButton={false}
        showThumbnails={false}
        renderRightNav={RightButton}
        renderLeftNav={LeftButton}
        onImageLoad={handleImageLoad}
      />
    </div>
  );
};

export default AuctionGallery;
