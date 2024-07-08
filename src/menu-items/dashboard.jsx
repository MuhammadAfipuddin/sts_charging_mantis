// assets
import {
  DashboardOutlined,
  AppstoreOutlined,
  UnorderedListOutlined,
  BarChartOutlined,
  DollarOutlined,
  SettingOutlined
} from '@ant-design/icons';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';

// icons
const icons = {
  DashboardOutlined,
  AppstoreOutlined,
  UnorderedListOutlined,
  AutoAwesomeMotionIcon,
  BarChartOutlined,
  DollarOutlined,
  SettingOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard = {
  id: 'group-dashboard',
  title: 'Navigation',
  type: 'group',
  children: [
    {
      id: 'dashboard',
      title: 'Dashboard',
      type: 'item',
      url: '/dashboard/default',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
    },
    {
      id: 'accountBalanceType',
      title: 'Account Balance Type',
      type: 'item',
      url: '/account-balance-type',
      icon: icons.AppstoreOutlined,
      breadcrumbs: false
    },
    {
      id: 'accountBalanceTypeGroup',
      title: 'Account Balance Type Group',
      type: 'item',
      url: '/account-balance-type-group',
      icon: icons.AutoAwesomeMotionIcon,
      breadcrumbs: false
    },
    {
      id: 'accountItemGroup',
      title: 'Account Item Group',
      type: 'item',
      url: '/account-item-group',
      icon: icons.AutoAwesomeMotionIcon,
      breadcrumbs: false
    },
    {
      id: 'accountItemGroupTax',
      title: 'Account Item Group Tax',
      type: 'item',
      url: '/account-item-group-Tax',
      icon: icons.AutoAwesomeMotionIcon,
      breadcrumbs: false
    },
    {
      id: 'accountItemType',
      title: 'Account Item Type',
      type: 'item',
      url: '/account-item-type',
      icon: icons.UnorderedListOutlined,
      breadcrumbs: false
    },
    {
      id: 'billingCycle',
      title: 'Billing Cycle',
      type: 'item',
      url: '/billing-cycle',
      icon: icons.BarChartOutlined,
      breadcrumbs: false
    },
    {
      id: 'taxConfiguration',
      title: 'Tax Configuration',
      type: 'item',
      url: '/tax-configuration',
      icon: icons.DollarOutlined,
      breadcrumbs: false
    },
    {
      id: 'goodsAndServicesTaxType',
      title: 'Goods And Services Tax Type',
      type: 'item',
      url: '/goods-and-services-tax-type',
      icon: icons.DollarOutlined,
      breadcrumbs: false
    },
    {
      id: 'installmentTypeManagement',
      title: 'Installment Type Management',
      type: 'item',
      url: '/installment-type-management',
      icon: icons.SettingOutlined,
      breadcrumbs: false
    },
    {
      id: 'merge',
      title: 'Merge',
      type: 'item',
      url: '/merge',
      icon: icons.UnorderedListOutlined,
      breadcrumbs: false
    },
    {
      id: 'mergeType',
      title: 'Merge Type',
      type: 'item',
      url: '/merge-type',
      icon: icons.UnorderedListOutlined,
      breadcrumbs: false
    },
    {
      id: 'incomeIndikator',
      title: 'Income Indikator',
      type: 'item',
      url: '/income-indikator',
      icon: icons.DollarOutlined,
      breadcrumbs: false
    }
  ]
};

export default dashboard;
