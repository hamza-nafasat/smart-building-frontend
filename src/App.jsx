import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "./globalComponents/shared/Loader";
const MainDashboard = lazy(() => import("./globalComponents/layout"));
const Dashboard = lazy(() => import("./pages/dashboard/Dashboard"));
const Buildings = lazy(() => import("./pages/buildings/Buildings"));
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
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
