/*!

=========================================================
* Dashboard React - v1.9.0
=========================================================

* Product Page: https://www.strixdigital.in/product/material-dashboard-react
* Copyright 2020 Strix Digital (https://www.strixdigital.in)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Strix Digital

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
import Language from "@material-ui/icons/Language";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import UserProfile from "views/UserProfile/UserProfile.js";
// import TableList from "views/TableList/TableList.js";
import Typography from "views/Typography/Typography.js";
import Icons from "views/Icons/Icons.js";
import Maps from "views/Maps/Maps.js";
import NotificationsPage from "views/Notifications/Notifications.js";
import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.js";
// core components/views for RTL layout
import RTLPage from "views/RTLPage/RTLPage.js";
import UserTable from "views/TableList/UserTable";
import CourseTable from "./views/TableList/CourseTable";
import AddCourse from "views/AddCourse.js";
import OrderTable from "views/TableList/OrderTable";
import UserCourse from "views/TableList/UserCourse";
import UserOrderTable from "views/TableList/UserOrderTable";
// import CourseTable from "views/TableList/CourseTable";

const dashboardRoutes = [
  // {
  //   path: "/dashboard",
  //   name: "Dashboard",
  //   rtlName: "لوحة القيادة",
  //   icon: Dashboard,
  //   component: DashboardPage,
  //   layout: "/admin"
  // },
  {
    path: "/user",
    name: "User Profile",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Person,
    component: UserProfile,
    layout: "/admin",
  },
  {
    path: "/table",
    name: "Users",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: UserTable,
    layout: "/admin",
  },
  {
    path: "/course",
    name: "Course",
    // rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: CourseTable,
    layout: "/admin",
  },
  {
    path: "/add-new-course",
    name: "Add Course",
    // rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: AddCourse,
    layout: "/admin",
  },
  // {
  //   path: "/typography",
  //   name: "Typography",
  //   rtlName: "طباعة",
  //   icon: LibraryBooks,
  //   component: Typography,
  //   layout: "/admin",
  // },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   rtlName: "الرموز",
  //   icon: BubbleChart,
  //   component: Icons,
  //   layout: "/admin"
  // },
  // {
  //   path: "/maps",
  //   name: "Maps",
  //   rtlName: "خرائط",
  //   icon: LocationOn,
  //   component: Maps,
  //   layout: "/admin"
  // },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   rtlName: "إخطارات",
  //   icon: Notifications,
  //   component: NotificationsPage,
  //   layout: "/admin"
  // },
  // {
  //   path: "/rtl-page",
  //   name: "RTL Support",
  //   rtlName: "پشتیبانی از راست به چپ",
  //   icon: Language,
  //   component: RTLPage,
  //   layout: "/rtl"
  // },
  // {
  //   path: "/upgrade-to-pro",
  //   name: "Upgrade To PRO",
  //   rtlName: "التطور للاحترافية",
  //   icon: Unarchive,
  //   component: UpgradeToPro,
  //   layout: "/admin"
  // }
];

export const userRoutes = [
  // {
  //   path: "/profile",
  //   name: "Profile",
  //   rtlName: "ملف تعريفي للمستخدم",
  //   icon: Person,
  //   component: UserProfile,
  //   layout: "/user",
  // },
  {
    path: "/course/:userId",
    name: "Your Courses",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Person,
    component: UserCourse,
    layout: "/user",
  },
  {
    path: "/orders/:userId",
    name: "Your Orders",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Person,
    component: UserOrderTable,
    layout: "/user",
  },
];

export default dashboardRoutes;
