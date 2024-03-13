import useSound from 'use-sound'
import plant_facts from "../sounds/Plants absorb sunlig.m4a"
import car_facts from "../sounds/Cars are fast.m4a"
import skyscraper_facts from "../sounds/Skyscrapers are tall.m4a"
import waterfall_facts from "../sounds/Waterfalls flow off .m4a"
import astronaut_facts from "../sounds/Astronauts go to spa.m4a"
import InteractiveElement from "../components/interactiveelement";
import Textbox from "../components/textbox";
import {useState} from "react";
import astronaut from '../media/astronaut.png'
import plant from '../media/plant.png'
import car from '../media/car.png'
import waterfall from '../media/waterfall.png'
import skyscraper from '../media/skyscraper.png'

export default function Age3() {

    const [plant_fact] = useSound(plant_facts)
    const [car_fact] = useSound(car_facts)
    const [skyscraper_fact] = useSound(skyscraper_facts)
    const [astronaut_fact] = useSound(astronaut_facts)
    const [waterfall_fact] = useSound(waterfall_facts)

    //state management for controlling contents of "words" box for page 3
    const [textBox, setTextBox] = useState([])

    return (
        <div className="App" style={{display: 'flex', flexDirection: "column"}}>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <div className="Interactive Field">

                    <InteractiveElement img={plant} posX={60} posY={10} text="Plants absorb sunlight" sound={plant_fact} textBox={textBox} setTextBox={setTextBox}/>
                    <InteractiveElement img={car} posX={40} posY={20} text="Cars are fast" sound={car_fact} textBox={textBox} setTextBox={setTextBox}/>
                    <InteractiveElement img={astronaut} posX={30} posY={60} text="Astronauts go to space" sound={astronaut_fact} textBox={textBox} setTextBox={setTextBox}/>
                    <InteractiveElement img={skyscraper} posX={50} posY={55} text="Skyscrapers are tall" sound={skyscraper_fact} textBox={textBox} setTextBox={setTextBox}/>
                    <InteractiveElement img={waterfall} posX={20} posY={10} text="Waterfalls flow off a ledge" sound={waterfall_fact} textBox={textBox} setTextBox={setTextBox}/>

                    <Textbox textBox={textBox} setTextBox={setTextBox}/>
                </div>
            </div>


        </div>
    )

}
