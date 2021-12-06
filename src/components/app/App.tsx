import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-datepicker/dist/react-datepicker.css";
import Loader from "../common/Loader";
import Header from "../header/Header";

const App = () => {
  toast.configure();
  const Home = lazy(() => import("../home/Home"));
  const routes = [
    {
      key: "home",
      path: "/",
    },
  ];

  const FallBackComp = () => (
    <Loader loading={true} loadingText="Loading...">
      <div className="h-100vh w-100"></div>
    </Loader>
  );

  return (
    <>
      <Suspense fallback={FallBackComp}>
        <ToastContainer
          position="top-right"
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          draggable
          pauseOnHover
        />
        <Header title=""/>
        <div className="d-flex w-100">
          <Router>
            <Routes>
              {routes.map((item) => (
                <Route
                  key={item.key}
                  path={item.path}
                  element={<Home />}
                ></Route>
              ))}
            </Routes>
          </Router>
        </div>
      </Suspense>
    </>
  );
};

export default App;
