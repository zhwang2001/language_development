

export default function Textbox({textBox, setTextBox}) {

    const clearChanges = () => {
        setTextBox([])
    }

return(
    <div className={"textBox"}
         style={{
             minWidth: '10vw',
             maxWidth: '20vw',
             height: '85vh',
             margin: '2vh',
             padding: '2vw',
             position: 'absolute',
             right: '0px',
             background: 'black',
             overflow: 'scroll',
             borderRadius: '40px',
             display: 'flex',
             alignItems: 'center',
             flexDirection: 'column',
    }}>
        <h1 className={"title"} style={{color: 'white'}}>Words</h1>
        <button onClick={clearChanges}>Clear</button>
        <h2 className={"text-box"}>{textBox.map((text) => {
            return(<div style={{color: 'white', padding: '10px'}}>{text}</div>)
        })}</h2>
    </div>
)
}