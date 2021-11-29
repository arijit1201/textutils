// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// let name = "Arijit"
function App() {
  return (
    <>
      <Navbar title="Text Utilities" aboutText="About"/>
      <div className="container my-3">
        <TextForm title="Input Your text Here"/>
        {/* <About/> */}
      </div>

    </>
  );
}

export default App;
