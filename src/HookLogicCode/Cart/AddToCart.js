import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import notify from "../../HookLogicCode/useNotifaction";
import { addProductToCart } from "../../Redux/Actions/CartAction";

const AddToCart = (prodID, item) => {
  const dispatch = useDispatch();
  const [indexColor, setIndexColor] = useState("");
  const [colorText, setColorText] = useState("");
  const [loading, setLoading] = useState(true);

  const colorClick = (index, color) => {
    setIndexColor(index);
    setColorText(color);
  };

  // dispatch add prodcut to cart
  const addToCartHandle = async () => {
    if (item.available.length >= 1) {
      if (colorText === "") {
        notify("Please Select Color", "warn");
        return;
      }
    } else {
      setColorText("");
    }
    setLoading(true);
    await dispatch(
      addProductToCart({
        productId: prodID,
        color: colorText,
      })
    );
    setLoading(false);
  };

  const res = useSelector((state) => state.addProductToCart.addProductToCart);
  useEffect(
    () => {
      if (loading === false) {
        if (res && res.status === 200) {
          notify("Product Added to Cart", "success");
          setTimeout(() => {
            window.location.reload(false);
          }, 1000);
        } else {
          notify("You are Not Login", "error");
        }
      }
    },
    // eslint-disable-next-line
    [loading]
  );
  return [colorClick, indexColor, addToCartHandle];
};

export default AddToCart;
