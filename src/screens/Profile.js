import React , {useState, useEffect} from "react";
import { useParams } from 'react-router-dom';
import ResponsiveAppBar from "../components/ResponsiveAppbar";
import Container from '@mui/material/Container';
import { Box ,Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';


const MatchData = ({summonName}) => {
    const [data, setData] = useState();

    const url = '/api/profile?summonerName='+summonName;

    useEffect(() => {
        fetch(url)
          .then(response => response.text())
          .then(data => {
            setData(JSON.parse(data));
      }).catch(err => console.log(err));
    },[url])

    console.log(data)

    const StyledBox = styled(Box)(({ theme }) => ({
        position: 'relative',
        display: 'flex',
        borderRadius: theme.shape.borderRadius,
        width: '95%',
        height: '80px',
        padding: theme.spacing(3, 3, 3, 3),
        [theme.breakpoints.down('md')] : {
            width: '93%'
        },
        [theme.breakpoints.down('sm')] : {
            width: '85%'
        },
        [theme.breakpoints.down('xs')] : {
            width: '70%'
        },
    }));

    const GameMode = styled(Box)(({ theme }) => ({
        position: "absolute",
        display: 'inline',
        left: '3%',
    }))

    const SummonInfo = styled(Box)(( { theme }) => ({
        position: "absolute",
        display: 'inline',
        height: "100%",
        left: '18%',
    }))
    const KdaCs = styled(Box)(({theme}) => ({
        position: "absolute",
        display: 'inline',
        height: "100%",
        left: '40%',
    }))

    const BlueTeam = styled(Box)(({theme}) => ({
        position: "absolute",
        display: 'inline',
        height: "100%",
        top : '10%',
        left: '60%',
    }))

    const RedTeam = styled(Box)(({theme}) => ({
        position: "absolute",
        display: 'inline',
        height: "100%",
        top : '10%',
        left: '75%',
    }))

    const winColor = "#EAF3FD";
    const looseColor = "#FEEEED";
    const resetColor = "#EFEFEF";

    function srcset(image, size, rows = 1, cols = 1) {
        return {
            src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
            srcSet: `${image}?w=${size * cols}&h=${
            size * rows
            }&fit=crop&auto=format&dpr=2 2x`,
        };
    }

    if (data != null) {
        return data.info.map((data, index) => {
            
            const imgItems = [
                {img: data.target.championUrl,title : data.target.championName,rows:2,cols:2},
                {img: data.target.rune1Img,title : data.target.rune1},
                {img: data.target.rune2Img,title : data.target.rune2},
                {img: data.target.spell1Img,title: data.target.spell1},
                {img: data.target.spell2Img,title: data.target.spell2}
            ]

            if ( data.target.win === true ) {
                return (
                    <StyledBox key={index} mt={1} sx={{color:"black",backgroundColor:winColor}} id={data.matchId} onClick={() => showTimeline(data.matchId)}> 
                        <GameMode>
                            <Typography fontWeight={"bold"} fontSize={"13px"}>
                                {data.queue}
                            </Typography>
                            <Typography fontSize={"13px"}>
                                {data.target.gameEndTime}
                            </Typography>
                            <Typography fontSize={"13px"} mt={1} fontWeight={"bold"} color="#0288d1">
                                WIN
                            </Typography>
                            <Typography fontSize={"13px"}>
                                {data.target.gameDuration}
                            </Typography>
                        </GameMode>
                        <SummonInfo>
                            <ImageList variant="quilted" cols={4} rowHeight={38} sx={{margin:0,padding:0}}>
                                {imgItems.map((item) => (
                                    <ImageListItem key={item.img} cols={item.cols || 1} rows={item.cols || 1}>
                                        <img {...srcset(item.img, 1, item.rows, item.cols)} alt={item.title} loading="lazy"/>
                                    </ImageListItem>    
                                ))}
                            </ImageList>
                        </SummonInfo>
                        <KdaCs>
                            <Typography mt={1} fontSize={"13px"}>
                                {data.target.kill} / {data.target.death} / {data.target.assist} ({data.target.kda})
                            </Typography>
                            <Typography fontSize={"13px"}>
                                 {data.target.cs} ({data.target.cpm}) CS
                            </Typography>
                            <Typography fontSize={"13px"}>
                                 {data.target.kp} KP
                            </Typography>
                        </KdaCs>
                        { data.queue !== "무작위총력전" 
                            ?   <div>
                                <BlueTeam>
                                    <List sx={{ margin:0, padding:0, }} >
                                        <ListItem alignItems="flex-start" sx={{margin:0, padding:0 }}>
                                            <img alt={data.blue.TOP.summonerName} src={data.blue.TOP.championUrl} height="18px" sx={{display: 'flex'}}/>
                                            <ListItemText
                                            primary={
                                                <Typography sx={{display: 'flex', textDecoration:"none"}} fontSize="10px" component="a" href={"/kr/profile/"+data.blue.TOP.summonerName} variant="body2" color="black">
                                                    &nbsp;{data.blue.TOP.summonerName}
                                                </Typography>
                                            }>
                                            </ListItemText>
                                        </ListItem>
                                    </List>
                                    <List sx={{ margin:0, padding:0, }} >
                                        <ListItem alignItems="flex-start" sx={{margin:0, padding:0 }}>
                                            <img alt={data.blue.JUNGLE.summonerName} src={data.blue.JUNGLE.championUrl} height="18px" sx={{display: 'flex'}}/>
                                            <ListItemText
                                            primary={
                                                <Typography sx={{display: 'flex', textDecoration:"none"}} fontSize="10px" component="a" href={"/kr/profile/"+data.blue.JUNGLE.summonerName} variant="body2" color="black">
                                                    &nbsp;{data.blue.JUNGLE.summonerName}
                                                </Typography>
                                            }>
                                            </ListItemText>
                                        </ListItem>
                                    </List>
                                    <List sx={{ margin:0, padding:0, }} >
                                        <ListItem alignItems="flex-start" sx={{margin:0, padding:0 }}>
                                            <img alt={data.blue.MIDDLE.summonerName} src={data.blue.MIDDLE.championUrl} height="18px" sx={{display: 'flex'}}/>
                                            <ListItemText
                                            primary={
                                                <Typography sx={{display: 'flex', textDecoration:"none"}} fontSize="10px" component="a" href={"/kr/profile/"+data.blue.MIDDLE.summonerName} variant="body2" color="black">
                                                    &nbsp;{data.blue.MIDDLE.summonerName}
                                                </Typography>
                                            }>
                                            </ListItemText>
                                        </ListItem>
                                    </List>
                                    <List sx={{ margin:0, padding:0, }} >
                                        <ListItem alignItems="flex-start" sx={{margin:0, padding:0 }}>
                                            <img alt={data.blue.BOTTOM.summonerName} src={data.blue.BOTTOM.championUrl} height="18px" sx={{display: 'flex'}}/>
                                            <ListItemText
                                            primary={
                                                <Typography sx={{display: 'flex', textDecoration:"none"}} fontSize="10px" component="a" href={"/kr/profile/"+data.blue.BOTTOM.summonerName} variant="body2" color="black">
                                                    &nbsp;{data.blue.BOTTOM.summonerName}
                                                </Typography>
                                            }>
                                            </ListItemText>
                                        </ListItem>
                                    </List>
                                    <List sx={{ margin:0, padding:0, }} >
                                        <ListItem alignItems="flex-start" sx={{margin:0, padding:0 }}>
                                            <img alt={data.blue.UTILITY.summonerName} src={data.blue.UTILITY.championUrl} height="18px" sx={{display: 'flex'}}/>
                                            <ListItemText
                                            primary={
                                                <Typography sx={{display: 'flex', textDecoration:"none"}} fontSize="10px" component="a" href={"/kr/profile/"+data.blue.UTILITY.summonerName} variant="body2" color="black">
                                                    &nbsp;{data.blue.UTILITY.summonerName}
                                                </Typography>
                                            }>
                                            </ListItemText>
                                        </ListItem>
                                    </List>
                                </BlueTeam>
                                <RedTeam>
                                    <List sx={{ margin:0, padding:0, }} >
                                        <ListItem alignItems="flex-start" sx={{margin:0, padding:0 }}>
                                            <img alt={data.red.TOP.summonerName} src={data.red.TOP.championUrl} height="18px" sx={{display: 'flex'}}/>
                                            <ListItemText
                                            primary={
                                                <Typography sx={{display: 'flex', textDecoration:"none"}} fontSize="10px" component="a" href={"/kr/profile/"+data.red.TOP.summonerName} variant="body2" color="black">
                                                    &nbsp;{data.red.TOP.summonerName}
                                                </Typography>
                                            }>
                                            </ListItemText>
                                        </ListItem>
                                    </List>
                                    <List sx={{ margin:0, padding:0, }} >
                                        <ListItem alignItems="flex-start" sx={{margin:0, padding:0 }}>
                                            <img alt={data.red.JUNGLE.summonerName} src={data.red.JUNGLE.championUrl} height="18px" sx={{display: 'flex'}}/>
                                            <ListItemText
                                            primary={
                                                <Typography sx={{display: 'flex', textDecoration:"none"}} fontSize="10px" component="a" href={"/kr/profile/"+data.red.JUNGLE.summonerName} variant="body2" color="black">
                                                    &nbsp;{data.red.JUNGLE.summonerName}
                                                </Typography>
                                            }>
                                            </ListItemText>
                                        </ListItem>
                                    </List>
                                    <List sx={{ margin:0, padding:0, }} >
                                        <ListItem alignItems="flex-start" sx={{margin:0, padding:0 }}>
                                            <img alt={data.red.MIDDLE.summonerName} src={data.red.MIDDLE.championUrl} height="18px" sx={{display: 'flex'}}/>
                                            <ListItemText
                                            primary={
                                                <Typography sx={{display: 'flex', textDecoration:"none"}} fontSize="10px" component="a" href={"/kr/profile/"+data.red.MIDDLE.summonerName} variant="body2" color="black">
                                                    &nbsp;{data.red.MIDDLE.summonerName}
                                                </Typography>
                                            }>
                                            </ListItemText>
                                        </ListItem>
                                    </List>
                                    <List sx={{ margin:0, padding:0, }} >
                                        <ListItem alignItems="flex-start" sx={{margin:0, padding:0 }}>
                                            <img alt={data.red.BOTTOM.summonerName} src={data.red.BOTTOM.championUrl} height="18px" sx={{display: 'flex'}}/>
                                            <ListItemText
                                            primary={
                                                <Typography sx={{display: 'flex', textDecoration:"none"}} fontSize="10px" component="a" href={"/kr/profile/"+data.red.BOTTOM.summonerName} variant="body2" color="black">
                                                    &nbsp;{data.red.BOTTOM.summonerName}
                                                </Typography>
                                            }>
                                            </ListItemText>
                                        </ListItem>
                                    </List>
                                    <List sx={{ margin:0, padding:0, }} >
                                        <ListItem alignItems="flex-start" sx={{margin:0, padding:0 }}>
                                            <img alt={data.red.UTILITY.summonerName} src={data.red.UTILITY.championUrl} height="18px" sx={{display: 'flex'}}/>
                                            <ListItemText
                                            primary={
                                                <Typography sx={{display: 'flex', textDecoration:"none"}} fontSize="10px" component="a" href={"/kr/profile/"+data.red.UTILITY.summonerName} variant="body2" color="black">
                                                    &nbsp;{data.red.UTILITY.summonerName}
                                                </Typography>
                                            }>
                                            </ListItemText>
                                        </ListItem>
                                    </List>
                                </RedTeam>
                                </div>
                                
                            :   <div>
                                <BlueTeam>
                                    {data.blue.map((data, index) => (
                                        <List sx={{ margin:0, padding:0, }} key={index}>
                                            <ListItem alignItems="flex-start" sx={{margin:0, padding:0 }}>
                                                <img alt={data.summonerName} src={data.championUrl} height="18px" sx={{display: 'flex'}}/>
                                                <ListItemText
                                                primary={
                                                    <Typography sx={{display: 'flex', textDecoration:"none"}} fontSize="10px" component="a" href={"/kr/profile/"+data.summonerName} variant="body2" color="black">
                                                        &nbsp;{data.summonerName}
                                                    </Typography>
                                                }>
                                                </ListItemText>
                                            </ListItem>
                                        </List>
                                    ))}
                                </BlueTeam>
                                <RedTeam>
                                    {data.red.map((data, index) => (
                                        <List sx={{ margin:0, padding:0, }} key={index}>
                                            <ListItem alignItems="flex-start" sx={{margin:0, padding:0 }}>
                                                <img alt={data.summonerName} src={data.championUrl} height="18px" sx={{display: 'flex'}}/>
                                                <ListItemText
                                                primary={
                                                    <Typography sx={{display: 'flex', textDecoration:"none"}} fontSize="10px" component="a" href={"/kr/profile/"+data.summonerName} variant="body2" color="black">
                                                        &nbsp;{data.summonerName}
                                                    </Typography>
                                                }>
                                                </ListItemText>
                                            </ListItem>
                                        </List>
                                    ))}
                                </RedTeam>
                                </div>
                        }
                    </StyledBox>
                )
            } else if ( data.target.win === false ) {
                return (
                    <StyledBox key={index} mt={1} sx={{color:"black",backgroundColor:looseColor}} id={data.matchId}> 
                    </StyledBox>
                )
            } else {
                return (
                    <StyledBox key={index} mt={1}sx={{color:"black",backgroundColor:resetColor}} id={data.matchId}> 
                    </StyledBox>
                )
            }
        })
    }
}

function showTimeline(matchId) {
    console.log(matchId)
    const url = '/api/profile?summonerName='+matchId;

    fetch(url)
        .then(response => response.text())
        .then(data => {
            console.log(data);
    }).catch(err => console.log(err));

    document.getElementById(matchId).append()
}

const Tier = ({region, summonName}) => {
    const [rank , setRank] = useState("솔로랭크"); 

    function changeRank1() {
        setRank("솔로랭크")
        console.log(rank)
    }
    function changeRank2() {
        setRank("자유랭크")
        console.log(rank)
    }

    return (
        <Box>
            <h2>{region}</h2>
            <h2>{summonName}</h2>
            <span onClick={changeRank1}>솔로랭크</span>
            <span> | </span>
            <span onClick={changeRank2}>자유랭크</span>
            <br/>
            <div>
            {rank}
            </div>
        </Box>
    );
};

const Profile = () => {
    const {region} = useParams();
    const {summonName} = useParams();   

    return (
        <Box>
            <ResponsiveAppBar/>
            <Container>
                <Tier region={region} summonName={summonName}></Tier>
                <MatchData summonName={summonName}></MatchData>
            </Container>
        </Box>
        
    );
}

  
  export default Profile;