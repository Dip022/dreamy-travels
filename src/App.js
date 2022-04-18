import { Route, Routes } from "react-router";
import "./App.css";
import About from "./Pages/About/About";
import Blog from "./Pages/Blog/Blog";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Logins/Login/Login";
import Registration from "./Pages/Logins/Registration/Registration";
import Services from "./Pages/Services/Services";
import Footer from "./Shared/Footer/Footer";
import Header from "./Shared/Header/Header";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/services" element={<Services></Services>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route
          path="/registration"
          element={<Registration></Registration>}
        ></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
