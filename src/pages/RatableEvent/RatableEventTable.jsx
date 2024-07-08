import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

// eslint-disable-next-line react/prop-types
export default function DataTable({ columns, rows, onRowClick }) {
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
        sx={{
          '& .MuiDataGrid-cell': {
            fontSize: '12px'
          },
          '& .MuiDataGrid-columnHeaders': {
            fontSize: '14px'
          }
        }}
      />
    </div>
  );
}
