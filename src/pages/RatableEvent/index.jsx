import MainCard from 'components/MainCard';
import RatableEventTable from './RatableEventTable';
import Button from './Button';
import Box from '@mui/material/Box';
import { useState } from 'react';
import SideNav from './SideNav';
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';

const dynamicColumns = [
  { field: 'featureName', headerName: 'Feature Name', width: 260 },
  { field: 'measurable', headerName: 'Measurable', width: 260 },
  { field: 'featureSource', headerName: 'Feature Source', width: 260 },
  { field: 'sourceProperty', headerName: 'Source Property', width: 260 },
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

const dynamicRows = [
  { id: 1, featureName: 'EXP_CUST_BIRTHDAY', measurable: '', featureSource: '', sourceProperty: '' },
  { id: 2, featureName: 'Is First Call', measurable: '', featureSource: '', sourceProperty: '' },
  { id: 3, featureName: 'Recurring Fee Deduction Rule2', measurable: '', featureSource: '', sourceProperty: '' }
];

const staticColumns = [
  { field: 'featureName', headerName: 'Feature Name', width: 260 },
  { field: 'measurable', headerName: 'Measurable', width: 260 },
  { field: 'reservedFeature', headerName: 'Reserved Feature', width: 260 },
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

const staticRows = [
  { id: 1, featureName: 'Zonecode Flag', measurable: '', reservedFeature: '' },
  { id: 2, featureName: 'NOT_NEED_CREDITLIMIT_FLAG', measurable: '', reservedFeature: 'NOT_NEED_CREDITLIMIT_FLAG' },
  { id: 3, featureName: 'Rule Calc Exit', measurable: '', reservedFeature: 'Rule Calc Exit' },
  { id: 4, featureName: 'CL_WORKFLOW_ACTION_FLAG', measurable: '', reservedFeature: 'CL_WORKFLOW_ACTION_FLAG' },
  { id: 5, featureName: 'OweAmountBySyn', measurable: '', reservedFeature: 'Event Extend Property 40' },
  { id: 6, featureName: 'GetPromisetopayInfo', measurable: '', reservedFeature: 'Event Extend Property 41' }
];

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
}

export default function RatableEvent() {
  const [isRowClicked, setIsRowClicked] = useState(false);

  const handleRowClick = () => {
    setIsRowClicked(true);
  };

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', display: 'flex', height: '100vh' }}>
      <SideNav />
      <Box sx={{ flexGrow: 1 }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', ml: 3 }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Dynamic Feature" {...a11yProps(0)} />
            <Tab label="Static Feature" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <Box sx={{ display: 'flex', height: '100vh' }}>
            <Box sx={{ flexGrow: 1 }}>
              <MainCard>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>{isRowClicked && <Button />}</Box>
                </Box>
                <RatableEventTable columns={dynamicColumns} rows={dynamicRows} onRowClick={handleRowClick} />
              </MainCard>
            </Box>
          </Box>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Box sx={{ display: 'flex', height: '100vh' }}>
            <Box sx={{ flexGrow: 1 }}>
              <MainCard>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>{isRowClicked && <Button />}</Box>
                </Box>
                <RatableEventTable columns={staticColumns} rows={staticRows} onRowClick={handleRowClick} />
              </MainCard>
            </Box>
          </Box>
        </CustomTabPanel>
      </Box>
    </Box>
  );
}
