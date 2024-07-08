import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton, Box } from '@mui/material';

const columns = [
  { field: 'balanceTypeName', headerName: 'Balance Type Name', width: 260 },
  { field: 'isCurrency', headerName: 'Is Currency', width: 260 },
  { field: 'maximumBalance', headerName: 'Maximum Balance', width: 260 },
  { field: 'unit', headerName: 'Unit', width: 260 },
  {
    field: 'action',
    headerName: '',
    width: 260,
    renderCell: () => (
      <Box display="flex" justifyContent="center" width="100%">
        <IconButton aria-label="edit" size="medium">
          <EditIcon fontSize="inherit" />
        </IconButton>
        <IconButton aria-label="delete" size="medium">
          <DeleteIcon fontSize="inherit" />
        </IconButton>
      </Box>
    )
  }
];

const rows = [
  {
    id: 1,
    balanceTypeName: 'AddOn_5GB_RC data benefit',
    isCurrency: '',
    maximumBalance: '',
    unit: 'Byte'
  },
  {
    id: 2,
    balanceTypeName: 'Comfort Data Flow',
    isCurrency: '',
    maximumBalance: '',
    unit: 'Byte'
  },
  {
    id: 3,
    balanceTypeName: 'Comfort Local Call',
    isCurrency: '',
    maximumBalance: '',
    unit: 'Second'
  },
  {
    id: 4,
    balanceTypeName: 'Core_60GB_20 benefit data balance',
    isCurrency: '',
    maximumBalance: '',
    unit: 'Byte'
  },
  {
    id: 5,
    balanceTypeName: 'Core_60GB_20 benefit sms balance',
    isCurrency: '',
    maximumBalance: '',
    unit: 'Occurance'
  },
  {
    id: 6,
    balanceTypeName: 'Core_60GB_20 benefit voice balance',
    isCurrency: '',
    maximumBalance: '',
    unit: 'Second'
  },
  {
    id: 7,
    balanceTypeName: 'Core_60GB_20 benefit data benefit',
    isCurrency: '',
    maximumBalance: '',
    unit: 'Byte'
  },
  {
    id: 8,
    balanceTypeName: 'Core_60GB_20 benefit sms benefit',
    isCurrency: '',
    maximumBalance: '',
    unit: 'Occurance'
  },
  {
    id: 9,
    balanceTypeName: 'Roaming Data balance',
    isCurrency: '',
    maximumBalance: '',
    unit: 'Byte'
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
