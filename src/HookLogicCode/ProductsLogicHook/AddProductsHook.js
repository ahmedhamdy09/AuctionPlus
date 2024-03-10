import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../Redux/Actions/CategoryAction";
import { getAllBrand } from "../../Redux/Actions/BrandAction";
import { getOneSubCategory } from "../../Redux/Actions/SubCategoryAction";
import { createProducts } from "../../Redux/Actions/ProductsActions";
import notify from "../../HookLogicCode/useNotifaction";

const AddProductsHook = () => {
  const dispatch = useDispatch();

  useEffect(
    () => {
      dispatch(getAllCategory());
      dispatch(getAllBrand());
    },
    // eslint-disable-next-line
    []
  );

  // get last category state from redux
  const category = useSelector((state) => state.allCategory.category);
  //get last brand state from redux
  const brand = useSelector((state) => state.allBrand.brand);

  // get last sub category
  const subCategory = useSelector((state) => state.subCategory.subcategory);
  // console.log(subCategory);
  const onSelect = (selectedList) => {
    // console.log(selectedsubCategoryID);
    setSelectedSubCategoryID(selectedList);
  };
  const onRemove = (selectedList) => {
    // console.log(selectedsubCategoryID);
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

  // to remove colors
  const removeColor = (color) => {
    const newColor = colors.filter((e) => e !== color);
    setColors(newColor);
  };

  // when select category to store item
  const onSelectCategory = async (e) => {
    if (e.target.value !== 0) {
      await dispatch(getOneSubCategory(e.target.value));
      setCategoryID(e.target.value);
    }
  };

  useEffect(
    () => {
      if (categoryID !== 0) {
        if (subCategory.data) {
          setOptions(subCategory.data);
        }
      }
      // eslint-disable-next-line
    },
    // eslint-disable-next-line
    [categoryID]
  );
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
    const imgCover = dataURLtoFile(images[0], Math.random() + ".png");

    // convert array of base 64 image to file
    const itemImages = Array.from(Array(Object.keys(images).length).keys()).map(
      (item, index) => {
        return dataURLtoFile(images[index], Math.random() + ".png");
      }
    );
    // send img in server
    const formData = new FormData();
    formData.append("name", prodName);
    formData.append("description", prodDescritpion);
    formData.append("quantity", quantity);
    formData.append("price", priceBefore);
    formData.append("imageCover", imgCover);
    formData.append("category", categoryID);
    formData.append("brand", brandID);

    itemImages.map((item) => formData.append("images", item));

    colors.map((color) => formData.append("colors", color));

    selectedsubCategoryID.map((item) =>
      formData.append("subcategories", item._id)
    );

    setLoading(true);
    await dispatch(createProducts(formData));
    setLoading(false);
  };

  //get last brand state from redux
  const product = useSelector((state) => state.allproducts.products);

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
            notify("The product has been added successfully", "success");
          } else if (product.status !== 201) {
            notify("There is a problem adding products", "error");
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
    brand,
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

export default AddProductsHook;
