import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes, useLocation, Navigate } from "react-router-dom";
import Header from "./shared/Header";
import Footer from "./shared/Footer";
import { Suspense, lazy } from "react";
import Loading from "./common/Loading";
import { check_token } from "./redux/slice/AuthSlice";
import { useDispatch } from "react-redux";

const Home = lazy(() => import("../src/cms/Home"));
const Product = lazy(() => import("../src/cms/Product"));
const ProductDetails = lazy(() => import("../src/cms/ProductDetails"));
const Login = lazy(() => import("../src/auth/Login"));
const Signup = lazy(() => import("../src/auth/Signup"));
const CreateProduct = lazy(() => import("../src/user/CreateProduct"));
const UpdateProduct = lazy(() => import("../src/user/UpdateProduct"));

function PrivateRoute({ children }) {
  const token = localStorage.getItem("token") || sessionStorage.getItem("token");

  return token !== null && token !== undefined ? (
    children
  ) : (
    <>
      <Navigate to="/" />
    </>
  );
}

const PrivateRouteNames = [
  {
    path: "/product",
    Component: <Product />,
  },
  {
    path: "/product/detail/:id",
    Component: <ProductDetails />,
  },
  {
    path: "/createproduct",
    Component: <CreateProduct />,
  },
  {
    path: "/update/:id",
    Component: <UpdateProduct />,
  },
];

const PublicRouteNames = [
  {
    path: "/",
    Component: <Home />,
  },
  {
    path: "/login",
    Component: <Login />,
  },
  {
    path: "/signup",
    Component: <Signup />,
  },
];

function MyRoutes({ locationGet }) {
  const { pathname } = useLocation();
  useEffect(() => {
    locationGet(pathname);
  }, [pathname]);

  return (
    <Routes>
      {PublicRouteNames?.map((route, index) => (
        <Route key={index} exact path={route.path} element={route.Component} />
      ))}

      {PrivateRouteNames?.map((route, index) => (
        <Route key={index} path={route.path} element={<PrivateRoute>{route.Component}</PrivateRoute>} />
      ))}
    </Routes>
  );
}

function App() {
  const dispatch = useDispatch();
  const [url, setUrl] = useState("");

  useEffect(() => {
    dispatch(check_token());
  }, [dispatch]);

  const locationGet = (location) => {
    setUrl(location);
  };

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Router>
          {url !== "/login" && url !== "/signup" && <Header />}
          <MyRoutes locationGet={locationGet} />
          {url !== "/login" && url !== "/signup" && <Footer />}
        </Router>
      </Suspense>
    </>
  );
}

export default App;
