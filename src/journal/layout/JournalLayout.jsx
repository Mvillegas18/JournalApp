import { Box } from '@mui/material'
import PropTypes from 'prop-types'
import { NavBar } from '../components'

const drawerWidth = 240
export const JournalLayout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }}>

      {/* Navbar */}
      <NavBar drawerWidth={drawerWidth} />

      {/* Sidebar */}

      <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
        {/* Toolbar */}

        {children}
      </Box>
    </Box>
  )
}

JournalLayout.propTypes = {
  children: PropTypes.node.isRequired
}
