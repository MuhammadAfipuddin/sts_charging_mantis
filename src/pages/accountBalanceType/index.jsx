// material-ui
// project import
import MainCard from 'components/MainCard';
import AccountBalanceTypeTable from './AccountBalanceTypeTable';
import Button from './Button';
import Search from './Search';
import Box from '@mui/material/Box';
import { useState } from 'react';

// ==============================|| SAMPLE PAGE ||============================== //

export default function AccountBalanceType() {
  const [isRowClicked, setIsRowClicked] = useState(false);

  const handleRowClick = () => {
    setIsRowClicked(true);
  };

  return (
    <MainCard>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>{isRowClicked && <Button />}</Box>
        <Search />
      </Box>
      <AccountBalanceTypeTable onRowClick={handleRowClick} />
    </MainCard>
  );
}
