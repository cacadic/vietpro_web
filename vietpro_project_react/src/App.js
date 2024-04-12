import Cart from "./pages/Cart";
import Category from "./pages/Category";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ProductDetails from "./pages/ProductDetails";
import Search from "./pages/Search";
import Success from "./pages/Success";
import Footer from "./shared/components/Layout/Footer";
import Header from "./shared/components/Layout/Header";
import Menu from "./shared/components/Layout/Menu";
import Sidebar from "./shared/components/Layout/Sidebar";
import Slider from "./shared/components/Layout/Slider";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux-setup/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <div id="body">
          <div className="container">
            <Menu />

            <div className="row">
              <div id="main" className="col-lg-8 col-md-12 col-sm-12">
                <Slider />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/Category-:id" element={<Category />} />
                  <Route path="/Cart" element={<Cart />} />
                  <Route
                    path="/ProductDetail-:id"
                    element={<ProductDetails />}
                  />
                  <Route path="/Search" element={<Search />} />
                  <Route path="/Success" element={<Success />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </div>
              <Sidebar />
            </div>
          </div>
        </div>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
