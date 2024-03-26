import './App.css';
import Age1 from './features/Age1'
import Age2 from './features/Age2'
import Age3 from './features/Age3'
import {useState} from 'react'
import Navbar from './components/navbar'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

/**
 * Ai text to speech website
 * https://www.narakeet.com/app/text-to-audio/?projectId=d8522aab-96a4-4469-b619-6cdd915914e8
 */

/**
 * Bacgkround remover website
 * https://www.remove.bg/upload
 */

//const { Text, speechStatus, start, pause, stop } = useSpeech({ text: "This library is awesome!" });

function App() {

    //state management for selecting which page to display
    const [value, setValue] = useState(0)

    const pages = [
        <Age1/>,
        <Age2/>,
        <Age3/>,
    ]

    const LanguageSelector = () => {
       return (
           <Box sx={{ minWidth: 220, position: "absolute", left: '10px', top: '10px' }}>
               <FormControl fullWidth variant={"filled"}>
                   <InputLabel id="demo-simple-select-label">Language</InputLabel>
                   <Select
                       labelId="language-selector"
                       id="language-selector"
                       value={23}
                       label="Language"
                   >
                       <MenuItem value={"English"}>English</MenuItem>
                       <MenuItem value={"French"}>French</MenuItem>
                       <MenuItem value={"Spanish"}>Spanish</MenuItem>
                   </Select>
               </FormControl>
           </Box>
       )
    }


    return (
        <div style={{display: 'flex', flexDirection: 'row'}}>
            <LanguageSelector/>
        <img
            src={"https://media.istockphoto.com/id/165764651/vector/nature.jpg?s=612x612&w=0&k=20&c=QX_6BZLJW6U4scJGdInybQoR4Bo6qqwhGASgGJZrOEw="}
            style={{width: '100vw', height: '100vh'}}
        />
        <Navbar setValue={setValue}/>
        {pages[value]}
        </div>
  );
}

export default App;
