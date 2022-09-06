import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import SelfImprovementTwoToneIcon from '@mui/icons-material/SelfImprovementTwoTone';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';

const pages = [
  {"title" : '홈', "link": "/"}, 
  {"title" : '랭킹', "link" : "/ranking"}, 
  {"title" : '듀오찾기', "link" : "/duo"},
  {"title" : '통계', "link" : "/statistics"},
  {"title" : '챔피언정보', "link" : "/championInfo"}
];

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  right: '0',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '40%',
  [theme.breakpoints.down('md')] : {
    width: '60%'
  },
  [theme.breakpoints.down('sm')] : {
    width: '100%'
  }
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing( 0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.down('sm')] : {
    display: 'none'
  }
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '65%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '100%',
      '&:focus': {
        width: '100%',
      },
    },
    [theme.breakpoints.down('sm')] : {
      paddingLeft: `calc(1em + ${theme.spacing(0)})`,
    }
  },
}));


function Form() {
  
  const navigate = useNavigate();
  const [value, setValue] = React.useState("")

  const handelInputChange = (e) => {
    const userValue = e.target.value;
    if(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/i.test(userValue)) {
      if(userValue.length > 8) {
        return
      }
    }
    if(userValue.length > 16) {
      return
    }
    setValue(e.target.value);
  };

  const handleFormSubmit = async(e) => {
    e.preventDefault();
    
    if(value === "") {
      return;
    }
    navigate('/kr/profile/'+value);
  };

  const foo = () => {
    return (
        <StyledInputBase
        autoComplete="off"
        placeholder="검색"
        name="inputValue"
        inputProps={{ 'aria-label': 'search' }} 
        value={value}
        onChange={handelInputChange}
        >
        </StyledInputBase>
    );
  }

  return (
    <Search>
      <SearchIconWrapper >
        <SearchIcon />
      </SearchIconWrapper>
      <form onSubmit={handleFormSubmit}>
        {foo()}
        <Button 
        variant='outlined'
        type="submit"
        color="inherit"
        sx={{
          position:"absolute",
          right: '0',
        }}
        >
          검색
      </Button>
      </form>
    </Search>
  );
}



const ResponsiveAppBar = () => {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" color="info">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <SelfImprovementTwoToneIcon fontSize='large' sx={{ display: { xs: 'none', md: 'flex' }, mr: 2 }} />
          <Typography
            variant="h4"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
          Log
          </Typography>

          <Box sx={{ flexGrow: 1, display: { sm: 'flex' , md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.title} onClick={() => {
                  handleCloseNavMenu();
                  navigate(page.link);
                }}>
                  <Typography textAlign="center">
                    {page.title}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <SelfImprovementTwoToneIcon fontSize='large' sx={{ display: {xs: 'none', sm:'flex', md: 'none' }, mr: 2 }} />
          <Typography
            variant="h4"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: {  xs: 'none',sm: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Log
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.title}
                onClick={() => {
                  handleCloseNavMenu();
                  navigate(page.link);
                }}
                sx={{ my: 2, color: 'inherit', display: 'block' }}
              >
                {page.title}
              </Button>
            ))}
          </Box>
          <Form></Form>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;