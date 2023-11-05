// import Navbar from "./Components/Navbar/header";
import './App.css'
import Intro from "./Components/Intro/Intro";
import Aboutsec from "./Components/About/Aboutsec";
import Layout from './Components/layout';

function App() {
  return (
    <div className="App" id='home'>
      {/* <Navbar/> */}
      <Layout/>
      <Intro/>
      <Aboutsec/>
    </div>
  );
}

export default App;
