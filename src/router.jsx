import { createBrowserRouter, NavLink, useRouteError } from "react-router-dom";
import { Dashboard } from "./Dashboard/Dashboard";
import PrivateRoutes from "./hoc/PrivateRoutes";
import concat from "lodash/concat";
import Abroad from "./Abroad/Abroad";

const documentRouter = [
  {
    handle: {
      crumb: () => (
        <NavLink to="/dashboard" className="breadcrumb-link">
          Dashboard
        </NavLink>
      ),
      activeMenuId: 'dashboard',
    },
    children: [
      {
        path: '/dashboard',
        element: <Dashboard />,
        handle: {
          crumb: () => (
            <NavLink to="/dashboard" className="breadcrumb-link">
              Dashboard
            </NavLink>
          ),
        },
      },
    ],
  },
];

const abroadRoutes = [
  {
    handle: {
      crumb: () => (
        <NavLink to="/abroad" className="breadcrumb-link">
          Abroad
        </NavLink>
      ),
      activeMenuId: "abroad",
    },
    children: [
      {
        path: "/abroad",
        element: <Abroad />,
      },
    ],
  },
];


export const router = createBrowserRouter(
  [
    // Public Routes
    {
      path: "/",
      element: (
        <>
           {/* ✅ Now inside Router context */}
          
        </>
      ),
    },
    //   { path: '/forgotpassword', element: <ForgotPassword /> },
    //   { path: '/request/otp', element: <ForgotPasswordCode /> },
    //   { path: '/request/password', element: <NewPassword /> },
    //   { path: '/request/password/success', element: <Success /> },
    //   { path: '/request/auth/:loginUUID', element: <RequestLogin /> },

    // Private Routes
    {
      element: <PrivateRoutes />,
      children: [
        {
          element: "",
          children: concat(documentRouter,abroadRoutes),
          errorElement: <ErrorBoundary />,
        },
      ],
    },
  ],
  { basename: "/" }
);

function ErrorBoundary() {
  let error = useRouteError();
  console.error(error);
  // Uncaught ReferenceError: path is not defined
  return <div></div>;
}

export default router;
