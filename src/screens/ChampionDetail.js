import ResponsiveAppBar from "../components/ResponsiveAppbar";
import { useParams } from 'react-router-dom';
import { Box , Typography } from "@mui/material";
import Container from '@mui/material/Container';
import { useState , useEffect, Fragment} from 'react';
import { styled } from '@mui/material/styles';
import  Stack  from '@mui/material/Stack';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import IconButton from '@mui/material/IconButton';
import { ResponsiveRadar } from '@nivo/radar'

const Info = ({data}) => {

    const [url, setUrl] = useState(`url("${data.skins[0].skinImg}")`);
    const [skin, setSkin] = useState(0);

    const [skilldisplay , setSkilldisplay] = useState("none");
    
    const [skillView, setSkillView] = useState([data.passive[0].champPassiveName,data.passive[0].champPassiveDescription,data.passive[0].champPassiveImg]);
    
    const chartData = [
        {"능력치" : "공격력","c" : data.info.공격력},
        {"능력치" : "난이도","c" : data.info.난이도},
        {"능력치" : "생명력","c" : data.info.생명력},
        {"능력치" : "주문력","c" : data.info.주문력},
    ];
    

    const skinCount = data.skins.length -1 ;

    function changeSkin(position) {
        if(position === "forward") {
            if(skin < skinCount){
                setUrl(`url("${data.skins[skin+1].skinImg}")`);
                setSkin(skin+1);
            }else {
                setUrl(`url("${data.skins[0].skinImg}")`);
                setSkin(0);
            }
        }else {
            if(skin === 0) {
                setUrl(`url("${data.skins[skinCount].skinImg}")`);
                setSkin(skinCount)
            }else {
                setUrl(`url("${data.skins[skin-1].skinImg}")`);
                setSkin(skin-1);
            }
        }
    }

    function skillSet(skillName, skillDesc, skillImg) {
        setSkillView([skillName, skillDesc, skillImg]);
        console.log(skillView);
    }        

    return (
        <Box sx={{ mt:2, height:710, color:"white", backgroundImage : url}} position="relative">
            <Box width={"100%"}>
                <Stack direction={"column"}>
                    <Box>
                        <Typography mt={3} ml={3} variant="h4" color="inherit">
                            {data.skins[skin].skinName === "default" ? data.champKrName : data.skins[skin].skinName }, {data.champTitle}
                        </Typography>
                    </Box>
                    <Box mt={3} ml={3} sx={{width:500}}>
                        <Typography color="inherit">
                            {data.story}
                        </Typography>
                    </Box>
                </Stack>
            </Box>
            <Box mt={3} width={500} height={300} color="white">
            <ResponsiveRadar
                data={chartData}
                keys={['c']}
                indexBy="능력치"
                maxValue={10}
                valueFormat=" >-.2f"
                margin={{ top: 40, right: 0, bottom: 40, left: 0 }}
                borderColor={{ from: 'color', modifiers: [] }}
                gridShape="linear"
                gridLabelOffset={20}
                dotSize={10}
                dotColor="#ffffff"
                dotBorderWidth={2}
                dotBorderColor={{ from: 'color', modifiers: [] }}
                dotLabel="value"
                colors={{ scheme: 'nivo' }}
                fillOpacity={0.5}
                motionConfig="wobbly"
                isInteractive={false}
                theme={{
                    axis: {ticks : {text :{fill:"white"}}}
                }}
            />
            </Box>
            <Box position={"absolute"} left="0" top="45%">
                <IconButton color="inherit" size="large" onClick={()=>changeSkin("back")}>
                    <ArrowBackIosIcon size="large"></ArrowBackIosIcon>
                </IconButton>
            </Box>
            <Box position={"absolute"} right="0" top="45%">
                <IconButton color="inherit" size="large" onClick={()=>changeSkin("forward")}>
                    <ArrowForwardIosIcon></ArrowForwardIosIcon>
                </IconButton>
            </Box>
            <Box position={"absolute"} bottom="5%" left={"35%"}>
                <Stack direction={"row"} spacing={1}>
                    <img src={data.passive[0].champPassiveImg} alt={data.passive[0].champPassiveName} 
                    onMouseOver={()=>{ 
                        setSkilldisplay("flex");
                        skillSet(data.passive[0].champPassiveName,data.passive[0].champPassiveDescription,data.passive[0].champPassiveImg);
                    }}
                    onMouseLeave={()=>{
                        setSkilldisplay("none")
                    }}
                    />
                    <img src={data.Q[0].skillImg} alt={data.Q[0].skillName}
                    onMouseOver={()=>{ 
                        setSkilldisplay("flex");
                        skillSet(data.Q[0].skillName,data.Q[0].skillDescription,data.Q[0].skillImg);
                    }}
                    onMouseLeave={()=>{
                        setSkilldisplay("none")
                    }}
                    />
                    <img src={data.W[0].skillImg} alt={data.W[0].skillName}
                    onMouseOver={()=>{ 
                        setSkilldisplay("flex");
                        skillSet(data.W[0].skillName,data.W[0].skillDescription,data.W[0].skillImg);
                    }}
                    onMouseLeave={()=>{
                        setSkilldisplay("none")
                    }}
                    />
                    <img src={data.E[0].skillImg} alt={data.E[0].skillName} 
                    onMouseOver={()=>{ 
                        setSkilldisplay("flex");
                        skillSet(data.E[0].skillName,data.E[0].skillDescription,data.E[0].skillImg);
                    }}
                    onMouseLeave={()=>{
                        setSkilldisplay("none")
                    }}
                    />
                    <img src={data.R[0].skillImg} alt={data.R[0].skillName} 
                    onMouseOver={()=>{ 
                        setSkilldisplay("flex");
                        skillSet(data.R[0].skillName,data.R[0].skillDescription,data.R[0].skillImg);
                    }}
                    onMouseLeave={()=>{
                        setSkilldisplay("none")
                    }}
                    />
                </Stack>
            </Box>
            <Box display={skilldisplay} position={"absolute"} bottom="35%" left="25%" sx={{width:600, height:100, color:"white",backgroundColor:""}}>
                <img src={skillView[2]} alt={skillView[0]} />
                <Stack ml={1} direction={"column"}>
                    <Typography variant="h4">
                            {skillView[0]}
                    </Typography>
                    <Typography variant="h6">
                            {skillView[1]}
                    </Typography>
                </Stack>
            </Box>
        </Box>
    )
    
}



const ChampionDetailPage = () => {

    const {championId} = useParams();
    const [data, setData] = useState();

    const url = `/api/championInfo?championId=${championId.toString()}`;

    useEffect(() => {
        fetch(url)
          .then(response => response.json())
          .then(data => {
            setData(data);
      }).catch(err => console.log(err));
    },[url])

    return(
        <Box>
            <ResponsiveAppBar ></ResponsiveAppBar>
            <Container>
            {data != null
                 ?   <Box sx={{position:"relative", width:"100%"}}>
                    <Info data={data}></Info>
                    </Box>
                : null
            }
            </Container>
        </Box>
    )
}

export default ChampionDetailPage;