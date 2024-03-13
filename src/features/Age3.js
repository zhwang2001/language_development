import {useState} from "react";
import useSound from 'use-sound'
import plant_facts from "../sounds/Plants absorb sunlig.m4a"
import car_facts from "../sounds/Cars are fast.m4a"
import skyscraper_facts from "../sounds/Skyscrapers are tall.m4a"
import waterfall_facts from "../sounds/Waterfalls flow off .m4a"
import astronaut_facts from "../sounds/Astronauts go to spa.m4a"


const car = "https://www.thecompliancecenter.com/ca/wp-content/uploads/sites/4/cm/d/c/dc4_hi_1.gif"
const plant = "https://i.pinimg.com/736x/2f/8c/a9/2f8ca925ed19c9b39b1c90411883889b.jpg"
const skyscraper = 'https://i.pinimg.com/736x/48/af/c0/48afc07443f7d17309de222cf577f0d7.jpg'
const astronaut  = "data:image/png;base64,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"
const waterfall = 'https://caar.org/media/com_eshop/products/resized/REG-02-7-532x532.jpg'

export default function Age3() {

    const [plant_fact] = useSound(plant_facts)
    const [car_fact] = useSound(car_facts)
    const [skyscraper_fact] = useSound(skyscraper_facts)
    const [astronaut_fact] = useSound(astronaut_facts)
    const [waterfall_fact] = useSound(waterfall_facts)

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
                    {/*<img*/}
                    {/*    src={"https://t4.ftcdn.net/jpg/02/08/90/79/360_F_208907901_vwJlqM8Nh0EWkESEYwAsXduVA1PxxoQi.jpg"}*/}
                    {/*    style={{width: '90vw', height: '100vh'}}*/}
                    {/*/>*/}
                    <img src={"https://img.freepik.com/free-photo/abstract-luxury-plain-blur-grey-black-gradient-used-as-background-studio-wall-display-your-products_1258-63749.jpg?size=338&ext=jpg&ga=GA1.1.1395880969.1710201600&semt=ais"}
                         style={{width:'100vw', height: '100vh'}}
                    />
                    <InteractiveElement img={plant} posX={60} posY={10} text="Plants absorb sunlight" sound={plant_fact}/>
                    <InteractiveElement img={car} posX={40} posY={20} text="Cars are fast" sound={car_fact}/>
                    <InteractiveElement img={astronaut} posX={30} posY={60} text="Astronauts go to space" sound={astronaut_fact}/>
                    <InteractiveElement img={skyscraper} posX={50} posY={55} text="Skyscrapers are tall" sound={skyscraper_fact}/>
                    <InteractiveElement img={waterfall} posX={20} posY={10} text="Waterfalls flow off a ledge" sound={waterfall_fact}/>

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
