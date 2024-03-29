import React, { useRef } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Profile from './screens/Profile';
import RankingPage from './screens/Ranking';
import StatisticsPage from './screens/Statistics';
import ChampionDetailPage from './screens/ChampionDetail';
import Box from '@mui/material/Box';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import ChampionInfo from './screens/ChampionInfo';
import Fab from '@mui/material/Fab';
import './App.css';


const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

export default function ToggleColorMode() {
  const [mode, setMode] = React.useState('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
        typography: {
          fontFamily: "Nanum Gothic, sans-serif"
        }
      }),
    [mode],
    document.body.style.backgroundColor = (mode === 'light' ? 'white' : "#121212")
  );
  
 

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <App mode={mode}/>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

const App = ({mode}) => {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  const myRef = useRef({});

  function doSomething() {
    
    if(myRef.current.SearchInit !== undefined){
      myRef.current.SearchInit();
    }
  }

  return (
    <Box
    sx={{
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      bgcolor: 'background.default',
      color: 'text.primary',
    }}>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home mode={mode}/>} ></Route>
            <Route path="/kr/profile/:summonName" element={<Profile ref={myRef}/>}/>
            <Route path="/ranking" element={<RankingPage></RankingPage>} />
            <Route path="/statistics" element={<StatisticsPage></StatisticsPage>}/>
            <Route path="/championInfo" element={<ChampionInfo></ChampionInfo>}/>
            <Route path="/championDetail/:championId" element={<ChampionDetailPage></ChampionDetailPage>}/>
            <Route path="/*" element={<h1>존재하지 않는 페이지입니다.</h1>} />
        </Routes>
      </BrowserRouter>
      <Fab 
      sx={{margin: 0,
            top: 'auto',
            right: 20,
            bottom: 20,
            left: 'auto',
            position: 'fixed',
            backdrop: {
              zIndex: 1,
              color: '#fff',
            },
            root: {
              height: 0,
              flexGrow: 1,
            },}}
      size="small"
      aria-label="Brightness"
      onClick={() => {
        doSomething();
        colorMode.toggleColorMode();
      }} 
      color="inherit">
        {theme.palette.mode === 'dark' ? <Brightness7Icon color='warning'/> : <Brightness4Icon />}
      </Fab>
    </Box>
  );
}

