// import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
// import Header from "./shared/Header";
// import Footer from "./shared/Footer";
// import { Suspense, lazy } from "react";
// import { Navigate } from "react-router-dom";

// const Home = lazy(() => import("../src/cms/Home"));
// const About = lazy(() => import("../src/cms/About"));
// const Contact = lazy(() => import("../src/cms/Contact"));
// const Product = lazy(() => import("../src/cms/Product"));
// const ProductDetails = lazy(() => import("../src/cms/ProductDetails"));
// const Login = lazy(() => import("../src/auth/Login"));
// const Signup = lazy(() => import("../src/auth/Signup"));
// const Profile = lazy(() => import("../src/user/Profile"));

// function PrivateRoute({ children }) {
//   console.log(children, "children");
//   const token = localStorage.getItem("token") || sessionStorage.getItem("token");

//   return token !== null && token !== undefined ? (
//     children
//   ) : (
//     <>
//       <Navigate to="/" />
//       {alert("Please go for login either you can't access product list")}
//     </>
//   );
// }

// const PrivateRouteNames = [
//   {
//     path: "/product",
//     Component: <Product />,
//   },
//   {
//     path: "/productDetails",
//     Component: <ProductDetails />,
//   },
//   {
//     path: "/profile",
//     Component: <Profile />,
//   },
// ];

// const PublicRouteNames = [
//   {
//     path: "/",
//     Component: <Home />,
//   },
//   {
//     path: "/about",
//     Component: <About />,
//   },
//   {
//     path: "/contact",
//     Component: <Contact />,
//   },
//   {
//     path: "/login",
//     Component: <Login />,
//   },
//   {
//     path: "/signup",
//     Component: <Signup />,
//   },
// ];

// function App() {
//   return (
//     <>
//       <Suspense fallback={<h2>Loading.....</h2>}>
//         <Router>
//           <Header />
//           <Routes>
//             {PublicRouteNames?.map((route, index) => {
//               return <Route key={index} exact path={route.path} element={route.Component} />;
//             })}

//             {PrivateRouteNames?.map((route, index) => {
//               return <Route key={index} path={route.path} element={<PrivateRoute>{route.Component}</PrivateRoute>} />;
//             })}
//           </Routes>
//           <Footer />
//         </Router>
//       </Suspense>
//     </>
//   );
// }

// export default App;

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./shared/Header";
import Footer from "./shared/Footer";
import { Suspense, lazy } from "react";
import { Navigate } from "react-router-dom";

const Home = lazy(() => import("../src/cms/Home"));
const About = lazy(() => import("../src/cms/About"));
const Contact = lazy(() => import("../src/cms/Contact"));
const Product = lazy(() => import("../src/cms/Product"));
const ProductDetails = lazy(() => import("../src/cms/ProductDetails"));
const Login = lazy(() => import("../src/auth/Login"));
const Signup = lazy(() => import("../src/auth/Signup"));
const Profile = lazy(() => import("../src/user/Profile"));
const CreateProduct = lazy(() => import("../src/user/CreateProduct"));

function PrivateRoute({ children, isAuthenticated }) {
  return isAuthenticated ? children : <Navigate to="/" replace />;
}

const publicRoutes = {
  "/": <Home />,
  "/about": <About />,
  "/contact": <Contact />,
  "/login": <Login />,
  "/signup": <Signup />,
  "/product": <Product />,
};

const privateRoutes = {
  "/productDetails": <ProductDetails />,
  "/profile": <Profile />,
  "/createproduct": <CreateProduct />,
};

function App() {
  const isAuthenticated = !!localStorage.getItem("token") || !!sessionStorage.getItem("token");

  return (
    <>
      <Suspense fallback={<h2>Loading.....</h2>}>
        <Router>
          <Header />
          <Routes>
            {Object.entries(publicRoutes).map(([path, component]) => (
              <Route key={path} exact path={path} element={component} />
            ))}

            {Object.entries(privateRoutes).map(([path, component]) => (
              <Route key={path} path={path} element={<PrivateRoute isAuthenticated={isAuthenticated}>{component}</PrivateRoute>} />
            ))}
          </Routes>
          <Footer />
        </Router>
      </Suspense>
    </>
  );
}

export default App;
