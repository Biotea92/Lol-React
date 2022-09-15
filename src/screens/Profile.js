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
import { ResponsiveBar } from '@nivo/bar'
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
                          : <Box>
                            {gameCatecory} 데이터가 없습니다.
                            </Box>
                        }
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
                        ShowTimeline(data.matchId, isShowTimeLine[index], puuid , data.target.championId, data.target.team);
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
                        ShowTimeline(data.matchId, isShowTimeLine[index], puuid , data.target.championId, data.target.team);
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
                return (
                    <StyledBox key={index} mt={1} sx={{color:"black",backgroundColor:resetColor}} id={data.matchId} 
                        onClick={(e) => {
                            ShowTimeline(data.matchId, isShowTimeLine[index], puuid , data.target.championId , data.target.team);
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

async function ShowTimeline(matchId, isShowTimeLine, puuid, championId, targetTeam) {
    
    const newNode = document.createElement('div');
    newNode.className='timeLine';
    const selected = document.getElementById(matchId);

    const parent = selected.parentElement;
    const index = Array.from(parent.children).indexOf(selected)
    
    if (!isShowTimeLine) {
        parent.children[index].insertAdjacentElement('afterend', newNode)

        const url = '/api/timeLine?matchId='+matchId+'&puuid='+puuid+'&championId='+championId;
        
        const timeLineData = await fetch(url).then(response => response.json());

        console.log(timeLineData);

        const itemBuild = timeLineData.itemBuild;
        const skillBuild = timeLineData.skillBuild;
        const blue = timeLineData.matchInfo.blue;
        const red = timeLineData.matchInfo.red;
        const blueTotal = timeLineData.matchInfo.blueTotal;
        const redTotal = timeLineData.matchInfo.redTotal;
        const winTeam = timeLineData.matchInfo.win;

        const grayImg = "https://firebasestorage.googleapis.com/v0/b/bestcosmetics-5136f.appspot.com/o/lol%2FgrayImg.png?alt=media&token=9fb66610-ab1c-4617-80f1-3d774feb4b9d";
        
        function BasicTable( { team } ) {
            
            let tableData;

            if(team === "blue") {
                tableData = blue;
            }else{
                tableData = red;
            }

            console.log(tableData);

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
                        <TableBody sx={{ color : "black", backgroundColor: winTeam === team ? winColor: looseColor  }}>
                        {tableData.map((data, index) => (
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
                                            component="a"
                                            fontSize={12}
                                            fontWeight={"bold"}
                                            sx={{textDecoration:"none", mt:1, ml:1}}
                                            href={"/kr/profile/"+data.summonerName}>
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
                                <TableCell align="center">dddddddddddddddddd</TableCell>
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
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            );
            
            
        }

        
        const root = ReactDOM.createRoot(parent.children[index+1]);
        root.render(
            <Box>
                {targetTeam === "blue"
                 ?  <React.Fragment>
                        <BasicTable team={"blue"}/>
                        <BasicTable team={"red"}/>
                    </React.Fragment>
                :   <React.Fragment>
                        <BasicTable team={"red"}/>
                        <BasicTable team={"blue"}/>
                    </React.Fragment>
                }
                
            </Box>
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
                <ResponsiveAppBar SearchInit={SearchInit} setGameCatecory={setGameCatecory}/>
                {data.user !== null
                ?   <Container>
                        <SummonerInfo data={data} setData={setData} summonName={summonName} SearchInit={SearchInit}/>
                        
                        <MatchCatecory copyData={copyData} setData={setData} SearchInit={SearchInit} data={data} gameCatecory={gameCatecory} setGameCatecory={setGameCatecory}/>

                        {data.info.length !== 0
                           ? <MatchList data={data} isShowTimeLine={isShowTimeLine} setIsShowTimeLine={setIsShowTimeLine}/>
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