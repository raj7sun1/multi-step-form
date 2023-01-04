import './App.css';
import Mainform from './Components/Mainform';


function App() {
  
  
  return (
    <>
        <div className="App" style={{backgroundColor:'skyblue'}}>
        <h3 style={{color:'blue', textDecoration:'underline'}} >React MultiStep Form</h3>
          <Mainform />
        <a href={<Mainform />}><h6>home</h6></a>
        </div>
    </>
  );
  
}

export default App;
