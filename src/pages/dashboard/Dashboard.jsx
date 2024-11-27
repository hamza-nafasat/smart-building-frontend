import BuildingCard from "./components/BuildingCard";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-4 gap-4">
      <BuildingCard />
      <BuildingCard />
      <BuildingCard />
      <BuildingCard />
      <BuildingCard />
      <BuildingCard />
    </div>
  );
};

export default Dashboard;
