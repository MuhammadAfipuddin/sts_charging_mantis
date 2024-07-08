import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'itemAccountTypeName', headerName: 'Item Account Type Name', width: 330 },
  { field: 'accountBalanceType', headerName: 'Account Balance Type', width: 330 },
  { field: 'balanceCatalog', headerName: 'Balance Catalog', width: 330 },
  { field: 'parentAccountItemType', headerName: 'Parent Account Item Type', width: 330 }
];

const rows = [
  {
    id: 1,
    itemAccountTypeName: '4GB_Unlimited acct item',
    accountBalanceType: 'Local Currency',
    balanceCatalog: 'Basic Balance',
    parentAccountItemType: ''
  },
  {
    id: 2,
    itemAccountTypeName: 'AddOn_10GB_299 benifit acctitem',
    accountBalanceType: 'AddOn_10GB_299 benifit',
    balanceCatalog: 'Non CurrencyBalance',
    parentAccountItemType: ''
  },
  {
    id: 3,
    itemAccountTypeName: 'AddOn_5GB_RC acct item',
    accountBalanceType: 'Local Currency',
    balanceCatalog: 'Basic Balance',
    parentAccountItemType: ''
  },
  {
    id: 4,
    itemAccountTypeName: 'Comfort Data Flow',
    accountBalanceType: 'Comfort Data Flow',
    balanceCatalog: 'Non Currency Balance',
    parentAccountItemType: ''
  },
  {
    id: 5,
    itemAccountTypeName: 'Comfort Data Package',
    accountBalanceType: 'Local Currency',
    balanceCatalog: 'Basic Balance',
    parentAccountItemType: ''
  },
  {
    id: 6,
    itemAccountTypeName: 'Comfort Local Call',
    accountBalanceType: 'Comfort Local Call',
    balanceCatalog: 'Non Currency Balance',
    parentAccountItemType: ''
  },
  {
    id: 7,
    itemAccountTypeName: 'Core_60GB_20 accountitem',
    accountBalanceType: 'Local Currency',
    balanceCatalog: 'Basic Balance',
    parentAccountItemType: ''
  },
  {
    id: 8,
    itemAccountTypeName: 'Core_60GB_20 benifit data acctitem',
    accountBalanceType: 'Core_60GB_20 benifit data balance',
    balanceCatalog: 'Non Currency Balance',
    parentAccountItemType: ''
  }
];

// eslint-disable-next-line react/prop-types
export default function DataTable({ onRowClick }) {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 }
          }
        }}
        pageSizeOptions={[5, 10]}
        onRowClick={onRowClick}
      />
    </div>
  );
}
