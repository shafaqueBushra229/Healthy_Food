import "bootstrap/dist/css/bootstrap.min.css"
import Items from "./items"

const Foodlist= ({foodItem}) =>{
    return (
        <ul className="list-group">
           {foodItem.map((list) => (<Items foodItem={list}></Items>))
           } 
            
        </ul>
    )
}

export default Foodlist