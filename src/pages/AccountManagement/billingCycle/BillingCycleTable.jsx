import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton, Box } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const columns = [
  { field: 'billingCycleTypeName', headerName: 'Billing Cycle Type Name', width: 250, headerClassName: 'header-bold' },
  { field: 'billingCycleTypeCode', headerName: 'Billing Cycle Type Code', width: 250, headerClassName: 'header-bold' },
  { field: 'prePaidOrPostPaid', headerName: 'Pre-paid/Post-paid', width: 250, headerClassName: 'header-bold' },
  { field: 'startTime', headerName: 'Start Time', width: 250, headerClassName: 'header-bold' },
  { field: 'dueDate', headerName: 'Due Date', width: 250, headerClassName: 'header-bold' },
  { field: 'timeUnit', headerName: 'Time Unit', width: 110, headerClassName: 'header-bold' },
  { field: 'quantity', headerName: 'Quantity', width: 110, headerClassName: 'header-bold' },
  {
    field: 'action',
    headerName: '',
    width: 110,
    renderCell: () => (
      <Box display="flex" justifyContent="center" width="100%">
        <IconButton aria-label="edit" size="medium">
          <EditIcon fontSize="inherit" />
        </IconButton>
        <IconButton aria-label="delete" size="medium">
          <DeleteIcon fontSize="inherit" />
        </IconButton>
        <IconButton aria-label="arrow" size="medium">
          <KeyboardArrowRightIcon fontSize="inherit" />
        </IconButton>
      </Box>
    )
  }
];

const rows = [
  {
    id: 1,
    billingCycleTypeName: 'Postpaid Bill Cycle 1',
    billingCycleTypeCode: 'BC01',
    prePaidOrPostPaid: 'Post-paid',
    startTime: '2020-01-01 00:00:00',
    dueDate: '20236-01-01 00:00:00',
    timeUnit: 'Month',
    quantity: '1'
  },
  {
    id: 2,
    billingCycleTypeName: 'Postpaid Bill Cycle 2',
    billingCycleTypeCode: 'BC02',
    prePaidOrPostPaid: 'Post-paid',
    startTime: '2020-01-02 00:00:00',
    dueDate: '20236-01-01 00:00:00',
    timeUnit: 'Month',
    quantity: '1'
  },
  {
    id: 3,
    billingCycleTypeName: 'Postpaid Bill Cycle 3',
    billingCycleTypeCode: 'BC03',
    prePaidOrPostPaid: 'Post-paid',
    startTime: '2020-01-03 00:00:00',
    dueDate: '20236-01-01 00:00:00',
    timeUnit: 'Month',
    quantity: '1'
  },
  {
    id: 4,
    billingCycleTypeName: 'Postpaid Bill Cycle 4',
    billingCycleTypeCode: 'BC04',
    prePaidOrPostPaid: 'Post-paid',
    startTime: '2020-01-04 01:00:00',
    dueDate: '20236-01-01 00:00:00',
    timeUnit: 'Month',
    quantity: '1'
  },
  {
    id: 5,
    billingCycleTypeName: 'Postpaid Bill Cycle 5',
    billingCycleTypeCode: 'BC05',
    prePaidOrPostPaid: 'Post-paid',
    startTime: '2020-01-05 00:00:00',
    dueDate: '20236-01-01 00:00:00',
    timeUnit: 'Month',
    quantity: '1'
  },
  {
    id: 6,
    billingCycleTypeName: 'Postpaid Bill Cycle 6',
    billingCycleTypeCode: 'BC06',
    prePaidOrPostPaid: 'Post-paid',
    startTime: '2020-01-06 06:00:00',
    dueDate: '20236-01-01 00:00:00',
    timeUnit: 'Month',
    quantity: '1'
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
