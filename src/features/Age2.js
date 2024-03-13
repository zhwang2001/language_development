import useSound from 'use-sound'
import plant_s from "../sounds/plant.m4a"
import car_s from "../sounds/car.m4a"
import skyscraper_s from "../sounds/skyscraper.m4a"
import waterfall_s from "../sounds/waterfall.m4a"
import astronaut_s from "../sounds/astronaught.m4a"
import InteractiveElement from "../components/interactiveelement";
import Textbox from "../components/textbox";
import {useState} from "react";
import astronaut from '../media/astronaut.png'
import plant from '../media/plant.png'
import car from '../media/car.png'
import waterfall from '../media/waterfall.png'
import skyscraper from '../media/skyscraper.png'


export default function Age2() {

    const [plant_sound] = useSound(plant_s)
    const [car_sound] = useSound(car_s)
    const [skyscraper_sound] = useSound(skyscraper_s)
    const [astronaut_sound] = useSound(astronaut_s)
    const [waterfall_sound] = useSound(waterfall_s)

    //state management for controlling contents of "words" box for page 2
    const [textBox, setTextBox] = useState([])

    return (
        <div className="App" style={{display: 'flex', flexDirection: "column"}}>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <div className="Interactive Field">
                    <InteractiveElement img={plant} posX={60} posY={10} text="plant" sound={plant_sound} textBox={textBox} setTextBox={setTextBox}/>
                    <InteractiveElement img={car} posX={40} posY={20} text="car" sound={car_sound} textBox={textBox} setTextBox={setTextBox}/>
                    <InteractiveElement img={astronaut} posX={30} posY={60} text="astronaught" sound={astronaut_sound} textBox={textBox} setTextBox={setTextBox}/>
                    <InteractiveElement img={skyscraper} posX={50} posY={55} text="skyscraper" sound={skyscraper_sound} textBox={textBox} setTextBox={setTextBox}/>
                    <InteractiveElement img={waterfall} posX={20} posY={10} text="waterfall" sound={waterfall_sound} textBox={textBox} setTextBox={setTextBox}/>

                    <Textbox textBox={textBox} setTextBox={setTextBox}/>
                </div>
            </div>


        </div>
    )

}
