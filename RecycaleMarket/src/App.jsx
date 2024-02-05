import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import Product from "./Product.jsx";
import Card from "./Card.jsx";
import Button from "./Button.jsx";
import User from "./User.jsx";
import UserGreeting from "./UserGreeting.jsx";
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

function App() {
  return(
    <>
      <UserGreeting isLoggedIn={true} username="Dmitriy"/>
    </>
  );
}
export default App
