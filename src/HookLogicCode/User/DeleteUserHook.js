import {  useState } from "react";
import { useDispatch } from "react-redux";
import { deleteUserAddress } from "../../Redux/Actions/AddressAction";
// import notify from "../../HookLogicCode/useNotifaction";

const DeleteUserHook = (id) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
//   const [loading, setLoading] = useState(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleDelete = async () => {
    // setLoading(true);
    await dispatch(deleteUserAddress(id));
    // setLoading(false);
    setShow(false);
    window.location.reload(false);
  };

  //   const res = useSelector(
  //     (state) => state.userAddressReducer.deleteUserAddress
  //   );

  //   useEffect(
  //     () => {
  //       if (loading === false) {
  //         if (res && res.status === 200) {
  //           notify("Address is Delete Success", "success");
  //         } else {
  //           notify("This Address Not Deleted", "error");
  //         }
  //       }
  //     },
  //     // eslint-disable-next-line
  //     [loading]
  //   );
  return [show, handleClose, handleShow, handleDelete];
};

export default DeleteUserHook;
