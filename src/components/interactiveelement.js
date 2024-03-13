import {useState} from 'react'

/**
 * @param img accepts jpg or png
 * @param posX accepts num type
 * @param posY accepts num type
 * @param audio accepts mp3 type
 * @returns {JSX.Element}
 * @constructor
 */
const InteractiveElement = ({img, posX, posY, text, sound, textBox, setTextBox}) => {
    const textBoxChange = (text) => {
        setTextBox([...textBox, text])
    }

    const [attention, setAttention] = useState({x: '30vh', y: '30vh', rotate: '0'})

    /**
     * Components controls size and rotational shifts of components during hover
     * @param hoverState either mouse enter or exit
     */
    const attentionalChange = (hoverState) => {
        if (hoverState === "enter"){
            //has a 50 percent chance of rotating clockwise or counter clockwise
            Math.random() < 0.5
                ? setAttention({x: '35vh', y: '35vh', rotate: '10deg'})
                : setAttention({x: '35vh', y: '35vh', rotate: '-10deg'})
        } else if (hoverState === "leave") {
            setAttention({x: '30vh', y: '30vh', rotate: '0deg'})
        }
    }

    return (
        <>
            <img
                src={img}
                width={"20vh"}
                height={"20vh"}
                onClick={() => {sound(); textBoxChange(text)}}
                onMouseEnter={() => attentionalChange("enter")}
                onMouseLeave={() => attentionalChange("leave")}
                style={{
                    left: `${posX}%`,
                    top: `${posY}%`,
                    width: attention.x,
                    height: attention.y,
                    rotate: attention.rotate,
                    position: "absolute"
                }}
            />
        </>
    )
}

export default InteractiveElement