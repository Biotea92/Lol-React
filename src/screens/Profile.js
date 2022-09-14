import React , {useState, useEffect, forwardRef, useImperativeHandle} from "react";
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
import ReactDOM from 'react-dom/client';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import { common } from '@mui/material/colors';
import Button from '@mui/material/Button';
import { ResponsivePie } from '@nivo/pie';

const MatchCatecory = ({copyData, setData, SearchInit, data}) => {
    const [gameCatecory, setGameCatecory] = useState("모든게임");
    
    const StyledBox2 = styled(Box)(({theme}) => ({
        position: 'relative',
        display: 'flex',
        width: '95%',
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
    }))

    const StyledBox3 = styled(Box)(({theme}) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        display: 'flex',
        width: '95%',
        height: 150,
        color:"black",
        backgroundColor:"#f5f5f5",
        padding: theme.spacing(0, 3, 0, 3),
        [theme.breakpoints.down('md')] : {
            width: '93%'
        },
        [theme.breakpoints.down('sm')] : {
            width: '85%'
        },
        [theme.breakpoints.down('xs')] : {
            width: '70%'
        },
    }))

    function changeCategory(mode) {

        const catecoryData = {user : copyData.user,info : []};
    
        SearchInit();

        if (mode === "자유랭크" || mode === "솔로랭크"  || mode === "일반게임") {
            for( var i = 0 ; i < copyData.info.length ; i++ ){
                if (copyData.info[i].queue === mode) {
                    catecoryData.info.push(copyData.info[i])
                }
            }
            setData(catecoryData);
        } else {
            setData(copyData);
        }
    }

    const WinRateChart = () =>{
        
        if (gameCatecory === "모든게임") {
            const chartData = [
                {
                    "id" : "wins",
                    "label" : "wins",
                    "value" : data.user.allStats.wins,
                    "color" : "#0288d1"
                },
                {
                    "id" : "losses",
                    "label" : "losses",
                    "value" : data.user.allStats.losses,
                    "color" : "#ff1744"
                }
            ];
    
            return (
                <Box height="100%" width={250} sx={{backgroundColor:"white", position: 'relative',}} >
                    <ResponsivePie
                        data={chartData}
                        margin={{ top: 15, right: 0, bottom: 10, left: 0 }}
                        innerRadius={0.4}
                        activeOuterRadiusOffset={8}
                        colors={{ scheme: 'category10' }}
                        borderColor="black"
                        arcLinkLabelsSkipAngle={10}
                        arcLinkLabelsTextOffset={2}
                        arcLinkLabelsTextColor="#333333"
                        arcLinkLabelsOffset={6}
                        arcLinkLabelsStraightLength={0}
                        arcLinkLabelsThickness={0}
                        arcLinkLabelsColor="black"
                        arcLabel="value"
                        arcLabelsRadiusOffset={0.55}
                        arcLabelsSkipAngle={10}
                        arcLabelsTextColor="black"
                        isInteractive={true}
                        
                    />
                    <Typography
                    fontWeight={"bold"}
                    color={"#0288d1"}
                    position={"absolute"}
                    top="44%"
                    left="43%"
                    textAlign={"center"}>
                        {data.user.allStats.winRate}
                    </Typography>
                </Box>
            );
        }
        
        
    }

    const Kda = () => {
        
        if(gameCatecory === "모든게임"){

            return(
                <Box height="100%" width={200} sx={{backgroundColor:"yellow"}}>
                    <Typography mt={4} textAlign={"center"}>
                        {data.user.allStats.kills} / {data.user.allStats.deaths} / {data.user.allStats.assists}
                    </Typography>
                    <Typography mt={1} fontSize={25} fontWeight={"bold"} textAlign={"center"}>
                        {data.user.allStats.kda}
                    </Typography>
                </Box>
            );
        }
    }

    const MostChampion = () => {
        
        if(gameCatecory === "모든게임"){
            
            const mostChamp = data.user.allStats.mostChampion;

            for( const key in mostChamp ){
                console.log(key);
                console.log(mostChamp[key])
            }

            return(
                <Box height="100%" width={250} sx={{backgroundColor:"white"}}>
                    
                </Box>
            );
        }
    }

    return (
        <React.Fragment>
            <StyledBox2>
                <Stack direction={"row"}>
                    <Typography variant="h5" component="a" 
                    color={ gameCatecory === "모든게임" ? "" : "#9e9e9e"}
                    onClick={() => {changeCategory("모든게임"); setGameCatecory("모든게임")}} 
                    sx={{fontWeight:"bold", display:"inline-block" }}>
                        모든 게임
                    </Typography>
                    <Typography variant="h5" component="a" 
                    color={ gameCatecory === "솔로랭크" ? "" : "#9e9e9e"}
                    onClick={() => {changeCategory("솔로랭크"); setGameCatecory("솔로랭크")}} 
                    sx={{fontWeight:"bold", ml:3, display:"inline-block"}}>
                        솔로 랭크
                    </Typography>
                    <Typography variant="h5" component="a" 
                    color={ gameCatecory === "자유랭크" ? "" : "#9e9e9e"}
                    onClick={() => {changeCategory("자유랭크"); setGameCatecory("자유랭크")}} 
                    sx={{fontWeight:"bold", ml:3, display:"inline-block"}}>
                        자유 랭크
                    </Typography>
                    <Typography variant="h5" component="a" 
                    color={ gameCatecory === "일반게임" ? "" : "#9e9e9e"}
                    onClick={() => {changeCategory("일반게임"); setGameCatecory("일반게임")}} 
                    sx={{fontWeight:"bold", ml:3, display:"inline-block",}}>
                        일반
                    </Typography>
                </Stack>
            </StyledBox2>
            { data !== null
                ?   <StyledBox3>
                        <Stack direction={"row"}>
                            <WinRateChart />
                            <Kda />
                            <MostChampion />
                        </Stack>
                    </StyledBox3>
                : null
            }
        </React.Fragment>
    )
}

const MatchList = ({data, isShowTimeLine, setIsShowTimeLine}) => {
    
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
        const puuid = data.user.puuid;
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
                    <StyledBox key={index} mt={1} sx={{color:"black",backgroundColor:winColor}} id={data.matchId} 
                    onClick={(e) => {
                        ShowTimeline(data.matchId, isShowTimeLine[index], puuid , data.target.championId);
                        isShowTimeLine[index] = !isShowTimeLine[index]
                        setIsShowTimeLine(isShowTimeLine)
                    }}> 
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
                                                    &nbsp;{data.red.TOP.summonerName }
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
                    <StyledBox key={index} mt={1} sx={{color:"black",backgroundColor:looseColor}} id={data.matchId} 
                    onClick={(e) => {
                        ShowTimeline(data.matchId, isShowTimeLine[index], puuid , data.target.championId);
                        isShowTimeLine[index] = !isShowTimeLine[index]
                        setIsShowTimeLine(isShowTimeLine)
                    }}> 
                        <GameMode>
                            <Typography fontWeight={"bold"} fontSize={"13px"}>
                                {data.queue}
                            </Typography>
                            <Typography fontSize={"13px"}>
                                {data.target.gameEndTime}
                            </Typography>
                            <Typography fontSize={"13px"} mt={1} fontWeight={"bold"} color="#ff1744">
                                LOSS
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
                                                    &nbsp;{data.red.TOP.summonerName }
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
            } else {
                // {data.blue.MIDDLE !== undefined ? data.blue.MIDDLE.summonerName : data.blue.escape.summonerName}
                return (
                    <StyledBox key={index} mt={1} sx={{color:"black",backgroundColor:resetColor}} id={data.matchId} 
                        onClick={(e) => {
                            ShowTimeline(data.matchId, isShowTimeLine[index], puuid , data.target.championId);
                            isShowTimeLine[index] = !isShowTimeLine[index]
                            setIsShowTimeLine(isShowTimeLine)
                        }}>
                        <GameMode>
                            <Typography fontWeight={"bold"} fontSize={"13px"}>
                                {data.queue}
                            </Typography>
                            <Typography fontSize={"13px"}>
                                {data.target.gameEndTime}
                            </Typography>
                            <Typography fontSize={"13px"} mt={1} fontWeight={"bold"} color="#ff1744">
                                다시하기
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
                        <BlueTeam>
                            <List sx={{ margin:0, padding:0, }} >
                                <ListItem alignItems="flex-start" sx={{margin:0, padding:0 }}>
                                    <img alt={data.blue.TOP !== undefined ? data.blue.TOP.summonerName : data.blue.escape.summonerName} src={data.blue.TOP !== undefined ? data.blue.TOP.championUrl : data.blue.escape.championUrl} height="18px" sx={{display: 'flex'}}/>
                                    <ListItemText
                                    primary={
                                        <Typography sx={{display: 'flex', textDecoration:"none"}} fontSize="10px" component="a" href={"/kr/profile/"+(data.blue.TOP !== undefined ? data.blue.TOP.summonerName : data.blue.escape.summonerName)} variant="body2" color="black">
                                            &nbsp;{data.blue.TOP !== undefined ? data.blue.TOP.summonerName : data.blue.escape.summonerName}
                                        </Typography>
                                    }>
                                    </ListItemText>
                                </ListItem>
                            </List>
                            <List sx={{ margin:0, padding:0, }} >
                                <ListItem alignItems="flex-start" sx={{margin:0, padding:0 }}>
                                    <img alt={data.blue.JUNGLE !== undefined ? data.blue.JUNGLE.summonerName : data.blue.escape.summonerName} src={data.blue.JUNGLE !== undefined ? data.blue.JUNGLE.championUrl : data.blue.escape.championUrl} height="18px" sx={{display: 'flex'}}/>
                                    <ListItemText
                                    primary={
                                        <Typography sx={{display: 'flex', textDecoration:"none"}} fontSize="10px" component="a" href={"/kr/profile/"+(data.blue.JUNGLE !== undefined ? data.blue.JUNGLE.summonerName : data.blue.escape.summonerName)} variant="body2" color="black">
                                            &nbsp;{data.blue.JUNGLE !== undefined ? data.blue.JUNGLE.summonerName : data.blue.escape.summonerName}
                                        </Typography>
                                    }>
                                    </ListItemText>
                                </ListItem>
                            </List>
                            <List sx={{ margin:0, padding:0, }} >
                                <ListItem alignItems="flex-start" sx={{margin:0, padding:0 }}>
                                    <img alt={data.blue.MIDDLE !== undefined ? data.blue.MIDDLE.summonerName : data.blue.escape.summonerName} src={data.blue.MIDDLE !== undefined ? data.blue.MIDDLE.championUrl : data.blue.escape.championUrl} height="18px" sx={{display: 'flex'}}/>
                                    <ListItemText
                                    primary={
                                        <Typography sx={{display: 'flex', textDecoration:"none"}} fontSize="10px" component="a" href={"/kr/profile/"+(data.blue.MIDDLE !== undefined ? data.blue.MIDDLE.summonerName : data.blue.escape.summonerName)} variant="body2" color="black">
                                            &nbsp;{data.blue.MIDDLE !== undefined ? data.blue.MIDDLE.summonerName : data.blue.escape.summonerName}
                                        </Typography>
                                    }>
                                    </ListItemText>
                                </ListItem>
                            </List>
                            <List sx={{ margin:0, padding:0, }} >
                                <ListItem alignItems="flex-start" sx={{margin:0, padding:0 }}>
                                    <img alt={data.blue.BOTTOM !== undefined ? data.blue.BOTTOM.summonerName : data.blue.escape.summonerName} src={data.blue.BOTTOM !== undefined ? data.blue.BOTTOM.championUrl : data.blue.escape.championUrl} height="18px" sx={{display: 'flex'}}/>
                                    <ListItemText
                                    primary={
                                        <Typography sx={{display: 'flex', textDecoration:"none"}} fontSize="10px" component="a" href={"/kr/profile/"+(data.blue.BOTTOM !== undefined ? data.blue.BOTTOM.summonName : data.blue.escape.summonName)} variant="body2" color="black">
                                            &nbsp;{data.blue.BOTTOM !== undefined ? data.blue.BOTTOM.summonerName : data.blue.escape.summonerName}
                                        </Typography>
                                    }>
                                    </ListItemText>
                                </ListItem>
                            </List>
                            <List sx={{ margin:0, padding:0, }} >
                                <ListItem alignItems="flex-start" sx={{margin:0, padding:0 }}>
                                    <img alt={data.blue.UTILITY !== undefined ? data.blue.UTILITY.summonerName : data.blue.escape.summonerName} src={data.blue.UTILITY !== undefined ? data.blue.UTILITY.championUrl : data.blue.escape.championUrl} height="18px" sx={{display: 'flex'}}/>
                                    <ListItemText
                                    primary={
                                        <Typography sx={{display: 'flex', textDecoration:"none"}} fontSize="10px" component="a" href={"/kr/profile/"+(data.blue.UTILITY !== undefined ? data.blue.UTILITY.summonerName : data.blue.escape.summonerName)} variant="body2" color="black">
                                            &nbsp;{data.blue.UTILITY !== undefined ? data.blue.UTILITY.summonerName : data.blue.escape.summonerName}
                                        </Typography>
                                    }>
                                    </ListItemText>
                                </ListItem>
                            </List>
                        </BlueTeam>
                        <RedTeam>
                            <List sx={{ margin:0, padding:0, }} >
                                <ListItem alignItems="flex-start" sx={{margin:0, padding:0 }}>
                                    <img alt={data.red.TOP !== undefined ? data.red.TOP.summonerName : data.red.escape.summonerName} src={data.red.TOP !== undefined ? data.red.TOP.championUrl : data.red.escape.championUrl} height="18px" sx={{display: 'flex'}}/>
                                    <ListItemText
                                    primary={
                                        <Typography sx={{display: 'flex', textDecoration:"none"}} fontSize="10px" component="a" href={"/kr/profile/"+(data.red.TOP !== undefined ? data.red.TOP.summonerName : data.red.escape.summonerName)} variant="body2" color="black">
                                            &nbsp;{data.red.TOP !== undefined ? data.red.TOP.summonerName : data.red.escape.summonerName}
                                        </Typography>
                                    }>
                                    </ListItemText>
                                </ListItem>
                            </List>
                            <List sx={{ margin:0, padding:0, }} >
                                <ListItem alignItems="flex-start" sx={{margin:0, padding:0 }}>
                                    <img alt={data.red.JUNGLE !== undefined ? data.red.JUNGLE.summonerName : data.red.escape.summonerName} src={data.red.JUNGLE !== undefined ? data.red.JUNGLE.championUrl : data.red.escape.championUrl} height="18px" sx={{display: 'flex'}}/>
                                    <ListItemText
                                    primary={
                                        <Typography sx={{display: 'flex', textDecoration:"none"}} fontSize="10px" component="a" href={"/kr/profile/"+(data.red.JUNGLE !== undefined ? data.red.JUNGLE.summonerName : data.red.escape.summonerName)} variant="body2" color="black">
                                            &nbsp;{data.red.JUNGLE !== undefined ? data.red.JUNGLE.summonerName : data.red.escape.summonerName}
                                        </Typography>
                                    }>
                                    </ListItemText>
                                </ListItem>
                            </List>
                            <List sx={{ margin:0, padding:0, }} >
                                <ListItem alignItems="flex-start" sx={{margin:0, padding:0 }}>
                                    <img alt={data.red.MIDDLE !== undefined ? data.red.MIDDLE.summonerName : data.red.escape.summonerName} src={data.red.MIDDLE !== undefined ? data.red.MIDDLE.championUrl : data.red.escape.championUrl} height="18px" sx={{display: 'flex'}}/>
                                    <ListItemText
                                    primary={
                                        <Typography sx={{display: 'flex', textDecoration:"none"}} fontSize="10px" component="a" href={"/kr/profile/"+(data.red.MIDDLE !== undefined ? data.red.MIDDLE.summonerName : data.red.escape.summonerName)} variant="body2" color="black">
                                            &nbsp;{data.red.MIDDLE !== undefined ? data.red.MIDDLE.summonerName : data.red.escape.summonerName}
                                        </Typography>
                                    }>
                                    </ListItemText>
                                </ListItem>
                            </List>
                            <List sx={{ margin:0, padding:0, }} >
                                <ListItem alignItems="flex-start" sx={{margin:0, padding:0 }}>
                                    <img alt={data.red.BOTTOM !== undefined ? data.red.BOTTOM.summonerName : data.red.escape.summonerName} src={data.red.BOTTOM !== undefined ? data.red.BOTTOM.championUrl : data.red.escape.championUrl} height="18px" sx={{display: 'flex'}}/>
                                    <ListItemText
                                    primary={
                                        <Typography sx={{display: 'flex', textDecoration:"none"}} fontSize="10px" component="a" href={"/kr/profile/"+(data.red.BOTTOM !== undefined ? data.red.BOTTOM.summonerName : data.red.escape.summonerName)} variant="body2" color="black">
                                            &nbsp;{data.red.BOTTOM !== undefined ? data.red.BOTTOM.summonerName : data.red.escape.summonerName}
                                        </Typography>
                                    }>
                                    </ListItemText>
                                </ListItem>
                            </List>
                            <List sx={{ margin:0, padding:0, }} >
                                <ListItem alignItems="flex-start" sx={{margin:0, padding:0 }}>
                                    <img alt={data.red.UTILITY !== undefined ? data.red.UTILITY.summonerName : data.red.escape.summonerName} src={data.red.UTILITY !== undefined ? data.red.UTILITY.championUrl : data.red.escape.championUrl} height="18px" sx={{display: 'flex'}}/>
                                    <ListItemText
                                    primary={
                                        <Typography sx={{display: 'flex', textDecoration:"none"}} fontSize="10px" component="a" href={"/kr/profile/"+(data.red.UTILITY !== undefined ? data.red.UTILITY.summonerName : data.red.escape.summonerName)} variant="body2" color="black">
                                            &nbsp;{data.red.UTILITY !== undefined ? data.red.UTILITY.summonerName : data.red.escape.summonerName}
                                        </Typography>
                                    }>
                                    </ListItemText>
                                </ListItem>
                            </List>
                        </RedTeam>
                    </StyledBox>
                    
                )
            }
        })
    }
}

function ShowTimeline(matchId, isShowTimeLine, puuid, championId) {
    
    const newNode = document.createElement('div');
    newNode.className='timeLine';
    const selected = document.getElementById(matchId);

    const parent = selected.parentElement;
    const index = Array.from(parent.children).indexOf(selected)

    if (!isShowTimeLine) {
        parent.children[index].insertAdjacentElement('afterend', newNode)

        const url = '/api/timeLine?matchId='+matchId+'&puuid='+puuid+'&championId='+championId;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data);
        }).catch(err => console.log(err));


        const root = ReactDOM.createRoot(parent.children[index+1]);
        root.render(
            <Box>{matchId}</Box>
        );
    }else {
        parent.children[index+1].remove()
    }
}

const SummonerInfo = ({data, setData, SearchInit}) => {
    
    
    const [rank , setRank] = useState("솔로랭크"); 

    const StyledBox = styled(Box)(({ theme }) => ({
        width: "50%",
        position: 'relative',
        display: 'flex',
        padding: theme.spacing(0, 0, 0, 0),
    }));

    const User = () => {
        if(data != null) {
            return ( 
                <StyledBox>
                    <Typography variant="h3" component="span" sx={{fontWeight:"bold", mt:1.5, mr:2}}>
                        {data.user.summonerName}
                    </Typography>
                    <img src={data.user.profileIconUrl} alt={data.user.profileIcon} width="80px" height="80px" style={{borderRadius:"12px"}}></img>
                </StyledBox>
            );
        }
    }

    const UserHit = () => {
        if(data != null) {
            return (
                <Box>
                    <VisibilityIcon sx={{ fontSize:"0.9rem"}}></VisibilityIcon>
                    <Typography variant="h6" component="span" sx={{ml:1, fontSize:"0.9rem"}}>
                        {data.user.hit}
                    </Typography>
                </Box>
            );
        }
    }

    const Tier = () => {
        if(data != null) {
            return (
                <StyledBox>
                    <Box>
                        <Stack direction="row">
                            <img src={rank === "솔로랭크" ? data.user.soloRank.tierImg : data.user.freeRank.tierImg } 
                                alt={data.user.profileIcon} 
                                width="80px" 
                                height="80px">                   
                            </img>
                            <Stack direction="column">
                                <Typography variant="h5" component="span" sx={{fontWeight:"bold", ml:3, display:"inline-block", right:"0"}}>
                                    {rank === "솔로랭크" ? data.user.soloRank.tier+" "+ (data.user.soloRank.rank || "") : data.user.freeRank.tier+" "+ (data.user.freeRank.rank || "")}
                                </Typography>
                                <Typography variant="h6" component="span" sx={{ml:3, mt: 1,fontWeight:"bold",fontSize:"11px",display:"inline-block"}}>
                                    {rank === "솔로랭크" 
                                    ? data.user.soloRank.leaguePoints !== undefined ? data.user.soloRank.leaguePoints+" LP" : null
                                    : data.user.freeRank.leaguePoints !== undefined ? data.user.freeRank.leaguePoints+" LP" : null} 
                                </Typography>
                                <Typography variant="h6" component="span" sx={{ml:3,fontWeight:"bold",fontSize:"11px",display:"inline-block"}}>
                                    {rank === "솔로랭크" 
                                    ? data.user.soloRank.leaguePoints !== undefined ? "승률 "+data.user.soloRank.winRate+"("+data.user.soloRank.wins+ "승" + data.user.soloRank.losses+ "패)" : null
                                    : data.user.freeRank.leaguePoints !== undefined ? "승률 "+data.user.freeRank.winRate+"("+data.user.freeRank.wins+ "승" + data.user.freeRank.losses+ "패)" : null} 
                                </Typography>
                            </Stack>
                        </Stack>
                    </Box>
                </StyledBox>
            )
        }
    }

    function changeRank1() {
        setRank("솔로랭크")
    }
    function changeRank2() {
        setRank("자유랭크")
    }
    
    const RankChange = () => {
        if(data != null) {
            return(
                <StyledBox sx={{ml:0}}>
                    <Typography variant="h6" component="span" onClick={() => changeRank1()}
                    color={ rank === "솔로랭크" ? "" : "#9e9e9e"}
                    sx={{  fontSize:"13px" , fontWeight: "bold"}}>
                        솔로랭크
                    </Typography>
                    <Typography variant="h6" component="span" 
                    sx={{ ml:1, fontSize:"13px" ,}}>
                        |
                    </Typography>
                    <Typography variant="h6" component="span" onClick={() => changeRank2()}
                    color={ rank === "솔로랭크" ? "#9e9e9e" : ""}
                    sx={{ ml:1, fontSize:"13px" , fontWeight: "bold" }}>
                        자유랭크
                    </Typography>
                </StyledBox>
            )
        }
    }

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const buttonSx = {
        ...(success && {
            bgcolor: common[500],
            '&:hover': {
                bgcolor: common[700],
            },
        }),
    };

    const handleButtonClick = async() => {
        if (!loading) {
            setSuccess(false);
            setLoading(true);
            
            const url = '/api/reset?summonerName='+data.user.summonerName;

            SearchInit();

            await fetch(url)
                .then(response => response.json())
                .then(data => {
                setData(data);
            }).catch(err => console.log(err));
            
            setSuccess(true);
            setLoading(false);
        }
    };

    const ResetButton = () =>{
        if(data != null) {
            return(
                <StyledBox>
                    <Box sx={{ m: 1, position: 'relative' }}>
                        <Button
                            variant="contained"
                            sx={buttonSx}
                            disabled={loading}
                            onClick={handleButtonClick}
                        >
                            {data.user.updateTime}
                        </Button>
                        {loading && (
                            <CircularProgress
                                size={24}
                                sx={{
                                color: common[500],
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                marginTop: '-12px',
                                marginLeft: '-12px',
                                }}
                            />
                        )}
                    </Box>
                </StyledBox>
            )
        }
    }

    return (
        <Box sx={{mt:3}}>
            <Stack direction={"row"}>
                <UserHit/>
            </Stack>
            <Stack direction={"row"}>
                <User/>
                <Tier sx={{position:"absolute"}}/>
            </Stack>
            <Stack direction={"row"}>
                <ResetButton />
                <RankChange />
            </Stack>
        </Box>
    );
};

const Profile = forwardRef((props, ref) => {
    const {summonName} = useParams();
    const [data, setData] = useState();
    const [copyData, setCopyData] = useState();

    const isShowTimeLineList = [,,,,,,,,,,,,,,,,,,,,];
    isShowTimeLineList.fill(false,0,20);
    const [isShowTimeLine, setIsShowTimeLine] = useState(isShowTimeLineList);


    const url = '/api/profile?summonerName='+summonName;

    useEffect(() => {
        fetch(url)
          .then(response => response.json())
          .then(data => {
            setData(data);
            setCopyData({...data});
      }).catch(err => console.log(err));
    },[url])

    console.log(data);
    
    function SearchInit() {
        const isShowTimeLineList2 = [,,,,,,,,,,,,,,,,,,,,];
        isShowTimeLineList2.fill(false,0,20);
        setIsShowTimeLine(isShowTimeLineList2);
        
        let timeLineList = document.querySelectorAll('.timeLine');

        for(let i=0; i< timeLineList.length; i++) {
            timeLineList[i].remove('timeLine')
        }
    }

    useImperativeHandle(ref, () =>  ({
        SearchInit,
    }));

    if(data != null) {
        return (
            <Box>
                <ResponsiveAppBar SearchInit={SearchInit}/>
                {data.user !== null
                ?   <Container>
                        <SummonerInfo data={data} setData={setData} summonName={summonName} SearchInit={SearchInit}/>
                        <MatchCatecory copyData={copyData} setData={setData} SearchInit={SearchInit} data={data}/>
                        <MatchList data={data} isShowTimeLine={isShowTimeLine} setIsShowTimeLine={setIsShowTimeLine}/>
                    </Container>
                :   <Container>
                        <Box>
                            <h1>존재하지 않는 소환사입니다.</h1>
                        </Box>
                    </Container>
                }
            </Box>
        );
    }
});

  
export default Profile;