import ResponsiveAppBar from "../components/ResponsiveAppbar";
import { Box , Typography } from "@mui/material";
import Container from '@mui/material/Container';

const RankingPage = () => {
    return (
        <Box>
            <ResponsiveAppBar></ResponsiveAppBar>
            <Container>
                <Typography
                variant="h3"
                sx={{textAlign:"center", mt :3, mb:3}}>
                    랭킹페이지
                </Typography>
                
            </Container>
        </Box>
    );
}

export default RankingPage;