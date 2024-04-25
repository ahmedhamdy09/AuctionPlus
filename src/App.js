import Footer from "./Components/Utility/Footer";
import NavBarLogin from "./Components/Utility/NavBarLogin";
import HomePage from "./Page/Home/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./Page/Auth/LoginPage";
import RegisterPage from "./Page/Auth/RegisterPage";
import AllCatogoryPage from "./Page/Category/AllCatogoryPage";
import AllBrandPage from "./Page/Brand/AllBrandPage";
import ShopProductsPage from "./Page/Products/ShopProductsPage";
import ProductDetailsPage from "./Page/Products/ProductDetailsPage";
import CartPage from "./Page/Cart/CartPage";
import PaymentCheckoutPage from "./Page/PaymentCheckOut.js/PaymentCheckoutPage";
import AdminAllProductPage from "./Page/Admin/AdminAllProductPage";
import AdminAllOrderPage from "./Page/Admin/AdminAllOrderPage";
import AdminOrderDetailsPage from "./Page/Admin/AdminOrderDetailsPage";
import AdminAddBrandPage from "./Page/Admin/AdminAddBrandPage";
import AdminAddCategoryPage from "./Page/Admin/AdminAddCategoryPage";
import AdminSubCategoryPage from "./Page/Admin/AdminSubCategoryPage";
import AdminAddProductPage from "./Page/Admin/AdminAddProductPage";
import UserAllOrderPage from "./Page/Users/UserAllOrderPage";
import UserFavProductsPage from "./Page/Users/UserFavProductsPage";
import UsersAllAdressPage from "./Page/Users/UsersAllAdressPage";
import UserAddAdressPage from "./Page/Users/UserAddAdressPage";
import UserEditAddressPage from "./Page/Users/UserEditAddressPage";
import UserProfilePage from "./Page/Users/UserProfilePage";
import AdminEditProductsPage from "./Page/Admin/AdminEditProductsPage";
import ContactUs from "./Components/Utility/ContactUs";
import AuctionLivePage from "./Components/livesShow/AuctionLivePage";
import AuctionProductPage from "./Page/Products/AuctionProductsPage";
import Stream from "./Components/livesShow/AuctionProductDescription/Stream";
import UppliveShow1 from "./Components/livesShow/UpplivesShow1";
import UppliveShow2 from "./Components/livesShow/UpplivesShow2";
import UppliveShow3 from "./Components/livesShow/UpplivesShow3";
import UppliveShow4 from "./Components/livesShow/UpplivesShow4";
import PopUPEmail from "./Page/Auth/ForgetPass/PopUPEmail";
import PopUpOtp from "./Page/Auth/ForgetPass/PopUpOtp";
import PopUpNewPass from "./Page/Auth/ForgetPass/PopUpNewPass";
import AdminAddCouponsPage from "./Page/Admin/AdminAddCouponsPage";
import AdminEditCouponPage from "./Page/Admin/AdminEditCouponPage";
import ProtectedRouteHook from "./HookLogicCode/Auth/ProtectedRouteHook";
import ProtectedRoute from "./Components/Utility/ProtectedRoute";
import ProductByCategory from "./Page/Products/ProductByCategory";
import ProductByBrand from "./Page/Products/ProductByBrand";

function App() {
  // eslint-disable-next-line
  const [isUser, isAdmin, userData] = ProtectedRouteHook();

  return (
    <div className="font">
      <NavBarLogin />
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/allCatogory" element={<AllCatogoryPage />} />
          <Route path="/allbrand" element={<AllBrandPage />} />
          <Route path="/products" element={<ShopProductsPage />} />
          <Route path="/products/:id" element={<ProductDetailsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/popupemail" element={<PopUPEmail />} />
          <Route path="/popupotp" element={<PopUpOtp />} />
          <Route path="/popupnewpass" element={<PopUpNewPass />} />
          <Route
            path="/products/category/:id"
            element={<ProductByCategory />}
          />
          <Route path="/products/brand/:id" element={<ProductByBrand />} />

          {/* <Route
            path="/order/paymethod"
            element={
              <ProtectedRoute auth={isUser}>
                <PaymentCheckoutPage />
              </ProtectedRoute>
            }
          /> */}

          {/* start admin */}
          <Route element={<ProtectedRoute auth={isAdmin} />}>
            <Route
              path="/admin/allproducts"
              element={<AdminAllProductPage />}
            />
            <Route path="/admin/allorders" element={<AdminAllOrderPage />} />
            <Route
              path="/admin/orders/:id"
              element={<AdminOrderDetailsPage />}
            />
            <Route path="/admin/addbrand" element={<AdminAddBrandPage />} />
            <Route
              path="/admin/addcategory"
              element={<AdminAddCategoryPage />}
            />
            <Route
              path="/admin/addsubcategory"
              element={<AdminSubCategoryPage />}
            />
            <Route path="/admin/addproduct" element={<AdminAddProductPage />} />
            <Route path="/admin/addcoupons" element={<AdminAddCouponsPage />} />
            <Route
              path="/admin/editcoupons/:id"
              element={<AdminEditCouponPage />}
            />
            <Route
              path="/admin/editproduct/:id"
              element={<AdminEditProductsPage />}
            />
          </Route>
          {/* end admin */}

          {/* start user */}
          <Route element={<ProtectedRoute auth={isUser} />}>
            <Route path="/user/allorders" element={<UserAllOrderPage />} />
            <Route
              path="/user/favoriteproducts"
              element={<UserFavProductsPage />}
            />
            <Route path="/user/addresses" element={<UsersAllAdressPage />} />
            <Route path="/user/add-address" element={<UserAddAdressPage />} />
            <Route
              path="/user/edit-address/:id"
              element={<UserEditAddressPage />}
            />
            <Route path="/user/profile" element={<UserProfilePage />} />
            <Route path="/order/paymethod" element={<PaymentCheckoutPage />} />
          </Route>
          {/* end user */}

          {/* starttauction */}
          <Route path="/auctionlive" element={<AuctionLivePage />} />
          <Route path="/auctionproductpage" element={<AuctionProductPage />} />
          <Route path="/stream" element={<Stream />} />
          <Route path="/upliveone" element={<UppliveShow1 />} />
          <Route path="/uplivetwo" element={<UppliveShow2 />} />
          <Route path="/uplivethree" element={<UppliveShow3 />} />
          <Route path="/uplivefour" element={<UppliveShow4 />} />
          {/* end auction */}

          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
