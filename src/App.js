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

    const [value, setValue] = useState(0)

    const pages = [
        <Age1 />,
        <Age2 />,
        <Age3 />,
    ]

    const [textBox, setTextBox] = useState([])

    return (
        <>
        <img
            src={"https://png.pngtree.com/background/20230519/original/pngtree-an-old-book-has-a-new-home-under-a-full-moon-picture-image_2660440.jpg"}
            style={{width: '100vw', height: '100vh'}}
        />
        <Navbar setValue={setValue}/>
        {pages[value]}
        </>
  );
}

export default App;
