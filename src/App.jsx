import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "./globalComponents/shared/Loader";
const MainDashboard = lazy(() => import("./globalComponents/layout"));
const Dashboard = lazy(() => import("./pages/dashboard/Dashboard"));
const Buildings = lazy(() => import("./pages/buildings/Buildings"));
const RealtimeHeatmap = lazy(() => import("./pages/map/realtimeHeatmap/RealtimeHeatmap"));
const RealtimeMap = lazy(() => import("./pages/map/realtimeMap/RealtimeMap"));
const Inspectionists = lazy(() => import("./pages/users/inspectionists/Inspectionists"));
const Account = lazy(() => import("./pages/settings/account/Account"));
const Configuration = lazy(() => import("./pages/settings/configuration/Configuration"));
const Reports = lazy(() => import("./pages/reports/Reports"));

function App() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<MainDashboard />}>
            <Route index element={<Dashboard />} />
            <Route path="buildings" element={<Buildings />} />
            <Route path="reports" element={<Reports />} />
            <Route path="realtime-heatmap" element={<RealtimeHeatmap />} />
            <Route path="realtime-map" element={<RealtimeMap />} />
            <Route path="inspectionists" element={<Inspectionists />} />
            <Route path="account" element={<Account />} />
            <Route path="configuration" element={<Configuration />} />
            <Route path="reports" element={<Reports />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
