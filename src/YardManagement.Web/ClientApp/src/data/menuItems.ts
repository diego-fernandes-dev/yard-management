import {
    HomeIcon,
    Cog6ToothIcon,
    UserIcon,
    ChartPieIcon,
    CalendarIcon,
    DocumentDuplicateIcon,
    InboxIcon,
    GlobeAltIcon
  } from '@heroicons/react/24/outline';
  
  export const menuItems = [
    {
      title: 'Dashboard',
      icon: HomeIcon,
      subItems: [
        { title: 'Analytics', icon: ChartPieIcon },
        { title: 'Calendar', icon: CalendarIcon },
        { title: 'Documents', icon: DocumentDuplicateIcon },
        { title: 'Inbox', icon: InboxIcon },
      ],
    },
    {
      title: 'Profile',
      icon: UserIcon,
      subItems: [],
    },
    {
      title: 'Settings',
      icon: Cog6ToothIcon,
      subItems: [
        { title: 'General', icon: GlobeAltIcon },
        { title: 'User Management', icon: UserIcon },
      ],
    },
  ];
  