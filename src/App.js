import './App.css';
import Age1 from './features/Age1'
import Age2 from './features/Age2'
import Age3 from './features/Age3'
import {useState} from 'react'
import Navbar from './components/navbar'

/**
 * Ai text to speech website
 * https://www.narakeet.com/app/text-to-audio/?projectId=d8522aab-96a4-4469-b619-6cdd915914e8
 */

/**
 * Bacgkround remover website
 * https://www.remove.bg/upload
 */


function App() {

    //state management for selecting which page to display
    const [value, setValue] = useState(0)

    const pages = [
        <Age1/>,
        <Age2/>,
        <Age3/>,
    ]


    return (
        <div style={{display: 'flex', flexDirection: 'row'}}>
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
