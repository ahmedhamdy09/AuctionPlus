import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../Redux/Actions/CategoryAction";
import { getAllBrand } from "../../Redux/Actions/BrandAction";
import { getOneSubCategory } from "../../Redux/Actions/SubCategoryAction";
import {
  getOneProduct,
  updateProducts,
} from "../../Redux/Actions/ProductsActions";
import notify from "../useNotifaction";

const AdminEditProductsHook = (id) => {
  const dispatch = useDispatch();

  useEffect(
    () => {
      const run = async () => {
        await dispatch(getOneProduct(id));
        await dispatch(getAllCategory());
        // eslint-disable-next-line
        await dispatch(getAllBrand());
      };
      run();
    },
    // eslint-disable-next-line
    []
  );

  //get one products details
  const item = useSelector((state) => state.allproducts.oneProduct);

  // get last category state from redux
  const category = useSelector((state) => state.allCategory.category);

  //get last brand state from redux
  const brand = useSelector((state) => state.allBrand.brand);

  // get last sub category
  const subCategory = useSelector((state) => state.subCategory.subcategory);

  const onSelect = (selectedList) => {
    console.log(selectedsubCategoryID);
    setSelectedSubCategoryID(selectedList);
  };
  const onRemove = (selectedList) => {
    console.log(selectedsubCategoryID);
    setSelectedSubCategoryID(selectedList);
  };

  // crop images
  const crop = {
    unit: "%",
    aspect: 4 / 3,
    width: "100",
  };

  const [options, setOptions] = useState([]);
  // add image in products
  const [images, setImages] = useState([]);

  //values state
  const [prodName, setProdName] = useState([]);
  const [prodDescritpion, setProdDescritpion] = useState("");
  const [priceBefore, setPriceBefore] = useState("price before discount");
  const [priceAfter, setPriceAfter] = useState("price after discount");
  const [quantity, setQuantity] = useState("Quantity available");
  // eslint-disable-next-line
  const [categoryID, setCategoryID] = useState("");
  // eslint-disable-next-line
  const [brandID, setBrandID] = useState("");
  // eslint-disable-next-line
  const [subCategoryID, setSubCategoryID] = useState([]);
  const [selectedsubCategoryID, setSelectedSubCategoryID] = useState([]);
  const [loading, setLoading] = useState(true);
  // to show hide color picker
  const [showColor, setShowColor] = useState(false);
  // to store all pick color
  const [colors, setColors] = useState([]);

  useEffect(() => {
    if (item && item.data) {
      setImages(item.data.images);
      setProdName(item.data.title);
      setProdDescritpion(item.data.description);
      setPriceBefore(item.data.price);
      setQuantity(item.data.quantity);
      setCategoryID(item.data.category);
      setBrandID(item.data.brand);
      setColors(item.data.available);
    }
  }, [item]);

  // to change name state
  const onChangeProductName = (e) => {
    e.persist();
    setProdName(e.target.value);
  };

  // to change Descritpion  state
  const onChangeDescritpionName = (e) => {
    e.persist();
    setProdDescritpion(e.target.value);
  };

  // to change pricebefore  state
  const onChangePriceBefore = (e) => {
    e.persist();
    setPriceBefore(e.target.value);
  };

  // to change price after  state
  const onChangePriceAfter = (e) => {
    e.persist();
    setPriceAfter(e.target.value);
  };

  // to change quantity  state
  const onChangeQuantity = (e) => {
    e.persist();
    setQuantity(e.target.value);
  };

  //change color state
  const onChangeShowColor = (e) => {
    e.persist();
    setShowColor(!showColor);
  };

  //when choose new color
  const handleChangeComplete = (color) => {
    setColors([...colors, color.hex]);
    setShowColor(!showColor);
  };
  // console.log(colors);

  // to remove colors
  const removeColor = (color) => {
    const newColor = colors.filter((e) => e !== color);
    setColors(newColor);
  };

  // when select category to store item
  const onSelectCategory = async (e) => {
    setCategoryID(e.target.value);
  };
  // console.log(categoryID);
  useEffect(
    () => {
      // eslint-disable-next-line
      if (categoryID != 0) {
        const runs = async () => {
          await dispatch(getOneSubCategory(categoryID));
        };
        runs();
      }
      // eslint-disable-next-line
    },
    // eslint-disable-next-line
    [categoryID]
  );

  useEffect(() => {
    if (subCategory.data) {
      setOptions(subCategory.data);
    }
  }, [subCategory]);

  const onSelectBrand = (e) => {
    setBrandID(e.target.value);
  };

  // to convert base64 to file
  function dataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(","),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  }

  //convert url to file
  const convertURLtoFile = async (url) => {
    const response = await fetch(url, { mode: "cors" });
    const data = await response.blob();
    const ext = url.split(".").pop();
    // eslint-disable-next-line
    const filename = url.split("/").pop();
    const metadata = { type: `image/${ext}` };
    return new File([data], Math.random(), metadata);
  };

  // to save products data
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      categoryID === 0 ||
      prodName === "" ||
      prodDescritpion === "" ||
      images.length <= 0 ||
      priceBefore <= 0
    ) {
      notify("Please Complete Your Deatils", "warn");
      return;
    }

    // convert base 64 image to file
    let imgCover;
    if (images[0].length <= 1000) {
      convertURLtoFile(images[0]).then((val) => (imgCover = val));
    } else {
      imgCover = dataURLtoFile(images[0], Math.random() + ".png");
    }

   
    let itemImages = [];
    // convert array of base 64 image to file
    // eslint-disable-next-line
    Array.from(Array(Object.keys(images).length).keys()).map((item, index) => {
      if (images[index].length <= 1000) {
        convertURLtoFile(images[index]).then((val) => itemImages.push(val));
      } else {
        itemImages.push(dataURLtoFile(images[index], Math.random() + ".png"));
      }
    });
    // send img in server
    const formData = new FormData();
    // formData.append("title", prodName);
    formData.append("name", prodName);

    formData.append("description", prodDescritpion);
    formData.append("quantity", quantity);
    formData.append("price", priceBefore);
    setTimeout(() => {
      formData.append("imageCover", imgCover);
      itemImages.map((item) => formData.append("images", item));
    }, 1000);
    formData.append("category", categoryID);
    formData.append("brand", brandID);

    colors.map((color) => formData.append("colors", color));

   
    selectedsubCategoryID.map((item) =>
      formData.append("subcategories", item._id)
    );
    setTimeout(async () => {
      setLoading(true);
      await dispatch(updateProducts(id, formData));
      setLoading(false);
    }, 1000);
  };

  //get last brand state from redux
  const product = useSelector((state) => state.allproducts.updateProducts);

  useEffect(
    () => {
      if (loading === false && product && product.status) {
        setCategoryID(0);
        setColors([]);
        setImages([]);
        setProdName("");
        setProdDescritpion("");
        setPriceBefore("price before discount");
        setPriceAfter("price after discount");
        setQuantity("Quantity available");
        setBrandID("");
        setSelectedSubCategoryID([]);
        setTimeout(() => setLoading(true), 1500);

        if (product) {
          if (product.status === 201) {
            notify("The product has been Updated successfully", "success");
          } else if (product.status !== 201) {
            notify("There is a problem Updated products", "error");
          }
        }
      }
    },
    // eslint-disable-next-line
    [loading]
  );

  return [
    onChangeProductName,
    onChangeDescritpionName,
    onChangePriceBefore,
    onChangePriceAfter,
    onChangeQuantity,
    onChangeShowColor,
    prodName,
    prodDescritpion,
    priceBefore,
    priceAfter,
    quantity,
    showColor,
    colors,
    category,
    categoryID,
    brand,
    brandID,
    images,
    crop,
    options,
    setImages,
    onSelect,
    onRemove,
    handleChangeComplete,
    removeColor,
    onSelectCategory,
    onSelectBrand,
    handleSubmit,
  ];
};

export default AdminEditProductsHook;
