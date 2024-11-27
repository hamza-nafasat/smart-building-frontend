import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { lazy, Suspense } from "react";
import "cropperjs/dist/cropper.css";
import Loader from "./globalComponents/shared/Loader";
import Inspection from "./inspection/layout";
import InspectionDashboard from "./inspection/pages/dashboard/InspectionDashboard";
import InspectionHistory from "./inspection/pages/history/InspectionHistory";
import InspectionSetting from "./inspection/pages/setting/InspectionSetting";
import InspectionDetail from "./inspection/pages/dashboard/inspectionDetail/InspectionDetail";
import EditProfile from "./inspection/pages/setting/EditProfile";
import Security from "./inspection/pages/setting/Security";
import Login from "./pages/auth/login/Login";
import SignUp from "./pages/auth/signup/Signup";
import ForgetPassword from "./pages/auth/forgetPassword/ForgetPassword";
import ChangePassword from "./pages/auth/forgetPassword/ChangePassword";
import UserChangePassword from "./pages/settings/changePassword/UserChangePassword";
const MainDashboard = lazy(() => import("./globalComponents/layout"));
const Dashboard = lazy(() => import("./pages/dashboard/Dashboard"));
const Buildings = lazy(() => import("./pages/buildings/Buildings"));
const RealtimeHeatmap = lazy(() =>
  import("./pages/map/realtimeHeatmap/RealtimeHeatmap")
);
const RealtimeMap = lazy(() => import("./pages/map/realtimeMap/RealtimeMap"));
const Inspectionists = lazy(() =>
  import("./pages/users/inspectionists/Inspectionists")
);
const Account = lazy(() => import("./pages/settings/account/Account"));
const Configuration = lazy(() =>
  import("./pages/settings/configuration/Configuration")
);
const Reports = lazy(() => import("./pages/reports/buildingReports/Reports"));
const BuildingStepper = lazy(() =>
  import("./pages/buildings/components/BuildingStepper")
);
const InspectionOfficer = lazy(() =>
  import("./pages/inspectionOfficer/InspectionOfficer")
);

function App() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/change-password" element={<ChangePassword />} />

          <Route path="/" element={<MainDashboard />}>
            <Route index element={<Dashboard />} />
            <Route path="buildings" element={<Buildings />} />
            <Route path="add-building" element={<BuildingStepper />} />
            <Route path="reports" element={<Reports />} />
            <Route path="realtime-heatmap" element={<RealtimeHeatmap />} />
            <Route path="realtime-map" element={<RealtimeMap />} />
            <Route path="inspectionists" element={<Inspectionists />} />
            <Route path="account" element={<Account />} />
            <Route path="changePassword" element={<UserChangePassword />} />
            <Route path="configuration" element={<Configuration />} />
            <Route path="building-reports" element={<Reports />} />
            <Route path="inspection-officer" element={<InspectionOfficer />} />
          </Route>

          {/* Inspection Routes */}

          <Route path="/inspection" element={<Inspection />}>
            <Route index element={<Navigate replace to="home" />} />
            <Route path="home" element={<InspectionDashboard />} />
            <Route path="history" element={<InspectionHistory />} />
            {/* <Route path="setting" element={<InspectionSetting />} /> */}
            <Route path="inspection-detail" element={<InspectionDetail />} />
            <Route path="edit-profile" element={<EditProfile />} />
            <Route path="security" element={<Security />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
