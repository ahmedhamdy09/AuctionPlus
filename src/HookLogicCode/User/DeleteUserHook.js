import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteUserAddress } from "../../Redux/Actions/AddressAction";

const DeleteUserHook = (id) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleDelete = async () => {
    await dispatch(deleteUserAddress(id));
    setShow(false);
    window.location.reload(false);
  };


  return [show, handleClose, handleShow, handleDelete];
};

export default DeleteUserHook;

