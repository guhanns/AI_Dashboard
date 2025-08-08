import { createBrowserRouter, NavLink, useRouteError } from "react-router-dom";
import { Dashboard } from "./Dashboard/Dashboard";
import PrivateRoutes from "./hoc/PrivateRoutes";
import concat from "lodash/concat";
import Abroad from "./Abroad/Abroad";
import Blog from "./Blog/Blog";
import Courses from "./Courses/Courses";
import University from "./University/University";
import Setting from "./Setting/Setting";
import Login from "./Login/Login";
import ForgotPassword from "./Login/ForgotPassword";
import VerifyOTP from "./Login/VerifyOTP";
import ResetPassword from "./Login/ResetPassword";
import Users from "./Users/Users";
import UserView from "./Users/UserView";

const documentRouter = [
  {
    handle: {
      crumb: () => (
        <NavLink to="/dashboard" className="breadcrumb-link">
          Dashboard
        </NavLink>
      ),
      activeMenuId: "dashboard",
    },
    children: [
      {
        path: "/dashboard",
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

const blogRoutes = [
  {
    handle: {
      crumb: () => (
        <NavLink to="/blog" className="breadcrumb-link">
          Blog
        </NavLink>
      ),
      activeMenuId: "blogs",
    },
    children: [
      {
        path: "/blog",
        element: <Blog />,
      },
    ],
  },
];

const coursesRoutes = [
  {
    handle: {
      crumb: () => (
        <NavLink to="/courses" className="breadcrumb-link">
          Courses
        </NavLink>
      ),
      activeMenuId: "courses",
    },
    children: [
      {
        path: "/courses",
        element: <Courses />,
      },
    ],
  },
];

const universityRoutes = [
  {
    handle: {
      crumb: () => (
        <NavLink to="/university" className="breadcrumb-link">
          University
        </NavLink>
      ),
      activeMenuId: "university",
    },
    children: [
      {
        path: "/university",
        element: <University />,
      },
    ],
  },
];

const settingRoutes = [
  {
    handle: {
      crumb: () => (
        <NavLink to="/setting" className="breadcrumb-link">
          Setting
        </NavLink>
      ),
      activeMenuId: "settings",
    },
    children: [
      {
        path: "/setting",
        element: <Setting />,
      },
    ],
  },
];

const usersRoutes = [
  {
    handle: {
      crumb: () => (
        <NavLink to="/users" className="breadcrumb-link">
          Users
        </NavLink>
      ),
      activeMenuId: "users",
    },
    children: [
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "/users/:id/view",
        element: <UserView />,
      },
    ],
  },
];

export const router = createBrowserRouter(
  [
    // Public Routes
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/forgot-password",
      element: <ForgotPassword />,
    },
    {
      path: "/verify-otp",
      element: <VerifyOTP />,
    },
    {
      path: "/reset-password",
      element: <ResetPassword />,
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
          children: concat(
            documentRouter,
            abroadRoutes,
            blogRoutes,
            coursesRoutes,
            universityRoutes,
            settingRoutes,
            usersRoutes
          ),
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
