import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import notify from "../../HookLogicCode/useNotifaction";
import {
  clearAllCart,
  deleteOneCart,
  updateCart,
} from "../../Redux/Actions/CartAction";

const DeleteCartHook = (item) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [itemCount, setItemCount] = useState(0);

  const handleAllDeleteCart = async () => {
    setLoading(true);
    await dispatch(clearAllCart());
    setTimeout(() => {
      window.location.reload(false);
    }, 1000);
    setLoading(false);
  };

  const onChangeCountQuantity = (e) => {
    setItemCount(e.target.value);
  };

  useEffect(
    () => {
      if (item) {
        setItemCount(item.quantity);
      }
    },
    // eslint-disable-next-line
    []
  );

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
    await dispatch(deleteOneCart(item._id));
    setShow(false);
    setTimeout(() => {
      window.location.reload(false);
    }, 1000);
  };

  const handleUpdateCart = async () => {
    await dispatch(
      updateCart(item._id, {
        quantity: itemCount,
      })
    );
    window.location.reload(false);
  };

  return [
    handleAllDeleteCart,
    show,
    handleClose,
    handleShow,
    handleDeleteOneItem,
    itemCount,
    onChangeCountQuantity,
    handleUpdateCart,
  ];
};

export default DeleteCartHook;
