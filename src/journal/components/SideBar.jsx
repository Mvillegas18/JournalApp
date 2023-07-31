import { TurnedInNot } from '@mui/icons-material'
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import PropTypes from 'prop-types'

export const SideBar = ({ drawerWidth }) => {
  return (
    <Box component='nav' sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
      <Drawer
        variant='permanent'
        open
        sx={{ display: { xs: 'block', '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth } } }}
      >
        <Toolbar>
          <Typography variant='h6' noWrap component='div'>Miguel Angel Villegas</Typography>
        </Toolbar>
        <Divider />

        <List>
          {
            ['Enero', 'Febero', 'Marzo', 'Abril'].map((text) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <TurnedInNot />
                  </ListItemIcon>
                  <Grid container>
                    <ListItemText primary={text} />
                    <ListItemText secondary='Dolore nisi elit sunt enim elit amet magna id nisi.' />
                  </Grid>
                </ListItemButton>
              </ListItem>
            ))
          }
        </List>

      </Drawer>
    </Box>
  )
}

SideBar.propTypes = {
  drawerWidth: PropTypes.number.isRequired
}

SideBar.defaultProps = {
  drawerWidth: 240
}
