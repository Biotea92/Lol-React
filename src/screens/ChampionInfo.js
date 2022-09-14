import ResponsiveAppBar from "../components/ResponsiveAppbar";
import { Box , Typography } from "@mui/material";
import Container from '@mui/material/Container';
import { useState , useEffect, Fragment} from 'react';
import { styled , alpha} from '@mui/material/styles';
import Profile from "./Profile"; 

const AllChampion = () => {
    const [data, setData] = useState([{}]);

    const ImgWrap = styled('div')(({theme}) => ({
        display: 'inline',
        width: "10%",
        position: 'relative',
    }));

    const Image = styled('img')(({ theme }) => ({
        margin: "3px",
    }))

    const ImgText = styled('span')(({ theme }) => ({
        color: theme.palette.common.white,
        position: 'absolute',
        fontSize : "15px",
        right: '5%',
        bottom: '50%',
    }))

    useEffect(() => {
        fetch('/api/allChamp')
          .then(response => response.text())
          .then(data => {
            setData(JSON.parse(data));
      }).catch(err => console.log(err));
    },[])

    data.sort((a,b) => {
        a = a.champKrName;
        b = b.champKrName;
        if ( a < b ) return -1;
        if ( a > b ) return 1;
        return 0;
    })

    console.log(data);

    const ListItem = () => {
    return data.map((data, index) => {
        return (
            <Fragment key={index}>
                <ImgWrap>
                    <Image src={data.champImg} alt={data.champKrName} />
                    <ImgText>{data.champKrName}</ImgText>
                </ImgWrap>
            </Fragment>
        );
    })};

    return (
        <Box>
            <ListItem />
        </Box>
    );
}

const StatisticsPage = () => {
    return (
        <Box>
            <ResponsiveAppBar ></ResponsiveAppBar>
            <Container>
                <Typography
                variant="h3"
                component="h3"
                sx={{textAlign:"center", mt :3, mb:3}}>
                    챔피언 정보
                </Typography>
                <AllChampion />
            </Container>
        </Box>
    );
}

export default StatisticsPage;