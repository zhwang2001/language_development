import dog_sound from "../sounds/dog.m4a";
import cat_sound from "../sounds/cat.m4a";
import cow_sound from "../sounds/cow.m4a";
import cat_pic from '../media/cat.png'
import dog_pic from '../media/dog.png'
import cow_pic from '../media/cow.png'
import useSound from 'use-sound'
import InteractiveElement from "../components/interactiveelement";
import TextBox from "../components/textbox";
import {useState} from "react";

export default function Age1() {

    const [dog_audio] = useSound(dog_sound)
    const [cat_audio] = useSound(cat_sound)
    const [cow_audio] = useSound(cow_sound)

    //state management for controlling contents of "words" box for page 1
    const [textBox, setTextBox] = useState([])

    return (
        <div className="App" style={{display: 'flex', flexDirection: "column"}}>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <div className="Interactive Field">

                    <InteractiveElement img={dog_pic} posX={20} posY={10} text="dog" sound={dog_audio} textBox={textBox} setTextBox={setTextBox}/>
                    <InteractiveElement img={cat_pic} posX={40} posY={40} text="cat" sound={cat_audio} textBox={textBox} setTextBox={setTextBox}/>
                    <InteractiveElement img={cow_pic} posX={60} posY={10} text="cow" sound={cow_audio} textBox={textBox} setTextBox={setTextBox}/>

                    <TextBox textBox={textBox} setTextBox={setTextBox}/>
                </div>
            </div>
        </div>
    )

}