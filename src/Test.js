import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import ButtonGroup from '@mui/material/ButtonGroup';
import Input from '@mui/material/Input';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogTitle';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

const Test = () => {
  const navigate = useNavigate();
  const [value, setValue] = React.useState("")

  function handelInputChange(e) {
    const userValue = e.target.value;

    setValue(userValue);
  }

  const handleFormSubmit = async(e) => {
    e.preventDefault();
    
    if(value === "") {
      return;
    }
    
    await axios.get('/about', {test : "test"})
      .then(e => {
        console.log(e);
        navigate('/about');
      })
      .catch(err => console.log(err))
    
  }
  const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },
    {
      title: 'The Lord of the Rings: The Return of the King',
      year: 2003,
    },
    { title: 'The Good, the Bad and the Ugly', year: 1966 },
    { title: 'Fight Club', year: 1999 },
    {
      title: 'The Lord of the Rings: The Fellowship of the Ring',
      year: 2001,
    },
    {
      title: 'Star Wars: Episode V - The Empire Strikes Back',
      year: 1980,
    },
    { title: 'Forrest Gump', year: 1994 },
    { title: 'Inception', year: 2010 },
    {
      title: 'The Lord of the Rings: The Two Towers',
      year: 2002,
    },
    { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
    { title: 'Goodfellas', year: 1990 },
    { title: 'The Matrix', year: 1999 },
    { title: 'Seven Samurai', year: 1954 },
    {
      title: 'Star Wars: Episode IV - A New Hope',
      year: 1977,
    },
    { title: 'City of God', year: 2002 },
    { title: 'Se7en', year: 1995 },
    { title: 'The Silence of the Lambs', year: 1991 },
    { title: "It's a Wonderful Life", year: 1946 },
    { title: 'Life Is Beautiful', year: 1997 },
    { title: 'The Usual Suspects', year: 1995 },
    { title: 'Léon: The Professional', year: 1994 },
    { title: 'Spirited Away', year: 2001 },
    { title: 'Saving Private Ryan', year: 1998 },
    { title: 'Once Upon a Time in the West', year: 1968 },
    { title: 'American History X', year: 1998 },
    { title: 'Interstellar', year: 2014 },
    { title: 'Casablanca', year: 1942 },
    { title: 'City Lights', year: 1931 },
    { title: 'Psycho', year: 1960 },
    { title: 'The Green Mile', year: 1999 },
    { title: 'The Intouchables', year: 2011 },
    { title: 'Modern Times', year: 1936 },
    { title: 'Raiders of the Lost Ark', year: 1981 },
    { title: 'Rear Window', year: 1954 },
    { title: 'The Pianist', year: 2002 },
    { title: 'The Departed', year: 2006 },
    { title: 'Terminator 2: Judgment Day', year: 1991 },
    { title: 'Back to the Future', year: 1985 },
    { title: 'Whiplash', year: 2014 },
    { title: 'Gladiator', year: 2000 },
    { title: 'Memento', year: 2000 },
    { title: 'The Prestige', year: 2006 },
    { title: 'The Lion King', year: 1994 },
    { title: 'Apocalypse Now', year: 1979 },
    { title: 'Alien', year: 1979 },
    { title: 'Sunset Boulevard', year: 1950 },
    {
      title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
      year: 1964,
    },
    { title: 'The Great Dictator', year: 1940 },
    { title: 'Cinema Paradiso', year: 1988 },
    { title: 'The Lives of Others', year: 2006 },
    { title: 'Grave of the Fireflies', year: 1988 },
    { title: 'Paths of Glory', year: 1957 },
    { title: 'Django Unchained', year: 2012 },
    { title: 'The Shining', year: 1980 },
    { title: 'WALL·E', year: 2008 },
    { title: 'American Beauty', year: 1999 },
    { title: 'The Dark Knight Rises', year: 2012 },
    { title: 'Princess Mononoke', year: 1997 },
    { title: 'Aliens', year: 1986 },
    { title: 'Oldboy', year: 2003 },
    { title: 'Once Upon a Time in America', year: 1984 },
    { title: 'Witness for the Prosecution', year: 1957 },
    { title: 'Das Boot', year: 1981 },
    { title: 'Citizen Kane', year: 1941 },
    { title: 'North by Northwest', year: 1959 },
    { title: 'Vertigo', year: 1958 },
    {
      title: 'Star Wars: Episode VI - Return of the Jedi',
      year: 1983,
    },
    { title: 'Reservoir Dogs', year: 1992 },
    { title: 'Braveheart', year: 1995 },
    { title: 'M', year: 1931 },
    { title: 'Requiem for a Dream', year: 2000 },
    { title: 'Amélie', year: 2001 },
    { title: 'A Clockwork Orange', year: 1971 },
    { title: 'Like Stars on Earth', year: 2007 },
    { title: 'Taxi Driver', year: 1976 },
    { title: 'Lawrence of Arabia', year: 1962 },
    { title: 'Double Indemnity', year: 1944 },
    {
      title: 'Eternal Sunshine of the Spotless Mind',
      year: 2004,
    },
    { title: 'Amadeus', year: 1984 },
    { title: 'To Kill a Mockingbird', year: 1962 },
    { title: 'Toy Story 3', year: 2010 },
    { title: 'Logan', year: 2017 },
    { title: 'Full Metal Jacket', year: 1987 },
    { title: 'Dangal', year: 2016 },
    { title: 'The Sting', year: 1973 },
    { title: '2001: A Space Odyssey', year: 1968 },
    { title: "Singin' in the Rain", year: 1952 },
    { title: 'Toy Story', year: 1995 },
    { title: 'Bicycle Thieves', year: 1948 },
    { title: 'The Kid', year: 1921 },
    { title: 'Inglourious Basterds', year: 2009 },
    { title: 'Snatch', year: 2000 },
    { title: '3 Idiots', year: 2009 },
    { title: 'Monty Python and the Holy Grail', year: 1975 },
  ];
  function Form() {
    return (
          
          <Box component="form" 
                sx={{
                    backgroundColor: 'primary',
                    '&:hover': {
                      backgroundColor: 'primary',
                      opacity: [0.9, 0.8, 0.7],
                    },
                }}
                onSubmit={handleFormSubmit}
                noValidate
                autoComplete="off">
            <h1>KR</h1>
            <Input type="text" name="search" autoComplete='off' placeholder='소환사명을 입력해주세요.'
                    value={value} onChange={handelInputChange} required></Input>
                    <Stack spacing={2} >
                    <Autocomplete
                      id="free-solo-demo"
                      freeSolo
                      options={top100Films.map((option) => option.title)}
                      renderInput={(params) => <TextField {...params} label="freeSolo" />}
                    />
                      <Autocomplete
                      freeSolo
                      id="free-solo-2-demo"
                      disableClearable
                      options={top100Films.map((option) => option.title)}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="소환사명을 입력해주세요"
                          InputProps={{
                            ...params.InputProps,
                            type: 'search',
                          }}
                        />
                      )}
                    />
                    </Stack>      
                    
            <Button variant='outlined' type="submit">검색</Button>

          </Box>

    );
  }
  function Button1() {
    const [ open, setOpen] = useState(false);
    return (
      <div>
        <ButtonGroup>
          <Button variant='outlined' type="button" onClick={() => setOpen(true)}>창조</Button>
          <Button variant='outlined' type="button">업뎃</Button>
        </ButtonGroup>
        <Button variant='outlined' type="submit">검색</Button>
        <Dialog open={open}>
          <DialogTitle>Create</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Hello Create!!  
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button variant='outlined'>Create</Button>
              <Button variant='outlined' onClick={() => setOpen(false)}>Cancel</Button>
            </DialogActions>
        </Dialog>
      </div>
    );
  }

  function Nav() {
    return (
      <nav style={{ border: '1px solid gray'}}>
        <ol>
          <li>html</li>
          <li>css</li>
        </ol>
      </nav>
    );
  }

  function Article() {
    return (
      <article style={{ border: '1px solid gray'}}>
        <h2>Welcome</h2>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae nisl sit amet metus suscipit tincidunt. Fusce vestibulum libero quis ipsum mattis venenatis. Suspendisse augue ipsum, efficitur at pulvinar in, feugiat ut felis. Nulla facilisis maximus augue, ac malesuada massa lobortis sit amet. Phasellus commodo metus vel finibus dignissim. Sed cursus a elit quis laoreet. Curabitur et arcu at nulla luctus tempus ultricies vitae tellus. Sed ac efficitur lacus. Mauris fermentum nec quam sit amet commodo.

        Integer id commodo augue. Quisque et lectus nibh. Duis sed consequat elit, sed feugiat nisl. Morbi commodo euismod ipsum. Aenean consequat velit sit amet imperdiet cursus. Praesent vulputate placerat elementum. Aenean porta hendrerit eros sed varius. Sed tincidunt nisl quis fermentum ultrices. Pellentesque eu velit condimentum, dignissim erat sed, bibendum nisl. Curabitur at eros id justo auctor scelerisque non id nibh. Ut non eros metus.

        Suspendisse ut tellus nibh. Donec porttitor, est non rhoncus elementum, nunc nunc tempor lacus, eget fringilla orci velit et ligula. Proin rutrum massa mollis est vestibulum, eu placerat est posuere. In elementum, ipsum eu congue aliquet, ipsum velit ultrices enim, nec tempor quam nibh nec enim. Donec erat felis, suscipit at lacinia pharetra, euismod a diam. Quisque ultrices lectus turpis, feugiat placerat nisi vestibulum sit amet. Praesent nec pharetra mi. Nullam nec bibendum lacus. Nullam ac enim et lorem efficitur pellentesque in in turpis. Quisque tempor urna at tellus condimentum, sit amet varius ante tincidunt. Mauris sed aliquam arcu. Ut maximus convallis nisl accumsan commodo. Suspendisse potenti.

        Etiam lacinia est et ullamcorper cursus. Nulla ultrices ut erat maximus vestibulum. Phasellus nec pulvinar mi. Etiam venenatis vestibulum finibus. Proin tincidunt vulputate diam, at mattis ex bibendum quis. Nullam ultrices ex at ullamcorper congue. Cras pretium mollis urna id feugiat. Nullam molestie turpis eu mi cursus pellentesque. Morbi orci sem, aliquam ut iaculis id, porta ac odio. Sed rutrum egestas vehicula. Morbi felis orci, aliquam at faucibus id, tristique ac eros. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

        Nulla quis ex elit. Sed tristique nisl eros, in eleifend erat malesuada at. Quisque dapibus egestas urna, ut laoreet sem malesuada et. Nulla magna ante, condimentum a suscipit non, porta et lorem. Curabitur non diam semper, elementum mi a, euismod ex. Cras consequat ut lorem vel tincidunt. Praesent nulla felis, fermentum eu interdum non, facilisis quis tortor. Phasellus nisl lectus, sodales consequat interdum sit amet, ornare a erat. In consectetur aliquam mi ac condimentum. Vivamus est lacus, volutpat eu vestibulum in, commodo nec odio. Maecenas lacus risus, lobortis efficitur tristique vitae, tempor id neque. Maecenas fringilla, erat eu egestas semper, velit ex facilisis tellus, a fermentum odio libero ornare lorem. Donec gravida ultrices semper. Integer tempor orci sed semper sagittis.

      </article>
    )
  }

  return (
      <div>
        홈 입니다.
        <Form></Form>
        <Button1></Button1>
        <Grid container>
          <Grid item xs="2">
            <Nav></Nav>
          </Grid>
          <Grid item xs="10">
            <Article></Article>
          </Grid>
        </Grid>
      </div>
  );
}

export default Test;