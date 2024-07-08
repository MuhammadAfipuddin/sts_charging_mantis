import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import Dashboard from 'layout/Dashboard';

const DashboardDefault = Loadable(lazy(() => import('pages/dashboard/index')));
const AccountBalanceType = Loadable(lazy(() => import('pages/accountBalanceType/index')));
const AccountBalanceTypeGroup = Loadable(lazy(() => import('pages/accountBalanceTypeGroup/index')));
const AccountItemGroup = Loadable(lazy(() => import('pages/accountItemGroup/index')));
const AccountItemGroupTax = Loadable(lazy(() => import('pages/accountItemGroupTax/index')));
const AccountItemType = Loadable(lazy(() => import('pages/accountItemType/index')));
const BillingCycle = Loadable(lazy(() => import('pages/AccountManagement/billingCycle/index')));
const TaxConfiguration = Loadable(lazy(() => import('pages/taxConfiguration/index')));
const GoodsAndServicesTaxType = Loadable(lazy(() => import('pages/goodsAndServicesTaxType/index')));
const InstallmentTypeManagement = Loadable(lazy(() => import('pages/installmentTypeManagement/index')));
const Merge = Loadable(lazy(() => import('pages/merge/index')));
const MergeType = Loadable(lazy(() => import('pages/mergeType/index')));
const IncomeIndikator = Loadable(lazy(() => import('pages/incomeIndikator/index')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <Dashboard />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: 'account-balance-type',
      element: <AccountBalanceType />
    },
    {
      path: 'account-balance-type-group',
      element: <AccountBalanceTypeGroup />
    },
    {
      path: 'account-item-group',
      element: <AccountItemGroup />
    },
    {
      path: 'account-item-group-tax',
      element: <AccountItemGroupTax />
    },
    {
      path: 'account-item-type',
      element: <AccountItemType />
    },
    {
      path: 'billing-cycle',
      element: <BillingCycle />
    },
    {
      path: 'tax-configuration',
      element: <TaxConfiguration />
    },
    {
      path: 'goods-and-services-tax-type',
      element: <GoodsAndServicesTaxType />
    },
    {
      path: 'installment-type-management',
      element: <InstallmentTypeManagement />
    },
    {
      path: 'merge',
      element: <Merge />
    },
    {
      path: 'merge-type',
      element: <MergeType />
    },
    {
      path: 'income-indikator',
      element: <IncomeIndikator />
    }
  ]
};

export default MainRoutes;
