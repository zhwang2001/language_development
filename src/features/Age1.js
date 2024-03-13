import dog_sound from "../sounds/dog.m4a";
import cat_sound from "../sounds/cat.m4a";
import cow_sound from "../sounds/cow.m4a";
import cat_pic from '../media/cat.png'
import dog_pic from '../media/dog.png'
import cow_pic from '../media/cow.png'
import {useState} from "react";
import useSound from 'use-sound'

export default function Age1() {

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
        <div className="App" style={{display: 'flex', flexDirection: "column"}}>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <div className="Interactive Field">

                    <InteractiveElement img={dog_pic} posX={20} posY={10} text="dog" sound={dog_audio}/>
                    <InteractiveElement img={cat_pic} posX={40} posY={40} text="cat" sound={cat_audio}/>
                    <InteractiveElement img={cow_pic} posX={60} posY={10} text="cow" sound={cow_audio}/>

                </div>
                <div className={"textBox"}
                     style={{width: '10vw',
                         height: '85vh',
                         margin: '2vh',
                         padding: '2vw',
                         position: 'absolute',
                         right: '0px',
                         background: 'black',
                         overflow: 'scroll',
                         borderRadius: '40px'}}>
                    <h1 className={"title"} style={{color: 'white'}}>Words</h1>
                    <button onClick={clearChanges}>Clear</button>
                    <h2 className={"text-box"} style={{display: 'flex', flexDirection:"column", color: 'white' }}>{textBox.map((text) => {
                        return(<div>{text}</div>)
                    })}</h2>
                </div>
            </div>


        </div>
    )

}