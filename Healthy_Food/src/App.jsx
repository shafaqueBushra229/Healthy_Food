import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import Container from "./Components/Containers.jsx";
import Foodlist from './Components/foodList';
import Input from "./Components/Input";
function App() {
 let foodList = ['Milk', 'bread'];
  return (
    <>
     
      <Container><h1>Healthy Food</h1>
      <Input></Input>
      <Foodlist foodItem={foodList}></Foodlist>
      </Container>
    </>
  )
}

export default App
