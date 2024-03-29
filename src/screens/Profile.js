import React , {useState, useEffect, forwardRef, useImperativeHandle} from "react";
import { useParams , useNavigate } from 'react-router-dom';
import ResponsiveAppBar from "../components/ResponsiveAppbar";
import Container from '@mui/material/Container';
import { Box ,IconButton,Typography } from '@mui/material';
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
import { ResponsiveBar } from '@nivo/bar';
import Avatar from '@mui/material/Avatar';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Badge from '@mui/material/Badge';
import Tooltip from '@mui/material/Tooltip';
import { ResponsiveBullet } from '@nivo/bullet';
import ButtonGroup from '@mui/material/ButtonGroup';
import { ResponsiveLine } from '@nivo/line';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const winColor = "#EAF3FD";
const looseColor = "#FEEEED";
const resetColor = "#EFEFEF";

const MatchCatecory = ({copyData, setData, SearchInit, data, gameCatecory, setGameCatecory}) => {
    
    
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
                <Box height="100%" width={250} sx={{backgroundColor:"", position: 'relative',}} >
                    <ResponsivePie
                        data={chartData}
                        margin={{ top: 15, right: 0, bottom: 10, left: 0 }}
                        innerRadius={0.7}
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
                        arcLabelsRadiusOffset={0.50}
                        arcLabelsSkipAngle={10}
                        arcLabelsTextColor="black"
                        isInteractive={true}
                    />
                    <Typography
                    fontSize={23}
                    fontWeight={"bold"}
                    color={"#0288d1"}
                    position={"absolute"}
                    top="40%"
                    left="41%"
                    textAlign={"center"}>
                        {data.user.allStats.winRate}
                    </Typography>
                </Box>
            );
        } else if (gameCatecory === "솔로랭크") {
            
            const chartData = [
                {
                    "id" : "wins",
                    "label" : "wins",
                    "value" : data.user.soloStats.wins,
                    "color" : "#0288d1"
                },
                {
                    "id" : "losses",
                    "label" : "losses",
                    "value" : data.user.soloStats.losses,
                    "color" : "#ff1744"
                }
            ];
    
            return (
                <Box height="100%" width={250} sx={{backgroundColor:"", position: 'relative',}} >
                    <ResponsivePie
                        data={chartData}
                        margin={{ top: 15, right: 0, bottom: 10, left: 0 }}
                        innerRadius={0.7}
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
                        arcLabelsRadiusOffset={0.50}
                        arcLabelsSkipAngle={10}
                        arcLabelsTextColor="black"
                        isInteractive={true}
                    />
                    <Typography
                    fontSize={23}
                    fontWeight={"bold"}
                    color={"#0288d1"}
                    position={"absolute"}
                    top="40%"
                    left="41%"
                    textAlign={"center"}>
                        {data.user.soloStats.winRate}
                    </Typography>
                </Box>
            );
        } else if (gameCatecory === "자유랭크") {
            const chartData = [
                {
                    "id" : "wins",
                    "label" : "wins",
                    "value" : data.user.freeStats.wins,
                    "color" : "#0288d1"
                },
                {
                    "id" : "losses",
                    "label" : "losses",
                    "value" : data.user.freeStats.losses,
                    "color" : "#ff1744"
                }
            ];
    
            return (
                <Box height="100%" width={250} sx={{backgroundColor:"", position: 'relative',}} >
                    <ResponsivePie
                        data={chartData}
                        margin={{ top: 15, right: 0, bottom: 10, left: 0 }}
                        innerRadius={0.7}
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
                        arcLabelsRadiusOffset={0.50}
                        arcLabelsSkipAngle={10}
                        arcLabelsTextColor="black"
                        isInteractive={true}
                    />
                    <Typography
                    fontSize={23}
                    fontWeight={"bold"}
                    color={"#0288d1"}
                    position={"absolute"}
                    top="40%"
                    left="41%"
                    textAlign={"center"}>
                        {data.user.freeStats.winRate}
                    </Typography>
                </Box>
            );
        } else if (gameCatecory === "일반게임") {
            const chartData = [
                {
                    "id" : "wins",
                    "label" : "wins",
                    "value" : data.user.normalStats.wins,
                    "color" : "#0288d1"
                },
                {
                    "id" : "losses",
                    "label" : "losses",
                    "value" : data.user.normalStats.losses,
                    "color" : "#ff1744"
                }
            ];
    
            return (
                <Box height="100%" width={250} sx={{backgroundColor:"", position: 'relative',}} >
                    <ResponsivePie
                        data={chartData}
                        margin={{ top: 15, right: 0, bottom: 10, left: 0 }}
                        innerRadius={0.7}
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
                        arcLabelsRadiusOffset={0.50}
                        arcLabelsSkipAngle={10}
                        arcLabelsTextColor="black"
                        isInteractive={true}
                    />
                    <Typography
                    fontSize={23}
                    fontWeight={"bold"}
                    color={"#0288d1"}
                    position={"absolute"}
                    top="40%"
                    left="41%"
                    textAlign={"center"}>
                        {data.user.normalStats.winRate}
                    </Typography>
                </Box>
            );
        }
    }

    const Kda = () => {
        if(gameCatecory === "모든게임"){

            return(
                <Box height="100%" width={200} sx={{backgroundColor:""}}>
                    <Typography mt={4} textAlign={"center"}>
                        {data.user.allStats.kills} / {data.user.allStats.deaths} / {data.user.allStats.assists}
                    </Typography>
                    <Typography mt={1} fontSize={25} fontWeight={"bold"} textAlign={"center"}>
                        {data.user.allStats.KDA}
                    </Typography>
                </Box>
            );
        } else if (gameCatecory === "솔로랭크") {
            return(
                <Box height="100%" width={200} sx={{backgroundColor:""}}>
                    <Typography mt={4} textAlign={"center"}>
                        {data.user.soloStats.kills} / {data.user.soloStats.deaths} / {data.user.soloStats.assists}
                    </Typography>
                    <Typography mt={1} fontSize={25} fontWeight={"bold"} textAlign={"center"}>
                        {data.user.soloStats.KDA}
                    </Typography>
                </Box>
            );
        } else if (gameCatecory === "자유랭크") {
            return(
                <Box height="100%" width={200} sx={{backgroundColor:""}}>
                    <Typography mt={4} textAlign={"center"}>
                        {data.user.freeStats.kills} / {data.user.freeStats.deaths} / {data.user.freeStats.assists}
                    </Typography>
                    <Typography mt={1} fontSize={25} fontWeight={"bold"} textAlign={"center"}>
                        {data.user.freeStats.KDA}
                    </Typography>
                </Box>
            );
        } else if (gameCatecory === "일반게임") {
            return(
                <Box height="100%" width={200} sx={{backgroundColor:""}}>
                    <Typography mt={4} textAlign={"center"}>
                        {data.user.normalStats.kills} / {data.user.normalStats.deaths} / {data.user.normalStats.assists}
                    </Typography>
                    <Typography mt={1} fontSize={25} fontWeight={"bold"} textAlign={"center"}>
                        {data.user.normalStats.KDA}
                    </Typography>
                </Box>
            );
        }
    }

    const MostChampion = () => {
        
        if(gameCatecory === "모든게임"){
            
            const mostChamp = data.user.allStats.mostChampion;

            return(
                <Box height="100%" width={260} sx={{backgroundColor:""}}>
                    <Typography textAlign="center" fontSize={14} sx={{mt:2}} >플레이 한 챔피언 (최근 {data.user.allStats.wins+data.user.allStats.losses}게임)</Typography>
                    <Stack direction="column">
                        {mostChamp.most1 !== undefined
                         ?  <Box mt={0.5} ml={1}>
                            <Stack direction={"row"}>
                                <Avatar alt={mostChamp.most1.ChampionName} src={mostChamp.most1.ChampionImgUrl} sx={{ width: 30, height: 30 }}/>
                                <Typography ml={1} mt={0.5}>{mostChamp.most1.WinRate} ({mostChamp.most1.wins}승 {mostChamp.most1.losses}패) {mostChamp.most1.KDA} 평점</Typography>
                            </Stack>  
                            </Box>
                         : null   
                        }
                        {mostChamp.most2 !== undefined
                         ?  <Box mt={0.5} ml={1}>
                            <Stack direction={"row"}>
                                <Avatar alt={mostChamp.most2.ChampionName} src={mostChamp.most2.ChampionImgUrl} sx={{ width: 30, height: 30 }}/>
                                <Typography ml={1} mt={0.5}>{mostChamp.most2.WinRate} ({mostChamp.most2.wins}승 {mostChamp.most2.losses}패) {mostChamp.most2.KDA} 평점</Typography>
                            </Stack>  
                            </Box>
                         : null 
                        }
                        {mostChamp.most3 !== undefined
                         ?  <Box mt={0.5} ml={1}>
                            <Stack direction={"row"}>
                                <Avatar alt={mostChamp.most3.ChampionName} src={mostChamp.most3.ChampionImgUrl} sx={{ width: 30, height: 30 }}/>
                                <Typography ml={1} mt={0.5}>{mostChamp.most3.WinRate} ({mostChamp.most3.wins}승 {mostChamp.most3.losses}패) {mostChamp.most3.KDA} 평점</Typography>
                            </Stack>    
                            </Box>
                         : null 
                        }
                    </Stack>
                </Box>
            );
        } else if (gameCatecory === "솔로랭크") {
            const mostChamp = data.user.soloStats.mostChampion;

            return(
                <Box height="100%" width={260} sx={{backgroundColor:""}}>
                    <Typography textAlign="center" fontSize={14} sx={{mt:2}} >플레이 한 챔피언 (최근 {data.user.soloStats.wins+data.user.soloStats.losses}게임)</Typography>
                    <Stack direction="column">
                        {mostChamp.most1 !== undefined
                         ?  <Box mt={0.5} ml={1}>
                            <Stack direction={"row"}>
                                <Avatar alt={mostChamp.most1.ChampionName} src={mostChamp.most1.ChampionImgUrl} sx={{ width: 30, height: 30 }}/>
                                <Typography ml={1} mt={0.5}>{mostChamp.most1.WinRate} ({mostChamp.most1.wins}승 {mostChamp.most1.losses}패) {mostChamp.most1.KDA} 평점</Typography>
                            </Stack>  
                            </Box>
                         : null   
                        }
                        {mostChamp.most2 !== undefined
                         ?  <Box mt={0.5} ml={1}>
                            <Stack direction={"row"}>
                                <Avatar alt={mostChamp.most2.ChampionName} src={mostChamp.most2.ChampionImgUrl} sx={{ width: 30, height: 30 }}/>
                                <Typography ml={1} mt={0.5}>{mostChamp.most2.WinRate} ({mostChamp.most2.wins}승 {mostChamp.most2.losses}패) {mostChamp.most2.KDA} 평점</Typography>
                            </Stack>  
                            </Box>
                         : null 
                        }
                        {mostChamp.most3 !== undefined
                         ?  <Box mt={0.5} ml={1}>
                            <Stack direction={"row"}>
                                <Avatar alt={mostChamp.most3.ChampionName} src={mostChamp.most3.ChampionImgUrl} sx={{ width: 30, height: 30 }}/>
                                <Typography ml={1} mt={0.5}>{mostChamp.most3.WinRate} ({mostChamp.most3.wins}승 {mostChamp.most3.losses}패) {mostChamp.most3.KDA} 평점</Typography>
                            </Stack>    
                            </Box>
                         : null 
                        }
                    </Stack>
                </Box>
            );
        } else if (gameCatecory === "자유랭크") {
            const mostChamp = data.user.freeStats.mostChampion;

            return(
                <Box height="100%" width={260} sx={{backgroundColor:""}}>
                    <Typography textAlign="center" fontSize={14} sx={{mt:2}} >플레이 한 챔피언 (최근 {data.user.freeStats.wins+data.user.freeStats.losses}게임)</Typography>
                    <Stack direction="column">
                        {mostChamp.most1 !== undefined
                         ?  <Box mt={0.5} ml={1}>
                            <Stack direction={"row"}>
                                <Avatar alt={mostChamp.most1.ChampionName} src={mostChamp.most1.ChampionImgUrl} sx={{ width: 30, height: 30 }}/>
                                <Typography ml={1} mt={0.5}>{mostChamp.most1.WinRate} ({mostChamp.most1.wins}승 {mostChamp.most1.losses}패) {mostChamp.most1.KDA} 평점</Typography>
                            </Stack>  
                            </Box>
                         : null   
                        }
                        {mostChamp.most2 !== undefined
                         ?  <Box mt={0.5} ml={1}>
                            <Stack direction={"row"}>
                                <Avatar alt={mostChamp.most2.ChampionName} src={mostChamp.most2.ChampionImgUrl} sx={{ width: 30, height: 30 }}/>
                                <Typography ml={1} mt={0.5}>{mostChamp.most2.WinRate} ({mostChamp.most2.wins}승 {mostChamp.most2.losses}패) {mostChamp.most2.KDA} 평점</Typography>
                            </Stack>  
                            </Box>
                         : null 
                        }
                        {mostChamp.most3 !== undefined
                         ?  <Box mt={0.5} ml={1}>
                            <Stack direction={"row"}>
                                <Avatar alt={mostChamp.most3.ChampionName} src={mostChamp.most3.ChampionImgUrl} sx={{ width: 30, height: 30 }}/>
                                <Typography ml={1} mt={0.5}>{mostChamp.most3.WinRate} ({mostChamp.most3.wins}승 {mostChamp.most3.losses}패) {mostChamp.most3.KDA} 평점</Typography>
                            </Stack>    
                            </Box>
                         : null 
                        }
                    </Stack>
                </Box>
            );
        } else if (gameCatecory === "일반게임") {
            const mostChamp = data.user.normalStats.mostChampion;

            return(
                <Box height="100%" width={260} sx={{backgroundColor:""}}>
                    <Typography textAlign="center" fontSize={14} sx={{mt:2}} >플레이 한 챔피언 (최근 {data.user.normalStats.wins+data.user.normalStats.losses}게임)</Typography>
                    <Stack direction="column">
                        {mostChamp.most1 !== undefined
                         ?  <Box mt={0.5} ml={1}>
                            <Stack direction={"row"}>
                                <Avatar alt={mostChamp.most1.ChampionName} src={mostChamp.most1.ChampionImgUrl} sx={{ width: 30, height: 30 }}/>
                                <Typography ml={1} mt={0.5}>{mostChamp.most1.WinRate} ({mostChamp.most1.wins}승 {mostChamp.most1.losses}패) {mostChamp.most1.KDA} 평점</Typography>
                            </Stack>  
                            </Box>
                         : null   
                        }
                        {mostChamp.most2 !== undefined
                         ?  <Box mt={0.5} ml={1}>
                            <Stack direction={"row"}>
                                <Avatar alt={mostChamp.most2.ChampionName} src={mostChamp.most2.ChampionImgUrl} sx={{ width: 30, height: 30 }}/>
                                <Typography ml={1} mt={0.5}>{mostChamp.most2.WinRate} ({mostChamp.most2.wins}승 {mostChamp.most2.losses}패) {mostChamp.most2.KDA} 평점</Typography>
                            </Stack>  
                            </Box>
                         : null 
                        }
                        {mostChamp.most3 !== undefined
                         ?  <Box mt={0.5} ml={1}>
                            <Stack direction={"row"}>
                                <Avatar alt={mostChamp.most3.ChampionName} src={mostChamp.most3.ChampionImgUrl} sx={{ width: 30, height: 30 }}/>
                                <Typography ml={1} mt={0.5}>{mostChamp.most3.WinRate} ({mostChamp.most3.wins}승 {mostChamp.most3.losses}패) {mostChamp.most3.KDA} 평점</Typography>
                            </Stack>    
                            </Box>
                         : null 
                        }
                    </Stack>
                </Box>
            );
        }
    }

    const MostLine = () => {

        if(gameCatecory === "모든게임") {

            const mostLineData = data.user.allStats.mostLine;

            const chartData = [
                {
                    "country" : "Position-Count",
                    "TOP" : mostLineData.TOP,
                    "TOPColor" : "hsl(0,70%,50%)",
                    "MIDDLE" : mostLineData.MIDDLE,
                    "MIDDLEColor" : "hsl(0,70%,50%)",
                    "JUNGLE" : mostLineData.JUNGLE,
                    "JUNGLEColor" : "hsl(0,70%,50%)",
                    "BOTTOM" : mostLineData.BOTTOM,
                    "BOTTOMColor" : "hsl(0,70%,50%)",
                    "UTILITY" : mostLineData.UTILITY,
                    "UTILITYColor" : "hsl(0,70%,50%)",
                }
            ]

            return (
                <Box height="100%" width={300} sx={{backgroundColor:"", position:"absolute",right:30 }}>
                    <ResponsiveBar
                        data={chartData}
                        keys={[
                            'TOP',
                            'JUNGLE',
                            'MIDDLE',
                            'BOTTOM',
                            'UTILITY',
                        ]}
                        indexBy="country"
                        margin={{ top: 10, right: 0, bottom: 10, left: 80 }}
                        padding={0}
                        innerPadding={4}
                        groupMode="grouped"
                        valueScale={{ type: 'linear' }}
                        indexScale={{ type: 'band', round: true }}
                        colors={{ scheme: 'nivo' }}
                        borderRadius={5}
                        borderColor="black"
                        axisTop={null}
                        axisRight={null}
                        axisBottom={null}
                        axisLeft={null}
                        enableGridY={false}
                        labelSkipWidth={15}
                        labelSkipHeight={15}
                        labelTextColor="black"
                        legends={[
                            {
                                dataFrom: 'keys',
                                anchor: 'top-left',
                                direction: 'column',
                                justify: false,
                                translateX: -80,
                                translateY: 4,
                                itemsSpacing: 2,
                                itemWidth: 100,
                                itemHeight: 20,
                                itemDirection: 'left-to-right',
                                itemOpacity: 0.85,
                                symbolSize: 20,
                                effects: [
                                    {
                                        on: 'hover',
                                        style: {
                                            itemOpacity: 1
                                        }
                                    }
                                ]
                            }
                        ]}
                        motionConfig="molasses"
                        role="application"
                        ariaLabel="포지션"
                        barAriaLabel={function(e){return e.id+": "+e.formattedValue+" in country: "+e.indexValue}}
                    />
                </Box>
            );
        } else if (gameCatecory === "솔로랭크") {
            const mostLineData = data.user.soloStats.mostLine;

            const chartData = [
                {
                    "country" : "Position-Count",
                    "TOP" : mostLineData.TOP,
                    "TOPColor" : "hsl(0,70%,50%)",
                    "MIDDLE" : mostLineData.MIDDLE,
                    "MIDDLEColor" : "hsl(0,70%,50%)",
                    "JUNGLE" : mostLineData.JUNGLE,
                    "JUNGLEColor" : "hsl(0,70%,50%)",
                    "BOTTOM" : mostLineData.BOTTOM,
                    "BOTTOMColor" : "hsl(0,70%,50%)",
                    "UTILITY" : mostLineData.UTILITY,
                    "UTILITYColor" : "hsl(0,70%,50%)",
                }
            ]

            return (
                <Box height="100%" width={300} sx={{backgroundColor:"", position:"absolute",right:30 }}>
                    <ResponsiveBar
                        data={chartData}
                        keys={[
                            'TOP',
                            'JUNGLE',
                            'MIDDLE',
                            'BOTTOM',
                            'UTILITY',
                        ]}
                        indexBy="country"
                        margin={{ top: 10, right: 0, bottom: 10, left: 80 }}
                        padding={0}
                        innerPadding={4}
                        groupMode="grouped"
                        valueScale={{ type: 'linear' }}
                        indexScale={{ type: 'band', round: true }}
                        colors={{ scheme: 'nivo' }}
                        borderRadius={5}
                        borderColor="black"
                        axisTop={null}
                        axisRight={null}
                        axisBottom={null}
                        axisLeft={null}
                        enableGridY={false}
                        labelSkipWidth={15}
                        labelSkipHeight={15}
                        labelTextColor="black"
                        legends={[
                            {
                                dataFrom: 'keys',
                                anchor: 'top-left',
                                direction: 'column',
                                justify: false,
                                translateX: -80,
                                translateY: 4,
                                itemsSpacing: 2,
                                itemWidth: 100,
                                itemHeight: 20,
                                itemDirection: 'left-to-right',
                                itemOpacity: 0.85,
                                symbolSize: 20,
                                effects: [
                                    {
                                        on: 'hover',
                                        style: {
                                            itemOpacity: 1
                                        }
                                    }
                                ]
                            }
                        ]}
                        motionConfig="molasses"
                        role="application"
                        ariaLabel="포지션"
                        barAriaLabel={function(e){return e.id+": "+e.formattedValue+" in country: "+e.indexValue}}
                    />
                </Box>
            );
        } else if (gameCatecory === "자유랭크") {
            const mostLineData = data.user.freeStats.mostLine;

            const chartData = [
                {
                    "country" : "Position-Count",
                    "TOP" : mostLineData.TOP,
                    "TOPColor" : "hsl(0,70%,50%)",
                    "MIDDLE" : mostLineData.MIDDLE,
                    "MIDDLEColor" : "hsl(0,70%,50%)",
                    "JUNGLE" : mostLineData.JUNGLE,
                    "JUNGLEColor" : "hsl(0,70%,50%)",
                    "BOTTOM" : mostLineData.BOTTOM,
                    "BOTTOMColor" : "hsl(0,70%,50%)",
                    "UTILITY" : mostLineData.UTILITY,
                    "UTILITYColor" : "hsl(0,70%,50%)",
                }
            ]

            return (
                <Box height="100%" width={300} sx={{backgroundColor:"", position:"absolute",right:30 }}>
                    <ResponsiveBar
                        data={chartData}
                        keys={[
                            'TOP',
                            'JUNGLE',
                            'MIDDLE',
                            'BOTTOM',
                            'UTILITY',
                        ]}
                        indexBy="country"
                        margin={{ top: 10, right: 0, bottom: 10, left: 80 }}
                        padding={0}
                        innerPadding={4}
                        groupMode="grouped"
                        valueScale={{ type: 'linear' }}
                        indexScale={{ type: 'band', round: true }}
                        colors={{ scheme: 'nivo' }}
                        borderRadius={5}
                        borderColor="black"
                        axisTop={null}
                        axisRight={null}
                        axisBottom={null}
                        axisLeft={null}
                        enableGridY={false}
                        labelSkipWidth={15}
                        labelSkipHeight={15}
                        labelTextColor="black"
                        legends={[
                            {
                                dataFrom: 'keys',
                                anchor: 'top-left',
                                direction: 'column',
                                justify: false,
                                translateX: -80,
                                translateY: 4,
                                itemsSpacing: 2,
                                itemWidth: 100,
                                itemHeight: 20,
                                itemDirection: 'left-to-right',
                                itemOpacity: 0.85,
                                symbolSize: 20,
                                effects: [
                                    {
                                        on: 'hover',
                                        style: {
                                            itemOpacity: 1
                                        }
                                    }
                                ]
                            }
                        ]}
                        motionConfig="molasses"
                        role="application"
                        ariaLabel="포지션"
                        barAriaLabel={function(e){return e.id+": "+e.formattedValue+" in country: "+e.indexValue}}
                    />
                </Box>
            );
        } else if (gameCatecory === "일반게임") {
            const mostLineData = data.user.normalStats.mostLine;

            const chartData = [
                {
                    "country" : "Position-Count",
                    "TOP" : mostLineData.TOP,
                    "TOPColor" : "hsl(0,70%,50%)",
                    "MIDDLE" : mostLineData.MIDDLE,
                    "MIDDLEColor" : "hsl(0,70%,50%)",
                    "JUNGLE" : mostLineData.JUNGLE,
                    "JUNGLEColor" : "hsl(0,70%,50%)",
                    "BOTTOM" : mostLineData.BOTTOM,
                    "BOTTOMColor" : "hsl(0,70%,50%)",
                    "UTILITY" : mostLineData.UTILITY,
                    "UTILITYColor" : "hsl(0,70%,50%)",
                }
            ]

            return (
                <Box height="100%" width={300} sx={{backgroundColor:"", position:"absolute",right:30 }}>
                    <ResponsiveBar
                        data={chartData}
                        keys={[
                            'TOP',
                            'JUNGLE',
                            'MIDDLE',
                            'BOTTOM',
                            'UTILITY',
                        ]}
                        indexBy="country"
                        margin={{ top: 10, right: 0, bottom: 10, left: 80 }}
                        padding={0}
                        innerPadding={4}
                        groupMode="grouped"
                        valueScale={{ type: 'linear' }}
                        indexScale={{ type: 'band', round: true }}
                        colors={{ scheme: 'nivo' }}
                        borderRadius={5}
                        borderColor="black"
                        axisTop={null}
                        axisRight={null}
                        axisBottom={null}
                        axisLeft={null}
                        enableGridY={false}
                        labelSkipWidth={15}
                        labelSkipHeight={15}
                        labelTextColor="black"
                        legends={[
                            {
                                dataFrom: 'keys',
                                anchor: 'top-left',
                                direction: 'column',
                                justify: false,
                                translateX: -80,
                                translateY: 4,
                                itemsSpacing: 2,
                                itemWidth: 100,
                                itemHeight: 20,
                                itemDirection: 'left-to-right',
                                itemOpacity: 0.85,
                                symbolSize: 20,
                                effects: [
                                    {
                                        on: 'hover',
                                        style: {
                                            itemOpacity: 1
                                        }
                                    }
                                ]
                            }
                        ]}
                        motionConfig="molasses"
                        role="application"
                        ariaLabel="포지션"
                        barAriaLabel={function(e){return e.id+": "+e.formattedValue+" in country: "+e.indexValue}}
                    />
                </Box>
            );
        }
    }

    return (
        <React.Fragment>
            <StyledBox2>
                <Stack direction={"row"}>
                    <Typography variant="h5" component="a" href='#'
                    color={ gameCatecory === "모든게임" ? "inherit" : "#9e9e9e"}
                    onClick={(e) => {e.preventDefault(); changeCategory("모든게임"); setGameCatecory("모든게임")}} 
                    sx={{fontWeight:"bold", display:"inline-block",textDecoration:"none" }}>
                        모든 게임
                    </Typography>
                    <Typography variant="h5" component="a" href='#'
                    color={ gameCatecory === "솔로랭크" ? "inherit" : "#9e9e9e"}
                    onClick={(e) => {e.preventDefault(); changeCategory("솔로랭크"); setGameCatecory("솔로랭크")}} 
                    sx={{fontWeight:"bold", ml:3, display:"inline-block",textDecoration:"none"}}>
                        솔로 랭크
                    </Typography>
                    <Typography variant="h5" component="a" href='#'
                    color={ gameCatecory === "자유랭크" ? "inherit" : "#9e9e9e"}
                    onClick={(e) => {e.preventDefault(); changeCategory("자유랭크"); setGameCatecory("자유랭크")}} 
                    sx={{fontWeight:"bold", ml:3, display:"inline-block",textDecoration:"none"}}>
                        자유 랭크
                    </Typography>
                    <Typography variant="h5" component="a" href='#'
                    color={ gameCatecory === "일반게임" ? "inherit" : "#9e9e9e"}
                    onClick={(e) => {e.preventDefault(); changeCategory("일반게임"); setGameCatecory("일반게임")}} 
                    sx={{fontWeight:"bold", ml:3, display:"inline-block",textDecoration:"none"}}>
                        일반
                    </Typography>
                </Stack>
            </StyledBox2>
            { data != null
                ?   <StyledBox3>
                        { data.info.length != 0
                          ?  <Stack direction={"row"}>
                                <WinRateChart/>
                                <Kda/>
                                <MostChampion/>
                                <MostLine/>
                            </Stack>
                          : <Box textAlign={"center"} sx={{width:"100%"}}>
                                <Stack direction={"row"}>
                                    <ErrorOutlineIcon sx={{fontSize:100}}></ErrorOutlineIcon>
                                    <Typography fontSize={70} fontWeight={"bold"}>{gameCatecory} 데이터가 없습니다.</Typography>
                                </Stack>
                            </Box>
                        }
                    </StyledBox3>
                : null
            }
        </React.Fragment>
    )
}

const MatchList = ({data, isShowTimeLine, setIsShowTimeLine , SearchInit}) => {
    const navigate = useNavigate();

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
                    <StyledBox key={index} mt={1} sx={{color:"black",backgroundColor:winColor}} id={data.matchId} > 
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
                                                <Typography sx={{display: 'flex', textDecoration:"none"}} fontSize="10px" component="a" onClick={(e) => {SearchInit(); navigate("/kr/profile/"+data.blue.TOP.summonerName);}} href={"#"} variant="body2" color="black">
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
                                                <Typography sx={{display: 'flex', textDecoration:"none"}} fontSize="10px" component="a" onClick={(e) => {SearchInit(); navigate("/kr/profile/"+data.blue.JUNGLE.summonerName);}} href={"#"} variant="body2" color="black">
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
                                                <Typography sx={{display: 'flex', textDecoration:"none"}} fontSize="10px" component="a" onClick={(e) => {SearchInit(); navigate("/kr/profile/"+data.blue.MIDDLE.summonerName);}} href={"#"} variant="body2" color="black">
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
                                                <Typography sx={{display: 'flex', textDecoration:"none"}} fontSize="10px" component="a" onClick={(e) => {SearchInit(); navigate("/kr/profile/"+data.blue.BOTTOM.summonerName);}} href={"#"} variant="body2" color="black">
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
                                                <Typography sx={{display: 'flex', textDecoration:"none"}} fontSize="10px" component="a" onClick={(e) => {SearchInit(); navigate("/kr/profile/"+data.blue.UTILITY.summonerName);}} href={"#"} variant="body2" color="black">
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
                                                <Typography sx={{display: 'flex', textDecoration:"none"}} fontSize="10px" component="a" onClick={(e) => {SearchInit(); navigate("/kr/profile/"+data.red.TOP.summonerName);}} href={"#"} variant="body2" color="black">
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
                                                <Typography sx={{display: 'flex', textDecoration:"none"}} fontSize="10px" component="a" onClick={(e) => {SearchInit(); navigate("/kr/profile/"+data.red.JUNGLE.summonerName);}} href={"#"} variant="body2" color="black">
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
                                                <Typography sx={{display: 'flex', textDecoration:"none"}} fontSize="10px" component="a" onClick={(e) => {SearchInit(); navigate("/kr/profile/"+data.red.MIDDLE.summonerName);}} href={"#"} variant="body2" color="black">
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
                                                <Typography sx={{display: 'flex', textDecoration:"none"}} fontSize="10px" component="a" onClick={(e) => {SearchInit(); navigate("/kr/profile/"+data.red.BOTTOM.summonerName);}} href={"#"} variant="body2" color="black">
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
                                                <Typography sx={{display: 'flex', textDecoration:"none"}} fontSize="10px" component="a" onClick={(e) => {SearchInit(); navigate("/kr/profile/"+data.red.UTILITY.summonerName);}} href={"#"} variant="body2" color="black">
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
                                                    <Typography sx={{display: 'flex', textDecoration:"none"}} fontSize="10px" component="a" onClick={(e) => {SearchInit(); navigate("/kr/profile/"+data.summonerName);}} href={"#"} variant="body2" color="black">
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
                                                    <Typography sx={{display: 'flex', textDecoration:"none"}} fontSize="10px" component="a" onClick={(e) => {SearchInit(); navigate("/kr/profile/"+data.summonerName);}} href={"#"} variant="body2" color="black">
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
                        <Box position={"absolute"} right="2%" top="35%">
                            <IconButton size="large" onClick={(e) => {
                                ShowTimeline(data.matchId, isShowTimeLine[index], puuid , data.target.championId , data.target.team , data.target.win , data.bluePuuid, data.redPuuid  );
                                isShowTimeLine[index] = !isShowTimeLine[index]
                                setIsShowTimeLine(isShowTimeLine)
                                console.log(isShowTimeLine[index]);
                            }}>
                                
                                {isShowTimeLine[index]===true ? <ExpandLessIcon/> : <ExpandMoreIcon/>}
                            </IconButton>
                        </Box>
                    </StyledBox>
                )
            } else if ( data.target.win === false ) {
                return (
                    <StyledBox key={index} mt={1} sx={{color:"black",backgroundColor:looseColor}} id={data.matchId} > 
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
                                                <Typography sx={{display: 'flex', textDecoration:"none"}} fontSize="10px" component="a" onClick={(e) => {SearchInit(); navigate("/kr/profile/"+data.blue.TOP.summonerName);}} href={"#"} variant="body2" color="black">
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
                                                <Typography sx={{display: 'flex', textDecoration:"none"}} fontSize="10px" component="a" onClick={(e) => {SearchInit(); navigate("/kr/profile/"+data.blue.JUNGLE.summonerName);}} href={"#"} variant="body2" color="black">
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
                                                <Typography sx={{display: 'flex', textDecoration:"none"}} fontSize="10px" component="a" onClick={(e) => {SearchInit(); navigate("/kr/profile/"+data.blue.MIDDLE.summonerName);}} href={"#"} variant="body2" color="black">
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
                                                <Typography sx={{display: 'flex', textDecoration:"none"}} fontSize="10px" component="a" onClick={(e) => {SearchInit(); navigate("/kr/profile/"+data.blue.BOTTOM.summonerName);}} href={"#"} variant="body2" color="black">
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
                                                <Typography sx={{display: 'flex', textDecoration:"none"}} fontSize="10px" component="a" onClick={(e) => {SearchInit(); navigate("/kr/profile/"+data.blue.UTILITY.summonerName);}} href={"#"} variant="body2" color="black">
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
                                                <Typography sx={{display: 'flex', textDecoration:"none"}} fontSize="10px" component="a" onClick={(e) => {SearchInit(); navigate("/kr/profile/"+data.red.TOP.summonerName);}} href={"#"} variant="body2" color="black">
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
                                                <Typography sx={{display: 'flex', textDecoration:"none"}} fontSize="10px" component="a" onClick={(e) => {SearchInit(); navigate("/kr/profile/"+data.red.JUNGLE.summonerName);}} href={"#"} variant="body2" color="black">
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
                                                <Typography sx={{display: 'flex', textDecoration:"none"}} fontSize="10px" component="a" onClick={(e) => {SearchInit(); navigate("/kr/profile/"+data.red.MIDDLE.summonerName);}} href={"#"} variant="body2" color="black">
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
                                                <Typography sx={{display: 'flex', textDecoration:"none"}} fontSize="10px" component="a" onClick={(e) => {SearchInit(); navigate("/kr/profile/"+data.red.BOTTOM.summonerName);}} href={"#"} variant="body2" color="black">
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
                                                <Typography sx={{display: 'flex', textDecoration:"none"}} fontSize="10px" component="a" onClick={(e) => {SearchInit(); navigate("/kr/profile/"+data.red.UTILITY.summonerName);}} href={"#"} variant="body2" color="black">
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
                                                    <Typography sx={{display: 'flex', textDecoration:"none"}} fontSize="10px" component="a" onClick={(e) => {SearchInit(); navigate("/kr/profile/"+data.summonerName);}} href={"#"} variant="body2" color="black">
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
                                                    <Typography sx={{display: 'flex', textDecoration:"none"}} fontSize="10px" component="a" onClick={(e) => { SearchInit(); navigate("/kr/profile/"+data.summonerName);}} href={"#"} variant="body2" color="black">
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
                        <Box position={"absolute"} right="2%" top="35%">
                            <IconButton size="large" onClick={(e) => {
                                ShowTimeline(data.matchId, isShowTimeLine[index], puuid , data.target.championId , data.target.team , data.target.win , data.bluePuuid, data.redPuuid  );
                                isShowTimeLine[index] = !isShowTimeLine[index]
                                setIsShowTimeLine(isShowTimeLine)
                                console.log(isShowTimeLine[index]);
                            }}>
                                {isShowTimeLine[index]===true ? <ExpandLessIcon/> : <ExpandMoreIcon/>}
                            </IconButton>
                        </Box>
                    </StyledBox>
                )
            } else {
                return (
                    <StyledBox key={index} mt={1} sx={{color:"black",backgroundColor:resetColor}} id={data.matchId}>
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
                                        <Typography sx={{display: 'flex', textDecoration:"none"}} fontSize="10px" component="a" 
                                        href={"#"}
                                        onClick={() => {
                                            SearchInit();
                                            if(data.blue.TOP !== undefined) {
                                                navigate("/kr/profile/"+data.blue.TOP.summonerName);
                                            }else{
                                                navigate("/kr/profile/"+data.blue.escape.summonerName);
                                            }
                                        }}
                                        variant="body2" color="black">
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
                                        <Typography sx={{display: 'flex', textDecoration:"none"}} fontSize="10px" component="a" 
                                        href={"#"}
                                        onClick={() => {
                                            SearchInit();
                                            if(data.blue.JUNGLE !== undefined) {
                                                navigate("/kr/profile/"+data.blue.JUNGLE.summonerName);
                                            }else{
                                                navigate("/kr/profile/"+data.blue.escape.summonerName);
                                            }
                                        }}
                                        variant="body2" color="black">
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
                                        <Typography sx={{display: 'flex', textDecoration:"none"}} fontSize="10px" component="a" 
                                        href={"#"}
                                        onClick={() => {
                                            SearchInit();
                                            if(data.blue.MIDDLE !== undefined) {
                                                navigate("/kr/profile/"+data.blue.MIDDLE.summonerName);
                                            }else{
                                                navigate("/kr/profile/"+data.blue.escape.summonerName);
                                            }
                                        }}
                                        variant="body2" color="black">
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
                                        <Typography sx={{display: 'flex', textDecoration:"none"}} fontSize="10px" component="a" 
                                        href={"#"}
                                        onClick={() => {
                                            SearchInit();
                                            if(data.blue.BOTTOM !== undefined) {
                                                navigate("/kr/profile/"+data.blue.BOTTOM.summonerName);
                                            }else{
                                                navigate("/kr/profile/"+data.blue.escape.summonerName);
                                            }
                                        }}
                                        variant="body2" color="black">
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
                                        <Typography sx={{display: 'flex', textDecoration:"none"}} fontSize="10px" component="a" 
                                        href={"#"}
                                        onClick={() => {
                                            SearchInit();
                                            if(data.blue.UTILITY !== undefined) {
                                                navigate("/kr/profile/"+data.blue.UTILITY.summonerName);
                                            }else{
                                                navigate("/kr/profile/"+data.blue.escape.summonerName);
                                            }
                                        }}
                                        variant="body2" color="black">
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
                                        <Typography sx={{display: 'flex', textDecoration:"none"}} fontSize="10px" component="a" 
                                        href={"#"}
                                        onClick={() => {
                                            SearchInit();
                                            if(data.red.TOP !== undefined) {
                                                navigate("/kr/profile/"+data.red.TOP.summonerName);
                                            }else{
                                                navigate("/kr/profile/"+data.red.escape.summonerName);
                                            }
                                        }}
                                        variant="body2" color="black">
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
                                        <Typography sx={{display: 'flex', textDecoration:"none"}} fontSize="10px" component="a" 
                                        href={"#"}
                                        onClick={() => {
                                            SearchInit();
                                            if(data.red.JUNGLE !== undefined) {
                                                navigate("/kr/profile/"+data.red.JUNGLE.summonerName);
                                            }else{
                                                navigate("/kr/profile/"+data.red.escape.summonerName);
                                            }
                                        }}
                                        variant="body2" color="black">
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
                                        <Typography sx={{display: 'flex', textDecoration:"none"}} fontSize="10px" component="a" 
                                        href={"#"}
                                        onClick={() => {
                                            SearchInit();
                                            if(data.red.MIDDLE !== undefined) {
                                                navigate("/kr/profile/"+data.red.MIDDLE.summonerName);
                                            }else{
                                                navigate("/kr/profile/"+data.red.escape.summonerName);
                                            }
                                        }}
                                        variant="body2" color="black">
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
                                        <Typography sx={{display: 'flex', textDecoration:"none"}} fontSize="10px" component="a" 
                                        href={"#"}
                                        onClick={() => {
                                            SearchInit();
                                            if(data.red.BOTTOM !== undefined) {
                                                navigate("/kr/profile/"+data.red.BOTTOM.summonerName);
                                            }else{
                                                navigate("/kr/profile/"+data.red.escape.summonerName);
                                            }
                                        }}
                                        variant="body2" color="black">
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
                                        <Typography sx={{display: 'flex', textDecoration:"none"}} fontSize="10px" component="a" 
                                        href={"#"}
                                        onClick={() => {
                                            SearchInit();
                                            if(data.red.UTILITY !== undefined) {
                                                navigate("/kr/profile/"+data.red.UTILITY.summonerName);
                                            }else{
                                                navigate("/kr/profile/"+data.red.escape.summonerName);
                                            }
                                        }}
                                        variant="body2" color="black">
                                            &nbsp;{data.red.UTILITY !== undefined ? data.red.UTILITY.summonerName : data.red.escape.summonerName}
                                        </Typography>
                                    }>
                                    </ListItemText>
                                </ListItem>
                            </List>
                        </RedTeam>
                        <Box position={"absolute"} right="2%" top="35%">
                            <IconButton size="large" onClick={(e) => {
                                ShowTimeline(data.matchId, isShowTimeLine[index], puuid , data.target.championId , data.target.team , data.target.win , data.bluePuuid, data.redPuuid  );
                                isShowTimeLine[index] = !isShowTimeLine[index]
                                setIsShowTimeLine(isShowTimeLine)
                                console.log(isShowTimeLine[index]);
                            }}>
                                
                                {isShowTimeLine[index]===true ? <ExpandLessIcon/> : <ExpandMoreIcon/>}
                            </IconButton>
                        </Box>
                    </StyledBox>
                )
            }
        })
    }
}

async function ShowTimeline(matchId, isShowTimeLine, puuid, championId, targetTeam , win, bluePuuid, redPuuid) {
    

    const newNode = document.createElement('div');
    newNode.className='timeLine';
    const selected = document.getElementById(matchId);

    const parent = selected.parentElement;
    const index = Array.from(parent.children).indexOf(selected)
    
    if (!isShowTimeLine) {
        parent.children[index].insertAdjacentElement('afterend', newNode)


        let url = '/api/timeLine?matchId='+matchId+'&puuid='+puuid+'&championId='+championId;
        
        if(win){
            if(targetTeam === "blue") {
                url += `&winPuuid1=${bluePuuid[0]}&winPuuid2=${bluePuuid[1]}&winPuuid3=${bluePuuid[2]}&winPuuid4=${bluePuuid[3]}&winPuuid5=${bluePuuid[4]}`;
                url += `&losePuuid1=${redPuuid[0]}&losePuuid2=${redPuuid[1]}&losePuuid3=${redPuuid[2]}&losePuuid4=${redPuuid[3]}&losePuuid5=${redPuuid[4]}`;
            }else{
                url += `&winPuuid1=${redPuuid[0]}&winPuuid2=${redPuuid[1]}&winPuuid3=${redPuuid[2]}&winPuuid4=${redPuuid[3]}&winPuuid5=${redPuuid[4]}`;
                url += `&losePuuid1=${bluePuuid[0]}&losePuuid2=${bluePuuid[1]}&losePuuid3=${bluePuuid[2]}&losePuuid4=${bluePuuid[3]}&losePuuid5=${bluePuuid[4]}`;
            }
        }else{
            if(targetTeam === "blue") {
                url += `&winPuuid1=${redPuuid[0]}&winPuuid2=${redPuuid[1]}&winPuuid3=${redPuuid[2]}&winPuuid4=${redPuuid[3]}&winPuuid5=${redPuuid[4]}`;
                url += `&losePuuid1=${bluePuuid[0]}&losePuuid2=${bluePuuid[1]}&losePuuid3=${bluePuuid[2]}&losePuuid4=${bluePuuid[3]}&losePuuid5=${bluePuuid[4]}`;
            }else{
                url += `&winPuuid1=${bluePuuid[0]}&winPuuid2=${bluePuuid[1]}&winPuuid3=${bluePuuid[2]}&winPuuid4=${bluePuuid[3]}&winPuuid5=${bluePuuid[4]}`;
                url += `&losePuuid1=${redPuuid[0]}&losePuuid2=${redPuuid[1]}&losePuuid3=${redPuuid[2]}&losePuuid4=${redPuuid[3]}&losePuuid5=${redPuuid[4]}`;
            }
        }

        const timeLineData = await fetch(url).then(response => response.json());

        const itemBuild = timeLineData.itemBuild;
        const skillBuild = timeLineData.skillBuild;
        const blue = timeLineData.matchInfo.blue;
        const red = timeLineData.matchInfo.red;
        const blueTotal = timeLineData.matchInfo.blueTotal;
        const redTotal = timeLineData.matchInfo.redTotal;
        const winTeam = timeLineData.matchInfo.win;
        const maxDamage = timeLineData.matchInfo.maxDamage
        const teamGold = timeLineData.teamGold;

        const grayImg = "https://firebasestorage.googleapis.com/v0/b/bestcosmetics-5136f.appspot.com/o/lol%2FgrayImg.png?alt=media&token=9fb66610-ab1c-4617-80f1-3d774feb4b9d";
        
        function BasicTable( { team } ) {
            
            let tableData;

            if(team === "blue") {
                tableData = blue;
            }else{
                tableData = red;
            }

            return (
                <TableContainer component={Paper} sx={{width:'99%'}}>
                    <Table sx={{ minWidth: 650 ,}} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell >{winTeam === team ? "승리" : "패배"}({team})</TableCell>
                                <TableCell align="center">KDA</TableCell>
                                <TableCell align="center">피해량</TableCell>
                                <TableCell align="center">와드</TableCell>
                                <TableCell align="center">아이템</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody sx={{ color : "black", backgroundColor: winTeam === team ? winColor: looseColor }}>
                        {tableData.map((data, index) => {
                            
                            const chartData = [
                                {
                                    "id" : "",
                                    "ranges" :[0, maxDamage],
                                    "measures" : [0,1,data.totalDamageDealtToChampions],
                                    "markers": [100]
                                }
                            ]

                            return (
                            <TableRow
                            key={index}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 }}}
                            >
                                <TableCell>
                                    <Stack direction={"row"}>
                                        <Tooltip title={data.championName} arrow>
                                            <Badge color="warning" overlap="circular" badgeContent={data.championLevel} anchorOrigin={{vertical: 'bottom',horizontal: 'left',}}>
                                                <Avatar alt={data.championName} src={data.championImg} sx={{width:40, height:40}}/>
                                            </Badge>
                                        </Tooltip>
                                        <Stack ml={1} direction={"column"}>
                                            <Tooltip title={data.summonerSpell1} arrow>
                                                <img alt={data.summonerSpell1} src={data.summonerSpell1Img} width="20px" height="20px"></img>
                                            </Tooltip>
                                            <Tooltip title={data.summonerSpell2} arrow>
                                                <img alt={data.summonerSpell2} src={data.summonerSpell2Img} width="20px" height="20px"></img>
                                            </Tooltip>    
                                        </Stack>
                                        <Stack ml={0.5} direction={"column"}>
                                            <Tooltip title={data.rune1} arrow>
                                                <img alt={data.rune1} src={data.rune1Img} width="20px" height="20px"></img>
                                            </Tooltip>
                                            <Tooltip title={data.rune2} arrow>
                                                <img alt={data.rune2} src={data.rune2Img} width="20px" height="20px"></img>
                                            </Tooltip>
                                        </Stack>
                                        <Typography 
                                            variant="h6"
                                            color="black"
                                            component="span"
                                            fontSize={12}
                                            fontWeight={"bold"}
                                            sx={{textDecoration:"none", mt:1, ml:1}}>
                                                {data.summonerName}
                                        </Typography>
                                    </Stack>
                                </TableCell>
                                <TableCell align="center">
                                    <Stack direction={"column"}>
                                        <Typography 
                                            variant="h6"
                                            color="gray"
                                            component="span"
                                            fontSize={11}
                                            sx={{ mt:0.1}}>
                                                {data.kills}/{data.deaths}/{data.assists} ({data.kp})
                                        </Typography>
                                        <Typography 
                                            variant="h6"
                                            color="gray"
                                            component="span"
                                            fontSize={11}
                                            sx={{ mt:0.1}}>
                                                {data.kda}
                                        </Typography>
                                    </Stack>
                                </TableCell>
                                <TableCell align="center" >
                                    <Tooltip title={"챔피언에게 가한 피해량"+data.totalDamageDealtToChampions}>
                                        <Typography 
                                            variant="h6"
                                            color="gray"
                                            component="span"
                                            fontSize={11}
                                            sx={{ mt:0.1}}>
                                                {data.totalDamageDealtToChampions}
                                        </Typography>
                                    </Tooltip>
                                    <Box height={30} width={200} textAlign="center">
                                        <ResponsiveBullet
                                            data={chartData}
                                            margin={{ top: 0, right: 0, bottom: 0, left: 50 }}
                                            spacing={0}
                                            titleAlign="start"
                                            titleOffsetX={6}
                                            titleOffsetY={3}
                                            rangeBorderColor="black"
                                            measureBorderColor={{ theme: 'background' }}
                                            measureSize={1}
                                            markerSize={0}
                                            rangeColors="greys"
                                            measureColors="red_yellow_blue"
                                            markerColors="seq:warm"
                                        />
                                    </Box>
                                </TableCell>
                                <TableCell align="center">
                                    <Tooltip title={"제어와드:"+data.visionWardsBoughtInGame+"\n와드설치:"+data.wardsPlaced+"\n와드제거:"+data.wardsKilled} 
                                    arrow>
                                        <Stack direction={"column"}>
                                            <Typography 
                                                variant="h6"
                                                color="gray"
                                                component="span"
                                                fontSize={11}
                                                sx={{ mt:0.1}}>
                                                    {data.visionWardsBoughtInGame}
                                            </Typography>
                                            <Typography 
                                                variant="h6"
                                                color="gray"
                                                component="span"
                                                fontSize={11}
                                                sx={{ mt:0.1}}>
                                                    {data.wardsPlaced} / {data.wardsKilled}
                                            </Typography>
                                        </Stack>
                                    </Tooltip>
                                </TableCell>
                                <TableCell align="right">
                                    <Stack direction={"row"}>
                                        <Tooltip title={data.item0_Name || "없음"} arrow><img alt={data.item0_Name} src={data.item0_Img || grayImg} width="40px" height="40px"></img></Tooltip>
                                        <Tooltip title={data.item1_Name || "없음"} arrow><img alt={data.item1_Name} src={data.item1_Img || grayImg} width="40px" height="40px"></img></Tooltip>
                                        <Tooltip title={data.item2_Name || "없음"} arrow><img alt={data.item2_Name} src={data.item2_Img || grayImg} width="40px" height="40px"></img></Tooltip>
                                        <Tooltip title={data.item3_Name || "없음"} arrow><img alt={data.item3_Name} src={data.item3_Img || grayImg} width="40px" height="40px"></img></Tooltip>
                                        <Tooltip title={data.item4_Name || "없음"} arrow><img alt={data.item4_Name} src={data.item4_Img || grayImg} width="40px" height="40px"></img></Tooltip>
                                        <Tooltip title={data.item5_Name || "없음"} arrow><img alt={data.item5_Name} src={data.item5_Img || grayImg} width="40px" height="40px"></img></Tooltip>
                                        <Tooltip title={data.item6_Name || "없음"} arrow><img alt={data.item6_Name} src={data.item6_Img || grayImg} width="40px" height="40px"></img></Tooltip>
                                    </Stack>
                                </TableCell>
                            </TableRow>
                        )})}
                        </TableBody>
                    </Table>
                </TableContainer>
            );
        }

        const Total = ({team}) => {

            return (
                <TableContainer component={Paper} sx={{width:'99%'}}>
                    <Table sx={{ minWidth: 650 ,}} aria-label="simple table">
                        <TableHead sx={{backgroundColor: resetColor}}>
                            <TableRow>
                                <TableCell align="center">
                                    <Typography color={team === winTeam  ? "blue" : "red"}>{team === winTeam ? "승리": "패배"} {team}</Typography> 
                                </TableCell>
                                <TableCell align="center">
                                    <Tooltip title={team === "red" ? "타워제거 " + redTotal.tower : "타워제거 " + blueTotal.tower} arrow>
                                        <Stack direction={"row"} spacing={1}>
                                            <img src={team === winTeam ? "https://firebasestorage.googleapis.com/v0/b/bestcosmetics-5136f.appspot.com/o/lol%2Fsvg%2Ficon-tower.svg?alt=media&token=d10fe99c-4100-4058-b352-2ab7fd89a65a" : "https://firebasestorage.googleapis.com/v0/b/bestcosmetics-5136f.appspot.com/o/lol%2Fsvg%2Ficon-tower-r.svg?alt=media&token=6bb948e0-2a44-452c-94ed-05b96ea2f204"} 
                                            alt={team === winTeam ? "승리팀타워": "패배팀타워"}>
                                            </img>
                                            <Typography>{team === "red" ? redTotal.tower : blueTotal.tower}</Typography>
                                        </Stack>
                                    </Tooltip>
                                </TableCell>
                                <TableCell align="center">
                                    <Tooltip title={team === "red" ? "바론사냥 " + redTotal.baron : "바론사냥 " + blueTotal.baron}>
                                        <Stack direction={"row"} spacing={1}>
                                            <img src={team === winTeam ? "https://firebasestorage.googleapis.com/v0/b/bestcosmetics-5136f.appspot.com/o/lol%2Fsvg%2Ficon-baron.svg?alt=media&token=1fa58b0c-38ab-4d72-9273-a76f7cb3cf36" : "https://firebasestorage.googleapis.com/v0/b/bestcosmetics-5136f.appspot.com/o/lol%2Fsvg%2Ficon-baron-r.svg?alt=media&token=1499844f-a81b-46c7-9c80-9513f75f3692"} 
                                            alt={team === winTeam ? "승리팀바론": "패배팀바론"}>
                                            </img>
                                            <Typography>{team === "red" ? redTotal.baron : blueTotal.baron}</Typography>
                                        </Stack>
                                    </Tooltip>
                                </TableCell>
                                <TableCell align="center">
                                    <Tooltip title={team === "red" ? "드레곤사냥 " + redTotal.dragon : "드레곤사냥 " + blueTotal.dragon} arrow>
                                        <Stack direction={"row"} spacing={1}>
                                            <img src={team === winTeam ? "https://firebasestorage.googleapis.com/v0/b/bestcosmetics-5136f.appspot.com/o/lol%2Fsvg%2Ficon-dragon.svg?alt=media&token=70141824-fa70-4fa9-970e-5837e91caa58" : "https://firebasestorage.googleapis.com/v0/b/bestcosmetics-5136f.appspot.com/o/lol%2Fsvg%2Ficon-dragon-r.svg?alt=media&token=c4dfcde6-0e7e-466b-8f99-edcf2e0e6db0"} 
                                            alt={team === winTeam ? "승리팀드레곤": "패배팀드레곤"}>
                                            </img>
                                            <Typography>{team === "red" ? redTotal.dragon : blueTotal.dragon}</Typography>
                                        </Stack>
                                    </Tooltip>
                                </TableCell>
                                <TableCell align="center">
                                    <Tooltip title={team === "red" ? "킬 " + redTotal.kills : "킬  " + blueTotal.kills} arrow>
                                        <Typography fontWeight={"bold"}>{team === "red" ? redTotal.kills : blueTotal.kills}</Typography>
                                    </Tooltip>
                                </TableCell>
                                <TableCell align="center">VS</TableCell>
                                <TableCell align="center">
                                    <Tooltip title={team !== "red" ? "킬  " + redTotal.kills : "킬  " + blueTotal.kills} arrow>
                                        <Typography fontWeight={"bold"}>{team !== "red" ? redTotal.kills : blueTotal.kills}</Typography>
                                    </Tooltip>
                                </TableCell>
                                <TableCell align="center">
                                    <Tooltip title={team !== "red" ? "드레곤사냥 " + redTotal.dragon : "드레곤사냥 " + blueTotal.dragon} arrow>
                                        <Stack direction={"row"} spacing={1}>
                                            <img src={team !== winTeam ? "https://firebasestorage.googleapis.com/v0/b/bestcosmetics-5136f.appspot.com/o/lol%2Fsvg%2Ficon-dragon.svg?alt=media&token=70141824-fa70-4fa9-970e-5837e91caa58" : "https://firebasestorage.googleapis.com/v0/b/bestcosmetics-5136f.appspot.com/o/lol%2Fsvg%2Ficon-dragon-r.svg?alt=media&token=c4dfcde6-0e7e-466b-8f99-edcf2e0e6db0"} 
                                            alt={team !== winTeam ? "승리팀드레곤": "패배팀드레곤"}>
                                            </img>
                                            <Typography>{team !== "red" ? redTotal.dragon : blueTotal.dragon}</Typography>
                                        </Stack>
                                    </Tooltip>
                                </TableCell>
                                <TableCell align="center">
                                    <Tooltip title={team !== "red" ? "바론사냥 " + redTotal.baron : "바론사냥 " + blueTotal.baron}>
                                        <Stack direction={"row"} spacing={1}>
                                            <img src={team !== winTeam ? "https://firebasestorage.googleapis.com/v0/b/bestcosmetics-5136f.appspot.com/o/lol%2Fsvg%2Ficon-baron.svg?alt=media&token=1fa58b0c-38ab-4d72-9273-a76f7cb3cf36" : "https://firebasestorage.googleapis.com/v0/b/bestcosmetics-5136f.appspot.com/o/lol%2Fsvg%2Ficon-baron-r.svg?alt=media&token=1499844f-a81b-46c7-9c80-9513f75f3692"} 
                                            alt={team !== winTeam ? "승리팀바론": "패배팀바론"}>
                                            </img>
                                            <Typography>{team !== "red" ? redTotal.baron : blueTotal.baron}</Typography>
                                        </Stack>
                                    </Tooltip>
                                </TableCell>
                                <TableCell align="center">
                                    <Tooltip title={team !== "red" ? "타워제거 " + redTotal.tower : "타워제거 " + blueTotal.tower} arrow>
                                        <Stack direction={"row"} spacing={1}>
                                            <img src={team !== winTeam ? "https://firebasestorage.googleapis.com/v0/b/bestcosmetics-5136f.appspot.com/o/lol%2Fsvg%2Ficon-tower.svg?alt=media&token=d10fe99c-4100-4058-b352-2ab7fd89a65a" : "https://firebasestorage.googleapis.com/v0/b/bestcosmetics-5136f.appspot.com/o/lol%2Fsvg%2Ficon-tower-r.svg?alt=media&token=6bb948e0-2a44-452c-94ed-05b96ea2f204"} 
                                            alt={team !== winTeam ? "승리팀타워": "패배팀타워"}>
                                            </img>
                                            <Typography>{team !== "red" ? redTotal.tower : blueTotal.tower}</Typography>
                                        </Stack>
                                    </Tooltip>
                                </TableCell>
                                <TableCell align="center">
                                    <Typography color={team !== winTeam ? "blue" : "red"}>{team !== winTeam ? "승리": "패배"} {team === "blue" ? "red" : "blue"}</Typography> 
                                </TableCell>
                            </TableRow>
                        </TableHead>
                    </Table>
                </TableContainer>
            );
        }
        
        const ChangeButtonGroup = () => {

            return(
                <Box mt={1} mb={1} sx={{width:'99%', textAlign:"center"}}>
                    <ButtonGroup variant="outlined" color="inherit" size="large">
                        <Button
                        onClick={() => {
                            document.getElementById(`${matchId}timeLine1`).style.display ="block";
                            document.getElementById(`${matchId}timeLine2`).style.display ="none";
                        }}
                        >개요
                        </Button>
                        <Button
                        onClick={() => {
                            document.getElementById(`${matchId}timeLine1`).style.display ="none";
                            document.getElementById(`${matchId}timeLine2`).style.display ="block";
                        }}
                        >빌드
                        </Button>
                    </ButtonGroup>
                </Box>
            );
        }

        const Build = () => {
            const itemBuildkey = [];
            const itemBuildList = [];

            for(const key in itemBuild) {
                itemBuildkey.push(key);
                itemBuildList.push(itemBuild[key]);
            }
            
            const Item = () => {

                return (
                    itemBuildList.map((data, index1) => {

                        return (
                            <Box key={index1} ml={3} sx={{display:"inline"}}>
                                {
                                    data.map((data1, index2) => {
                                        if(data1.type === "구매" ) {
                                            return (
                                                <Box key={index2} position={"relative"} sx={{display:"inline"}} ml={1}>
                                                    <Typography fontWeight={"bold"} color="white" position={"absolute"} right={0} bottom={0} sx={{display:"inline", ml:{},mr:{}}}>
                                                        {itemBuildkey[index1]}분
                                                    </Typography>
                                                    <Tooltip title={data1.itemName} sx={{display:"inline"}} arrow>
                                                        <img alt={data1.itemName} src={data1.itemImg} sx={{width:20, height:20}}/>
                                                    </Tooltip>
                                                </Box>
                                            )
                                        }    
                                    })
                                }
                            </Box>
                        )
                    })
                    
                );
            }

            const Skill = () => {
                return(
                    <Box ml={3}>
                        {
                            skillBuild.map((data, index) => {

                                return (
                                    <Box key={index} position={"relative"} sx={{display:"inline"}} ml={1}>
                                        <Typography fontWeight={"bold"} color="white" position={"absolute"} right={2} bottom={2} sx={{display:"inline", ml:{},mr:{}}}>
                                            {data.skillSlot === 1 ? "Q" : data.skillSlot === 2 ? "W" : data.skillSlot === 3 ? "E" : data.skillSlot === 4 ? "R" : null}
                                        </Typography>
                                        <Tooltip key={index} title={data.skillName}>
                                            <img alt={data.skillSlot} src={data.skillImg} sx={{width:20, height:20}}/>
                                        </Tooltip>
                                    </Box>
                                );
                            })
                        }
                    </Box>
                );
            }
            
            
            return (
                <Paper elevation={12}  square={true} sx={{width:'99%'}} >
                    <Typography fontWeight={"bold"} variant={"h5"}>아이템 빌드</Typography>
                    <Item></Item>
                    <Typography fontWeight={"bold"} variant={"h5"}>스킬 빌드</Typography>
                    <Skill></Skill>
                </Paper>
            );
        }

        const Chart = () => {

            const ChartData = []

            const winGoldList = [];
            const lossGoldList = [];

            for (let i = 0; i < teamGold.win.length ; i++ ) {
                const winGold = {"x" : i+"분" , "y" : teamGold.win[i]};
                winGoldList.push(winGold);

                const lossGold = {"x" : i+"분", "y" : teamGold.lose[i]};
                lossGoldList.push(lossGold);
            }

            const smallChart1 = {
                "id" : "승리",
                "color" : "hsl(155, 70%, 50%)",
                "data" : winGoldList
            }

            const smallChart2 = {
                "id" : "패배",
                "color" : "hsl(155, 70%, 50%)",
                "data" : lossGoldList
            }
            ChartData.push(smallChart1);
            ChartData.push(smallChart2);
            
            

            return (
                <Box sx={{width:'99%', height: 300}}>
                    <ResponsiveLine
                        data={ChartData}
                        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                        xScale={{ type: 'point' }}
                        yScale={{
                            type: 'linear',
                            min: 'auto',
                            max: 'auto',
                            stacked: false,
                            reverse: false
                        }}
                        yFormat=" >-.2f"
                        axisTop={null}
                        axisRight={null}
                        axisBottom={{
                            orient: 'bottom',
                            tickSize: 5,
                            tickPadding: 5,
                            tickRotation: 0,
                            legend: '시간당 팀별 전체 골드 획득량',
                            legendOffset: 36,
                            legendPosition: 'middle'
                        }}
                        axisLeft={{
                            orient: 'left',
                            tickSize: 5,
                            tickPadding: 5,
                            tickRotation: 0,
                            legend: '',
                            legendOffset: -40,
                            legendPosition: 'middle'
                        }}
                        enableGridX={false}
                        colors={{ scheme: 'category10' }}
                        enablePoints={false}
                        pointSize={10}
                        pointColor="black"
                        pointBorderWidth={2}
                        pointBorderColor="black"
                        pointLabelYOffset={-12}
                        enableArea={true}
                        enableCrosshair={false}
                        useMesh={true}
                        legends={[
                            {
                                anchor: 'bottom-right',
                                direction: 'column',
                                justify: false,
                                translateX: 113,
                                translateY: 0,
                                itemWidth: 100,
                                itemHeight: 20,
                                itemsSpacing: 4,
                                symbolSize: 20,
                                symbolShape: 'circle',
                                itemDirection: 'left-to-right',
                                itemTextColor: '#777',
                                effects: [
                                    {
                                        on: 'hover',
                                        style: {
                                            itemBackground: 'rgba(0, 0, 0, .03)',
                                            itemOpacity: 1
                                        }
                                    }
                                ]
                            }
                        ]}
                    />
                </Box>
            )
        }

        const root = ReactDOM.createRoot(parent.children[index+1]);
        root.render(
            <Box>
                <ChangeButtonGroup></ChangeButtonGroup>
                {targetTeam === "blue"
                 ?  
                    <React.Fragment >
                        <div style={{display:"block"}} id={`${matchId}timeLine1`}>
                            <BasicTable team={"blue"}/>
                            <Chart></Chart>
                            <Total team={"blue"} ></Total>
                            <BasicTable team={"red"}/>
                        </div>
                        <div style={{display:"none"}} id={`${matchId}timeLine2`}>
                            <Build></Build>
                        </div>
                    </React.Fragment>
                        
                :   
                    <React.Fragment >
                        <div style={{display:"block"}} id={`${matchId}timeLine1`}>
                            <BasicTable team={"red"}/>
                            <Chart></Chart>
                            <Total team={"red"}></Total>
                            <BasicTable team={"blue"}/>
                        </div>
                        <div style={{display:"none"}} id={`${matchId}timeLine2`}>
                            <Build></Build>
                        </div>
                    </React.Fragment>
                       
                }
                
            </Box>
        );
    }else {
        parent.children[index+1].remove()
    }
}

const SummonerInfo = ({data, setData, SearchInit, setCopyData}) => {
    
    
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
                    <Typography variant="h6" component="a" href='#' onClick={(e) => {e.preventDefault(); changeRank1();}}
                    color={ rank === "솔로랭크" ? "inherit" : "#9e9e9e"}
                    sx={{  fontSize:"13px" , fontWeight: "bold" ,textDecoration:"none"}}>
                        솔로랭크
                    </Typography>
                    <Typography variant="h6" component="span" 
                    sx={{ ml:1, fontSize:"13px" ,}}>
                        |
                    </Typography>
                    <Typography variant="h6" component="a" href='#' onClick={(e) => {e.preventDefault();changeRank2();}}
                    color={ rank === "솔로랭크" ? "#9e9e9e" : "inherit"}
                    sx={{ ml:1, fontSize:"13px" , fontWeight: "bold" ,textDecoration:"none"}}>
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
                setCopyData({...data});
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

    const [gameCatecory, setGameCatecory] = useState("모든게임");

    const url = '/api/profile?summonerName='+summonName;

    useEffect(() => {
        fetch(url)
          .then(response => response.json())
          .then(data => {
            setData(data);
            setCopyData({...data});
      }).catch(err => console.log(err));
    },[url])
    
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
                <ResponsiveAppBar SearchInit={SearchInit} setGameCatecory={setGameCatecory}/>
                {data.user !== null
                ?   <Container>
                        <SummonerInfo data={data} setData={setData} summonName={summonName} SearchInit={SearchInit} setCopyData={setCopyData}/>
                        
                        <MatchCatecory copyData={copyData} setData={setData} SearchInit={SearchInit} data={data} gameCatecory={gameCatecory} setGameCatecory={setGameCatecory}/>

                        {data.info.length !== 0
                           ? <MatchList data={data} isShowTimeLine={isShowTimeLine} setIsShowTimeLine={setIsShowTimeLine} SearchInit={SearchInit}/>
                           : null
                        }
                    
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