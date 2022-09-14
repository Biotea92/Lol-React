import React, {useState, useEffect , Fragment}from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/material';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

const pages = [
  {"title" : '랭킹', "link" : "/ranking"}, 
  {"title" : '듀오찾기', "link" : "/duo"},
  {"title" : '통계', "link" : "/statistics"},
  {"title" : '챔피언정보', "link" : "/championInfo"}
];

function FloatingBar() {
  const navigate = useNavigate();

  return (
    <Box sx={{ width:'100%', flexGrow: 1, display: 'flex' }}>
      {pages.map((page) => (
        <Button
          key={page.title}
          onClick={() => {
            navigate(page.link);
          }}
          sx={{ my: 2, 
            color: 'inherit', 
            display: 'block',
            fontSize: { xs:"0.6rem", sm:"0.9rem",md: "1rem" },
            fontWeight: "bold"
          }}
        >
          {page.title}
        </Button>
      ))}
    </Box>
  );
}

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  marginLeft: 0,
  width: '100%',
}));

function Form() {
  const navigate = useNavigate();
  const [value, setValue] = React.useState("")

  function handelInputChange(e) {
    const userValue = e.target.value;

    // if(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/i.test(userValue)) {
    //   if(userValue.length > 8) {
    //     return
    //   }
    // }
    if(userValue.length > 16) {
      return
    }

    setValue(userValue);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    if(value === "") {
      return;
    }
    
    navigate('/kr/profile/'+value);
  };

  

  return (
    <Box textAlign="center" mt={{ xs: 1, sm: 3 ,md :5}}>
      <Search>
        <form onSubmit={handleFormSubmit}>
            <TextField 
            autoComplete="off"
            type="text" 
            variant="outlined"
            placeholder=''
            value={value} 
            onChange={handelInputChange}
            sx={{
              width:{xs: "80%",sm: "70%", md:"60%"},
              size:"small"
            }}
            >
            </TextField> 
            <Button 
            variant='outlined'
            type="submit"
            color="inherit"
            size='large'
            sx={{
              height: "100%",
              position:"absolute",
              right: {xs: "10%",sm: "15%", md:"20%"},
              display : { xs: "none",sm: "none" ,md: "inline"}
            }}
            >
              검색
            </Button>
            <IconButton
              size="large"
              onClick={handleFormSubmit}
              color="inherit"
              sx ={{
                position :"absolute",
                right: {xs: "10%",sm: "15%", md:"20%"},
                display : { xs: "inline",sm: "inline" ,md: "none"}
              }}
            >
              <SearchIcon />
            </IconButton>
        </form>
      </Search>
    </Box>
  );
}


const FreeRotationChampion = () => {
  const [data, setData] = useState([]);
  const ImgWrap = styled('div')(({ theme }) => ({
    display: 'flex',
    width: "10%",
    position: 'relative',
  }));
  const Image = styled('img')(({ theme }) => ({
    width: "100%",
  }))
  const ImgText = styled('span')(({ theme }) => ({
    color: theme.palette.common.white,
    position: 'absolute',
    fontSize : "10px",
    right: '5%',
    bottom: '5%',
    [theme.breakpoints.up('md')]: {
      fontSize: "15px",
    },
    [theme.breakpoints.down('sm')]: {
      display: "none"
    }
  }))
  
  useEffect(() => {
    fetch('/api/freeChamp')
      .then(response => response.text())
      .then(data => {
        setData(JSON.parse(data));
  }).catch(err => console.log(err));
  },[])

  let data1 = [];
  let data2 = [];

  for(let i=0; i<data.length; i++){
    if(i<8){
      data1.push(data[i])
    }else{
      data2.push(data[i]);
    }
  }

  const ListItem1  = () => {
    return data1.map((data, index) => {
      return (
        <Fragment key={index}>
          <ImgWrap>
            <Image src={data.champImg} alt={data.champName} />
            <ImgText>{data.champName}</ImgText>
          </ImgWrap>
        </Fragment>
      );
    })};
  const ListItem2  = () => {
    return data2.map((data, index) => {
      return (
        <Fragment key={index}>
          <ImgWrap>
            <Image src={data.champImg} alt={data.champName} />
            <ImgText>{data.champName}</ImgText>
          </ImgWrap>
        </Fragment>
      );
    })};  
 

  return (
    <Box textAlign="center" mt={{ xs: 1, sm: 2 ,md :3}}>
      <Typography
      sx={{
        fontSize : { xs:"1.0rem", sm:"1.5rem", md : "2rem"}
      }}
      >금주의 로테이션 챔피언
      </Typography>
      <Stack
      mt={{ xs: 1, sm: 2 ,md :3}}
      direction={"row"}
      spacing={{xs: 1 , sm:2, md:3}}
      >
        <ListItem1 />
      </Stack>
      <Stack
      mt={{ xs: 1, sm: 2 ,md :3}}
      direction={"row"}
      spacing={{xs: 1, sm:2, md:3}}
      >
        <ListItem2 />
      </Stack>
    </Box>
  );
};

const Home = () => {
  return (
    <Box>
      <Container fixed> 
          <FloatingBar/>
          <Form />
          <FreeRotationChampion />
      </Container>
    </Box>  
  );
}

export default Home;