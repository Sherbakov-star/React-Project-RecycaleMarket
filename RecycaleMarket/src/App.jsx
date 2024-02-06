import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import Product from "./Product.jsx";
import Card from "./Card.jsx";
import Button from "./Button.jsx";
import User from "./User.jsx";
import UserGreeting from "./UserGreeting.jsx";
import ProductList from "./ProductList.jsx";
// function App() {
//   return(
//     <>
//       <Header/>
//       <Product/>
//       <Footer/>
//     </>
//   );
// }

// function App() {
//   return(
//     <>
//     <Card/>
//     <Card/>
//     <Card/>
    
//     </>
//   );
// }

// function App() {
//   return(
//     <>
//       <Button/>
//     </>
//   );
// }


// function App() {
//   return(
//     <>
//       <User name="Alexandr" age={30} isProvider={true}/>
//       <User name="Helen" age={42} isProvider={false}/>
//       <User name="Dmitriy" age={22} isProvider={true}/>
//       <User name="Marina" age={21} isProvider={false}/>
//       <User/>
//     </>
//   );
// }

// function App() {
//   return(
//     <>
//       <UserGreeting isLoggedIn={true} username="Dmitriy"/>
//     </>
//   );
// }

function App() {

  const phones = [{id:1,name:"Iphone SE",color:"black"},
                        {id:2,name:"Iphone 7",color:"red"},
                        {id:3,name:"Xiaomi Redmi 12",color:"green"},
                        {id:4,name:"Honor X9a",color:"white"},
                        {id:5,name:"Honor 9a",color:"black"}]

  const watches = [{id:6,name:"Apple watch 3",color:"black"},
                        {id:7,name:"Apple watch 9",color:"red"},
                        {id:8,name:"Xiaomi redmi watch 3",color:"green"},
                        {id:4,name:"Honor band 6",color:"white"},
                        {id:5,name:"Honor band 3",color:"black"}]                      
  return(
    <>
      {phones.length > 0 && <ProductList items={phones} category="Смартфоны"/>}
      {watches.length > 0 && <ProductList items={watches} category="Смарт-часы"/>}
      
    </>
  );
}
export default App
