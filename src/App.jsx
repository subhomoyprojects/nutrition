import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./shared/Header";
import Footer from "./shared/Footer";
import { Suspense, lazy } from "react";
import { Navigate } from "react-router-dom";
import Loading from "./common/Loading";

const Home = lazy(() => import("../src/cms/Home"));
const About = lazy(() => import("../src/cms/About"));
const Contact = lazy(() => import("../src/cms/Contact"));
const Product = lazy(() => import("../src/cms/Product"));
const ProductDetails = lazy(() => import("../src/cms/ProductDetails"));
const Login = lazy(() => import("../src/auth/Login"));
const Signup = lazy(() => import("../src/auth/Signup"));
const Profile = lazy(() => import("../src/user/Profile"));
const CreateProduct = lazy(() => import("../src/user/CreateProduct"));

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
    path: "/productDetails",
    Component: <ProductDetails />,
  },
  {
    path: "/profile",
    Component: <Profile />,
  },
  {
    path: "/createproduct",
    Component: <CreateProduct />,
  },
];

const PublicRouteNames = [
  {
    path: "/",
    Component: <Home />,
  },
  {
    path: "/about",
    Component: <About />,
  },
  {
    path: "/contact",
    Component: <Contact />,
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

function App() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Router>
          <Header />
          <Routes>
            {PublicRouteNames?.map((route, index) => {
              return <Route key={index} exact path={route.path} element={route.Component} />;
            })}

            {PrivateRouteNames?.map((route, index) => {
              return <Route key={index} path={route.path} element={<PrivateRoute>{route.Component}</PrivateRoute>} />;
            })}
          </Routes>
          <Footer />
        </Router>
      </Suspense>
    </>
  );
}

export default App;
