import logo from './logo.svg';
import {useState, useEffect} from 'react'
import useSound from 'use-sound'
import './App.css';
import cat_image from './media/cat.png'
import dog_image from './media/dog.png'
import cow_image from './media/cow.png'
import dog_sound from './sounds/Dog.mp3'
import cat_sound from './sounds/Cat.mp3'
import cow_sound from './sounds/Cow.mp3'


/**
 * Ai text to speech website
 * https://www.narakeet.com/app/text-to-audio/?projectId=d8522aab-96a4-4469-b619-6cdd915914e8
 */

/**
 * Bacgkround remover website
 * https://www.remove.bg/upload
 */

function App() {

    const [dog_audio] = useSound(dog_sound)
    const [cat_audio] = useSound(cat_sound)
    const [cow_audio] = useSound(cow_sound)

    const [textBox, setTextBox] = useState([])

    /**
     * @param img accepts jpg or png
     * @param posX accepts num type
     * @param posY accepts num type
     * @param audio accepts mp3 type
     * @returns {JSX.Element}
     * @constructor
     */
    const InteractiveElement = ({img, posX, posY, text, sound}) => {
        const textBoxChange = (text) => {
            setTextBox([...textBox, text])
        }
        return (
            <>
            <img
                src={img}
                width={"20vh"}
                height={"20vh"}
                onClick={() => {sound(); textBoxChange(text);}}
                style={{
                    zIndex: '23',
                    left: `${posX}%`,
                    top: `${posY}%`,
                    width: "30vh",
                    height: "30vh",
                    position: "absolute"
                }}
            />
            </>
        )
    }

    const clearChanges = () => {
        setTextBox([])
    }
    return (
        <div className="App" style={{display: 'flex', flexDirection: "row"}}>
            <div className="Interactive Field">
                <img
                    src={"https://t4.ftcdn.net/jpg/02/08/90/79/360_F_208907901_vwJlqM8Nh0EWkESEYwAsXduVA1PxxoQi.jpg"}
                    style={{width: '90vw', height: '100vh'}}
                />
                <InteractiveElement img={dog_image} posX={20} posY={10} text="dog" sound={dog_audio}/>
                <InteractiveElement img={cat_image} posX={40} posY={40} text="cat" sound={cat_audio}/>
                <InteractiveElement img={cow_image} posX={60} posY={10} text="cow" sound={cow_audio}/>

          </div>
          <div className={"textBox"} style={{width: '10vw', padding: '2vw'}}>
              <h1 className={"title"}>Words</h1>
              <button onClick={clearChanges}>Clear</button>
              <h2 className={"text-box"} style={{display: 'flex', flexDirection:"column"}}>{textBox.map((text) => {
                return(<div>{text}</div>)
              })}</h2>
          </div>
      </div>
  );
}

export default App;
