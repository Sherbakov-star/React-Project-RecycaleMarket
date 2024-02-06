
function Button(){
    
    const styles = {
        backgroundColor: "hsl(200, 100%, 50%)",
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
    }

    // const handleClick = () => console.log("click");

    // const handleClick2 = (name) => console.log(`${name} stop clicking me`)
    // let count = 0;
    // const handleClick = (name) => {
    //     if(count < 3){
    //         count++;
    //         console.log(`${name} you clicked me ${count} time/s`)
    //     }
    //     else{
    //         console.log(`${name} stop clicking me!`)
    //     }
    // };

    const handleClick = (e) => e.target.textContent = "COOl";
    return(
        // <button onClick={() => handleClick2("Bro")} style={styles}>Купить</button>
        // <button onClick={() => handleClick("Bro")} style={styles}>Купить</button>
        <button onClick={(e) => handleClick(e)} style={styles}>Купить</button>

    );
}

export default Button