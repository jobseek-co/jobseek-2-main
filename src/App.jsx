import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Layout from "./components/layout/result";
import Homepage from "./pages/homepage";
import Jobs from "./pages/jobs";
import Aboutus from "./pages/aboutus";
import Faq from "./pages/faq";
import Contactus from "./pages/contactus";
import Authresult from "./components/layout/authresult";
import Introauth from "./pages/Auth/introauth";
import Signup from "./pages/Auth/signup";
import NotFound from "./pages/404";
import VerifySuccess from "./components/common/verifysuccess";
import ProfileFilling from "./components/layout/profile-filling";
import PersonnalInfo from "./pages/profile/personnal-info";
import ProfileSetup from "./pages/profile/profile-setup";
import FreelancerDetails from "./pages/profile/freelancerdetails";
import ClientRecruiter from "./pages/profile/clientdetails";
import Clientdash from "./pages/dashboardpro/clientdash";
import Freelancer from "./pages/dashboardpro/freelancer";
import Dashboard from "./components/layout/dashboard";

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        { path: "/", element: <Homepage /> },
        { path: "/jobs", element: <Jobs /> },
        { path: "/about", element: <Aboutus /> },
        { path: "/faq", element: <Faq /> },
        { path: "/contact", element: <Contactus /> },
      ],
    },

    {
      element: <Authresult />,
      children: [
        { path: "/intro", element: <Introauth /> },
        { path: "/signup", element: <Signup /> },
      ],
    },
    {
      element: <ProfileFilling />,
      children: [
        { path: "/profile-info", element: <PersonnalInfo /> },
        { path: "/profile-setup", element: <ProfileSetup /> },
        { path: "/profile/next-step", element: <FreelancerDetails /> },
        { path: "/profile/client-details", element: <ClientRecruiter /> },
      ],
    },
    {
      element: <Dashboard />,
      children: [
        { path: "/client-dashboard", element: <Clientdash /> },
        { path: "/freelancer-dashboard", element: <Freelancer /> },
      ],
    },

    { path: "/verify-success", element: <VerifySuccess /> },

    // ✅ 404 OUTSIDE layouts (no header/footer)
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
