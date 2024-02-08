const Items= ({foodItem}) =>{
    return (
        <>
        { <li className="list-group-item" key={foodItem}>{foodItem} 
        <button>Buy</button>
        </li> }
        </>
    )
}

export default Items