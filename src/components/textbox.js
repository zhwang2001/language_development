

export default function Textbox({textBox, setTextBox}) {

    const clearChanges = () => {
        setTextBox([])
    }

return(
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
)
}