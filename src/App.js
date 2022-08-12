import Feed from './Component/Feed';
import Rightbar from './Component/Rightbar';
import Sidebar from './Component/Sidebar';
import Navbar from './Component/Navbar';
import { Box, Stack } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <Box>
      <BrowserRouter>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between ">
          <Sidebar />
          <Feed />
          {/* <Rightbar /> */}
        </Stack>
      </BrowserRouter>
    </Box>
  )
}

export default App;