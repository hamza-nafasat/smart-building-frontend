import {
  BuildingIcon,
  DashboardIcon,
  MapIcon,
  ReportIcon,
  SettingIcon,
} from "../../../assets/svgs";

export const pages = [
  {
    title: "Dashboard",
    icon: <DashboardIcon />,
    link: "/",
  },
  {
    title: "Buildings",
    icon: <BuildingIcon />,
    link: "/buildings",
  },
  {
    title: "Maps",
    icon: <MapIcon />,
    subPages: [
      {
        title: "Realtime Map",
        link: "/realtime-map",
      },
      {
        title: "Realtime Heat Map",
        link: "/realtime-heatmap",
      },
    ],
  },
  {
    title: "Users",
    icon: <MapIcon />,
    subPages: [
      {
        title: "Inspectionists",
        link: "/inspectionists",
      },
    ],
  },
  {
    title: "Reports",
    icon: <ReportIcon />,
    subPages: [
      {
        title: "Building Reports",
        link: "/building-reports",
      },
      {
        title: "Bill Reports",
        link: "/building-reports",
      },
      {
        title: "Automation Reports",
        link: "/building-reports",
      },
      {
        title: "Inspection",
        link: "/building-reports",
      },
    ],
  },
  {
    title: "Settings",
    icon: <SettingIcon />,
    subPages: [
      {
        title: "Account",
        link: "/account",
      },
      {
        title: "Configuration",
        link: "/configuration",
      },
    ],
  },
];
