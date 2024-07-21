import {
  HomeIcon,
  Cog6ToothIcon,
  UserIcon,
  ChartPieIcon,
  CalendarIcon,
  DocumentDuplicateIcon,
  InboxIcon,
  GlobeAltIcon,
  Squares2X2Icon
} from '@heroicons/react/24/outline';

export const menuItems = [
  {
    title: '',
    items: [
      { title: 'Dashboards', icon: Squares2X2Icon, subItems: [
      { title: 'Main Dashboard', icon: HomeIcon, subItems: [] },
      { title: 'Light Sidebar', icon: ChartPieIcon, subItems: [] },
      { title: 'Dark Sidebar', icon: CalendarIcon, subItems: [] },
    ]}],
  },
  {
    title: 'User',
    items: [
      { title: 'Public Profile', icon: UserIcon, subItems: [
        { title: 'Profiles', icon: UserIcon, path: '/profiles' },
        { title: 'Projects', icon: DocumentDuplicateIcon, path: '/projects' },
        { title: 'Works', icon: InboxIcon, path: '/works' },
        { title: 'Teams', icon: GlobeAltIcon, path: '/teams' },
        { title: 'Network', icon: HomeIcon, path: '/network' },
        { title: 'Activity', icon: HomeIcon, path: '/activity' },
      ]},
      { title: 'My Account', icon: Cog6ToothIcon, subItems: [] },
      { title: 'Network', icon: HomeIcon, subItems: [] },
      { title: 'Authentication', icon: HomeIcon, subItems: [] },
    ],
  },
  {
    title: 'Apps',
    items: [
      { title: 'User Management', icon: HomeIcon, subItems: [] },
      { title: 'Projects', icon: HomeIcon, subItems: [] },
      { title: 'eCommerce', icon: HomeIcon, subItems: [] },
    ],
  },
  {
    title: 'Miscellaneous',
    items: [
      { title: 'Modals', icon: HomeIcon, subItems: [] },
      { title: 'Wizards', icon: HomeIcon, subItems: [] },
    ],
  },
];
