import ResponsiveAppBar from "../components/ResponsiveAppbar";
import React, {useEffect, useState} from "react";
import { Box , Typography } from "@mui/material";
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TableSortLabel from '@mui/material/TableSortLabel';
import { visuallyHidden } from '@mui/utils';

const Buttons = ({url, setData, data}) => {

    function dataReset (position) {
        url = `/api/statsList?kind=${position}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                setData(data);
        }).catch(err => console.log(err));
    }

    return (
        <Box sx={{width: "100%", mt:5, md:3}} position={"relative"}>
            <Stack direction={"row"}>
                <ButtonGroup variant="outlined" color="inherit" size="large">
                    <Button
                    onClick={() => {
                        dataReset("total");
                    }}
                    >전체
                    </Button>
                    <Button
                    onClick={() => {
                        dataReset("top");
                    }}
                    >탑
                    </Button>
                    <Button
                    onClick={() => {
                        dataReset("middle");
                    }}
                    >미드
                    </Button>
                    <Button
                    onClick={() => {
                        dataReset("jungle");
                    }}
                    >정글
                    </Button>
                    <Button
                    onClick={() => {
                        dataReset("bottom");
                    }}
                    >원딜
                    </Button>
                    <Button
                    onClick={() => {
                        dataReset("utility");
                    }}
                    >서포터
                    </Button>
                </ButtonGroup>
                <Typography right="0" position="absolute">
                    업데이트 시간 {data.update_time}
                </Typography>
            </Stack>
        </Box>
    )
}


function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }
  
  function getComparator(order, orderBy) {
    return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }
  
  // This method is created for cross-browser compatibility, if you don't
  // need to support IE11, you can use Array.prototype.sort() directly
  function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) {
        return order;
      }
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  }

const StatisticsTable = ({data}) => {
    const statisticsList = data.stats;

    const [order, setOrder] = React.useState('desc');
    const [orderBy, setOrderBy] = React.useState('playCount');
    const [selected, setSelected] = React.useState([]);

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'desc';
        setOrder(isAsc ? 'asc' : 'desc');
        setOrderBy(property);
    };
    
    
    const handleClick = (event, name) => {
        const selectedIndex = selected.indexOf(name);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
            selected.slice(0, selectedIndex),
            selected.slice(selectedIndex + 1),
            );
        }

        setSelected(newSelected);
    };

    
    const onRequestSort=handleRequestSort;
    
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <TableContainer component={Paper} sx={{width:'99%', mt: 3}}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>#</TableCell>
                                <TableCell>챔피언</TableCell>
                                <TableCell 
                                align="center"
                                sortDirection={orderBy === "playCount" ? order : false}
                                >
                                    <TableSortLabel
                                    active={orderBy === "playCount"}
                                    direction={orderBy === "playCount" ? order : 'asc'}
                                    onClick={createSortHandler("playCount")}
                                    >
                                        {"플레이수"}
                                        {orderBy === "playCount" ? (
                                            <Box component="span" sx={visuallyHidden}>
                                            {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                            </Box>
                                        ) : null}
                                    </TableSortLabel>
                                </TableCell>
                                <TableCell align="center"
                                sortDirection={orderBy === "kda" ? order : false}
                                >
                                    <TableSortLabel
                                    active={orderBy === "kda"}
                                    direction={orderBy === "kda" ? order : 'asc'}
                                    onClick={createSortHandler("kda")}
                                    >
                                        {"평점"}
                                        {orderBy === "kda" ? (
                                            <Box component="span" sx={visuallyHidden}>
                                            {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                            </Box>
                                        ) : null}
                                    </TableSortLabel>
                                </TableCell>
                                <TableCell align="center"
                                sortDirection={orderBy === "winrate" ? order : false}>
                                    <TableSortLabel
                                    active={orderBy === "winrate"}
                                    direction={orderBy === "winrate" ? order : 'asc'}
                                    onClick={createSortHandler("winrate")}
                                    >
                                        {"승률"}
                                        {orderBy === "winrate" ? (
                                            <Box component="span" sx={visuallyHidden}>
                                            {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                            </Box>
                                        ) : null}
                                    </TableSortLabel>
                                </TableCell>
                                <TableCell align="center"
                                sortDirection={orderBy === "pickrate" ? order : false}>
                                    <TableSortLabel
                                    active={orderBy === "pickrate"}
                                    direction={orderBy === "pickrate" ? order : 'asc'}
                                    onClick={createSortHandler("pickrate")}
                                    >
                                        {"게임당 픽률"}
                                        {orderBy === "pickrate" ? (
                                            <Box component="span" sx={visuallyHidden}>
                                            {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                            </Box>
                                        ) : null}
                                    </TableSortLabel>
                                </TableCell>
                                <TableCell align="center"
                                sortDirection={orderBy === "banrate" ? order : false}>
                                    <TableSortLabel
                                    active={orderBy === "banrate"}
                                    direction={orderBy === "banrate" ? order : 'asc'}
                                    onClick={createSortHandler("banrate")}
                                    >
                                        {"게임당 벤률"}
                                        {orderBy === "banrate" ? (
                                            <Box component="span" sx={visuallyHidden}>
                                            {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                            </Box>
                                        ) : null}
                                    </TableSortLabel>
                                </TableCell>
                                <TableCell align="center"
                                sortDirection={orderBy === "cs" ? order : false}>
                                    <TableSortLabel
                                    active={orderBy === "cs"}
                                    direction={orderBy === "cs" ? order : 'asc'}
                                    onClick={createSortHandler("cs")}
                                    >
                                        {"CS"}
                                        {orderBy === "cs" ? (
                                            <Box component="span" sx={visuallyHidden}>
                                            {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                            </Box>
                                        ) : null}
                                    </TableSortLabel>
                                </TableCell>
                                <TableCell align="center"
                                sortDirection={orderBy === "gold_earned" ? order : false}>
                                    <TableSortLabel
                                    active={orderBy === "gold_earned"}
                                    direction={orderBy === "gold_earned" ? order : 'asc'}
                                    onClick={createSortHandler("gold_earned")}
                                    >
                                        {"골드"}
                                        {orderBy === "gold_earned" ? (
                                            <Box component="span" sx={visuallyHidden}>
                                            {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                            </Box>
                                        ) : null}
                                    </TableSortLabel>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {stableSort(statisticsList, getComparator(order,orderBy)).map((data, index) => {
                            
                            return (
                            <TableRow
                            key={index}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 }}}
                            hover
                            onClick={(event) => handleClick(event, data.championName)}
                            >
                                <TableCell>
                                    {index + 1}
                                </TableCell>
                                <TableCell>
                                    <Stack direction={"row"}>
                                        <Avatar alt={data.championName} src={data.championImg} sx={{width:25, height:25}}/>
                                        <Typography fontWeight={"bold"} sx={{ml: 1}}>{data.championName}</Typography>
                                    </Stack>
                                </TableCell>
                                <TableCell align="center">
                                    {data.playCount.toLocaleString('en-US')}
                                </TableCell>
                                <TableCell align="center" >
                                    {data.kda}
                                </TableCell>
                                <TableCell align="center">
                                    {data.winrate}%
                                </TableCell>
                                <TableCell align="center">
                                    {data.pickrate}%
                                </TableCell>
                                <TableCell align="center">
                                    {data.banrate}%
                                </TableCell>
                                <TableCell align="center">
                                    {data.cs.toLocaleString('en-US')}
                                </TableCell>
                                <TableCell align="center">
                                    {data.gold_earned.toLocaleString('en-US')}
                                </TableCell>
                            </TableRow>
                        )})}
                        </TableBody>
                    </Table>
                </TableContainer>
    )
}

const StatisticsPage = () => {
    const [data, setData] = useState();

    let url = '/api/statsList?kind=total';

    useEffect(() => {
        fetch(url)
          .then(response => response.json())
          .then(data => {
            setData(data);
      }).catch(err => console.log(err));
    },[url])

    if(data != null) {
        return (
            <Box>
                <ResponsiveAppBar></ResponsiveAppBar>
                <Container>
                    <Typography
                    variant="h4"
                    fontWeight={"bold"}
                    sx={{ mt :5, mb:3}}>
                        통계
                    </Typography>
                    <Buttons url={url} setData={setData} data={data}/>
                    <StatisticsTable data={data}/>
                </Container>
            </Box>
        );
    }
}

export default StatisticsPage;