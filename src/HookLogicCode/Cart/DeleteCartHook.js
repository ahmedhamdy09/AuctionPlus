import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import notify from "../../HookLogicCode/useNotifaction";
import { clearAllCart, deleteOneCart } from "../../Redux/Actions/CartAction";

const DeleteCartHook = (itemID) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const handleAllDeleteCart = async () => {
    setLoading(true);
    await dispatch(clearAllCart());
    setLoading(false);
  };

  const res = useSelector(
    (state) => state.addProductToCart.clearAlluserCartItems
  );
  useEffect(
    () => {
      if (loading === false) {
        if (res === "") {
          notify("All Cart Is Deleted", "success");
          setTimeout(() => {
            window.location.reload(false);
          }, 1000);
        } else {
          notify("All Cart Not Deleted", "error");
        }
      }
    },
    // eslint-disable-next-line
    [loading]
  );

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleDeleteOneItem = async () => {
    await dispatch(deleteOneCart(itemID));
    setShow(false);
    window.location.reload(false);
  };
  return [handleAllDeleteCart,show,handleClose,handleShow,handleDeleteOneItem];
};

export default DeleteCartHook;
