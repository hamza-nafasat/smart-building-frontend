import { BuildingIcon, DashboardIcon, MapIcon, ReportIcon, SettingIcon } from "../../../assets/svgs";

export const pages = [
    {
        title: 'Dashboard',
        icon: <DashboardIcon />,
        link: '/'
    },
    {
        title: 'Buildings',
        icon: <BuildingIcon />,
        link: 'buildings'
    },
    {
        title: 'Map',
        icon: <MapIcon />,
        link: 'map'
    },
    {
        title: 'Reports',
        icon: <ReportIcon />,
        subPages: [
            {
                title: 'Building Reports',
                link: 'building-reports'
            },
        ]
    },
    {
        title: 'Settings',
        icon: <SettingIcon />,
        subPages: [
            {
                title: 'Update Profile',
                link: 'update-profile'
            },
            {
                title: 'Configuration',
                link: 'configuration'
            },
        ]
    }
]