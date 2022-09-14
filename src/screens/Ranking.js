import ResponsiveAppBar from "../components/ResponsiveAppbar";
import { styled } from '@mui/material/styles';
import { Box , Typography } from "@mui/material";
import Container from '@mui/material/Container';
import React, {useState, useEffect} from "react";
import Avatar from '@mui/material/Avatar';
import { ResponsivePie } from '@nivo/pie';
import { Stack } from "@mui/system";



const RankingInfo = ({data,ranking}) => {

    const StyledBox = styled(Box)(({ theme }) => ({
        position: 'relative',
        display: 'flex',
        borderRadius: theme.shape.borderRadius,
        width: '95%',
        height: 40,
        padding: theme.spacing(3, 3, 3, 3),
    }));

    
    const TierRanking = () => {
        
        if(data != null) {

            return data.tierRanking.map((data, index) => {

                const chartData = [
                    {
                        "id" : "wins",
                        "label" : "wins",
                        "value" : data.rankData.wins,
                        "color" : "#0288d1"
                    },
                    {
                        "id" : "losses",
                        "label" : "losses",
                        "value" : data.rankData.losses,
                        "color" : "#ff1744"
                    },
                ]
                return (
                    <StyledBox key={index} mt={1} sx={{color:"black",backgroundColor:"#f5f5f5"}}>
                        <Box sx={{ml: 3 ,width: "30px", textAlign:"center"}}>
                            <Typography
                            variant="h4"
                            component="span"
                            fontWeight={"bold"}
                            >
                                {index+1}
                            </Typography>
                        </Box>
                        <Avatar alt={data.profileIcon.toString()} src={data.profileImg} sx={{ml:5}}></Avatar>
                        <Box sx={{ml:5, width:"250px"}}>
                            <Typography 
                            variant="h5"
                            color="black"
                            component="a"
                            sx={{textDecoration:"none"}}
                            href={"/kr/profile/"+data.summonerName}>
                                {data.summonerName}
                            </Typography>
                        </Box>
                        <Box 
                        sx={{ml:5, width:"180px"}}>
                            <Typography 
                            variant="h5"
                            component={"span"}>
                                {data.rankData.tier.toLowerCase()}&nbsp;{data.rankData.rank}&nbsp;&nbsp;{data.rankData.leaguePoints}LP
                            </Typography>
                        </Box>
                        <Box 
                        position={"absolute"}
                        right="0"
                        sx={{ml:5, width:250, height: 50}}>
                            <ResponsivePie
                                data={chartData}
                                margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
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
                        </Box>
                    </StyledBox>
                );
            })
        }
    }

    const HitRanking = () => {
        
        if(data != null) {

            return data.hitRanking.map((data, index) => {
                const chartData = []
                if(data.rankData !== undefined) {
                    chartData.push({
                        "id" : "wins",
                        "label" : "wins",
                        "value" : data.rankData.wins,
                        "color" : "#0288d1"
                    });
                    chartData.push({
                        "id" : "losses",
                        "label" : "losses",
                        "value" : data.rankData.losses,
                        "color" : "#ff1744"
                    });
                }
                

                return (
                    <StyledBox key={index} mt={1} sx={{color:"black",backgroundColor:"#f5f5f5"}}>
                        <Box sx={{ml: 3 ,width: "30px", textAlign:"center"}}>
                            <Typography
                            variant="h4"
                            component="span"
                            fontWeight={"bold"}
                            >
                                {index+1}
                            </Typography>
                        </Box>
                        <Avatar alt={data.profileIcon.toString()} src={data.profileImg} sx={{ml:5}}></Avatar>
                        <Box sx={{ml:5, width:"250px"}}>
                            <Typography 
                            variant="h5"
                            color="black"
                            component="a"
                            sx={{textDecoration:"none"}}
                            href={"/kr/profile/"+data.summonerName}>
                                {data.summonerName}
                            </Typography>
                        </Box>
                        {data.rankData !== undefined
                        ?   <>
                                <Box 
                                sx={{ml:5, width:"180px"}}>
                                    <Typography 
                                    variant="h5"
                                    component={"span"}>
                                        {data.rankData.tier.toLowerCase()}&nbsp;{data.rankData.rank}&nbsp;&nbsp;{data.rankData.leaguePoints}LP
                                    </Typography>
                                </Box>
                                <Box 
                                position={"absolute"}
                                right="0"
                                sx={{ml:5, width:250, height: 50}}>
                                    <ResponsivePie
                                        data={chartData}
                                        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
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
                                </Box>
                            </>
                        :   <>
                                <Box 
                                sx={{ml:5,}}>
                                    <Typography 
                                    variant="h5"
                                    component={"span"}>
                                        랭크데이터가 없습니다.
                                    </Typography>
                                </Box>
                            </>
                        }
                            
                        
                        
                    </StyledBox>
                );
            })
        }
    }

    
    
    return (
        <Box>
            {ranking === "티어랭킹" 
            ?<TierRanking></TierRanking>
            :<HitRanking></HitRanking>
            }
        </Box>
    );
    
    
}


const RankingPage = () => {
    const [data, setData] = useState();

    const url = '/api/Ranking';
    
    useEffect(() => {
        fetch(url)
          .then(response => response.json())
          .then(data => {
            setData(data);
      }).catch(err => console.log(err));
    },[url])

    const [ranking , setRanking] = useState("티어랭킹");

    return (
        <Box>
            <ResponsiveAppBar></ResponsiveAppBar>
            <Container >
                <Stack direction="row">
                    <Typography
                    variant="h4"
                    sx={{ mt :3, mb:3, ml:3}}
                    fontWeight={ranking === "티어랭킹" ? "bold" : "normal"}
                    color={ranking === "티어랭킹" ? "" : "#9e9e9e"}
                    onClick={() => setRanking("티어랭킹")}>
                        티어랭킹
                    </Typography>
                    <Typography
                    variant="h4"
                    sx={{ mt :3, mb:3, ml:3}}
                    fontWeight={ranking === "인기랭킹" ? "bold" : "normal"}
                    color={ranking === "인기랭킹" ? "" : "#9e9e9e"}
                    onClick={() => setRanking("인기랭킹")}>
                        인기랭킹
                    </Typography>
                </Stack>
                <RankingInfo data={data} ranking={ranking}></RankingInfo>
            </Container>
        </Box>
    );
}

export default RankingPage;