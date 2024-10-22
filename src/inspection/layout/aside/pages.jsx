import {
  BuildingIcon,
  DashboardIcon,
  MapIcon,
  ReportIcon,
  SettingIcon,
} from "../.././../assets/svgs/index";

export const pages = [
  {
    title: "Dashboard",
    icon: <DashboardIcon />,
    link: "/inspection",
  },
  {
    title: "History",
    icon: <ReportIcon />,
    link: "/inspection/history",
  },
  {
    title: "Setting",
    icon: <SettingIcon />,
    subPages: [
      {
        title: "Profile",
        link: "/inspection/edit-profile",
      },
      {
        title: "Security",
        link: "/inspection/security",
      },
    ],
  },
];
