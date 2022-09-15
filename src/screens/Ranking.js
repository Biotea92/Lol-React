import ResponsiveAppBar from "../components/ResponsiveAppbar";
import { styled } from '@mui/material/styles';
import { Box , Typography } from "@mui/material";
import Container from '@mui/material/Container';
import React, {useState, useEffect} from "react";
import Avatar from '@mui/material/Avatar';
import { ResponsivePie } from '@nivo/pie';
import { Stack } from "@mui/system";
import { ResponsiveBar } from '@nivo/bar'



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
                        "country": "횟수",
                        "wins" : data.rankData.wins,
                        "winsColor" : "hsl(85, 70%, 50%)",
                        "losses" : data.rankData.losses,
                        "lossesColor" : "hsl(51, 70%, 50%)"
                    }
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
                            <ResponsiveBar
                                data={chartData}
                                keys={[
                                    'wins',
                                    'losses'
                                ]}
                                indexBy="country"
                                margin={{ top: 0, right: 50, bottom: 10, left: 0 }}
                                padding={0}
                                layout="horizontal"
                                valueScale={{ type: 'linear' }}
                                indexScale={{ type: 'band', round: true }}
                                colors={{ scheme: 'category10' }}
                                borderColor={{
                                    from: 'color',
                                    modifiers: [
                                        [
                                            'darker',
                                            1.6
                                        ]
                                    ]
                                }}
                                axisTop={null}
                                axisRight={null}
                                axisBottom={null}
                                axisLeft={null}
                                labelSkipWidth={12}
                                labelSkipHeight={12}
                                labelTextColor="black"
                                legends={[]}
                                isInteractive={true}
                                role="application"
                                ariaLabel="승률"
                                barAriaLabel={function(e){return e.id+": "+e.formattedValue+" in country: "+e.indexValue}}
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
                        "country": "횟수",
                        "wins" : data.rankData.wins,
                        "winsColor" : "hsl(85, 70%, 50%)",
                        "losses" : data.rankData.losses,
                        "lossesColor" : "hsl(51, 70%, 50%)"
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
                                    <ResponsiveBar
                                        data={chartData}
                                        keys={[
                                            'wins',
                                            'losses'
                                        ]}
                                        indexBy="country"
                                        margin={{ top: 0, right: 50, bottom: 10, left: 0 }}
                                        padding={0}
                                        layout="horizontal"
                                        valueScale={{ type: 'linear' }}
                                        indexScale={{ type: 'band', round: true }}
                                        colors={{ scheme: 'category10' }}
                                        borderColor={{
                                            from: 'color',
                                            modifiers: [
                                                [
                                                    'darker',
                                                    1.6
                                                ]
                                            ]
                                        }}
                                        axisTop={null}
                                        axisRight={null}
                                        axisBottom={null}
                                        axisLeft={null}
                                        labelSkipWidth={12}
                                        labelSkipHeight={12}
                                        labelTextColor="black"
                                        legends={[]}
                                        isInteractive={true}
                                        role="application"
                                        ariaLabel="승률"
                                        barAriaLabel={function(e){return e.id+": "+e.formattedValue+" in country: "+e.indexValue}}
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
                    component="a"
                    sx={{ mt :3, mb:3, ml:3,textDecoration:"none"}}
                    fontWeight={ranking === "티어랭킹" ? "bold" : "normal"}
                    color={ranking === "티어랭킹" ? "inherit" : "#9e9e9e"}
                    href='#'
                    onClick={(e) => {
                        e.preventDefault();
                        setRanking("티어랭킹")
                        
                    }}>
                        티어랭킹
                    </Typography>
                    <Typography
                    variant="h4"
                    component="a"
                    sx={{ mt :3, mb:3, ml:3, textDecoration:"none"}}
                    fontWeight={ranking === "인기랭킹" ? "bold" : "normal"}
                    color={ranking === "인기랭킹" ? "inherit" : "#9e9e9e"}
                    href='#'
                    onClick={(e) => {
                        e.preventDefault();
                        setRanking("인기랭킹")
                    }}>
                        인기랭킹
                    </Typography>
                </Stack>
                <RankingInfo data={data} ranking={ranking}></RankingInfo>
            </Container>
        </Box>
    );
}

export default RankingPage;