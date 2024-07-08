import React, { useState } from 'react';
import { Box, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, TextField, InputAdornment, Collapse } from '@mui/material';
import { Search as SearchIcon, ArrowDropDown as ArrowDropDownIcon, ArrowRight as ArrowRightIcon } from '@mui/icons-material';

const SidebarNav = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [open, setOpen] = useState(false);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 240,
          boxSizing: 'border-box'
        }
      }}
    >
      <Box sx={{ p: 2 }}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Event Name"
          value={searchQuery}
          onChange={handleSearchChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            )
          }}
        />
      </Box>
      <Divider />
      <List>
        <ListItem button onClick={handleToggle}>
          <ListItemIcon>
            <ListItemIcon>{open ? <ArrowDropDownIcon /> : <ArrowRightIcon />}</ListItemIcon>
          </ListItemIcon>
          <ListItemText primary="Ratable Event" />
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button sx={{ pl: 4 }}>
              <ListItemIcon>
                <ListItemIcon>{open ? <ArrowRightIcon /> : <ArrowDropDownIcon />}</ListItemIcon>
              </ListItemIcon>
              <ListItemText primary="Usage Event" />
            </ListItem>
            <ListItem button sx={{ pl: 4 }}>
              <ListItemIcon>
                <ListItemIcon>{open ? <ArrowRightIcon /> : <ArrowDropDownIcon />}</ListItemIcon>
              </ListItemIcon>
              <ListItemText primary="Recurring Event" />
            </ListItem>
            <ListItem button sx={{ pl: 4 }}>
              <ListItemIcon>
                <ListItemIcon>{open ? <ArrowRightIcon /> : <ArrowDropDownIcon />}</ListItemIcon>
              </ListItemIcon>
              <ListItemText primary="Balance Event" />
            </ListItem>
          </List>
        </Collapse>
      </List>
      <Divider />
    </Drawer>
  );
};

export default SidebarNav;
