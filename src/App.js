import './App.css';

import Navbar from './Components/Navbar';
import Textform from './Components/TextForm';
import About from './Components/About';

function App() {
  return (
    <>
      <Navbar  title="Nikhil" abouttext="About_This"  />
      <div className="container my3" >
        <Textform heading="Enter the text Below" />
      <About/>
      </div>
    </>
  );
}

export default App;
