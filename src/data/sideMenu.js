import { v4 as uuidv4 } from 'uuid';

const Menu = [
  {
    id: uuidv4(),
    label: 'Overview',
    icon: 'BiHomeAlt',
    to: '/',
  },
  {
    id: uuidv4(),
    label: 'Courses',
    icon: 'BsBook',
    to: '/courses',
  },
  {
    id: uuidv4(),
    label: 'Planning',
    icon: 'AiOutlinePieChart',
    to: '#',
  },
  {
    id: uuidv4(),
    label: 'Statistics',
    icon: 'MdOutlineAnalytics',
    to: '#',
  },
];

const Account = [
  {
    id: uuidv4(),
    label: 'Messages',
    icon: 'BiMessageSquareDots',
    to: '#',
    notification: 18
  },
  {
    id: uuidv4(),
    label: 'Settings',
    icon: 'FiSettings',
    to: '#',
  },
];

export { Menu, Account };
