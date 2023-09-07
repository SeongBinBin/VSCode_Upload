import Button from "../Button"

function Word({handleRemove, w}){
    const wordStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
    
    return(
        <div style={wordStyle}>
            <h2>{w.word}</h2>
            <Button size="small" type="button" handleClick={handleRemove}>DELETE</Button>
        </div>
    )
}
export default Word