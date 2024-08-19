import { useState } from 'react'
import Echo from 'laravel-echo';
import Pusher from 'pusher-js';
import axios from 'axios';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline, Theme } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ITPage } from './pages/it/dashboard/ITPage';
import { themeLight } from './lib/theme';
const useGetTheme = () => {
  // const { authState } = useContext(AuthContext);
  const [theme, setTheme] = useState<Theme>(themeLight)
  // useEffect(() => {
  // if (authState?.theme === 'dark') {
  //   setTheme(themeDark);
  // } else {
  // setTheme(themeLight);
  // }
  // }, [authState?.theme])
  return theme
}
function App() {
  const theme = useGetTheme();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ITPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App;
