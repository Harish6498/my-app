import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Input from './components/Input/Input';
import Header from './components/Header/Header';

function App() {
  return (
    <>
    {/* <h2>This is React app</h2>
    <Input/> */}
    {/* <Header/> */}
    <Router>
      <Routes>
        <Route path="/" element={<Header/>}/>
        <Route path="/Input" element={<Input/>}/>


        
      </Routes>
    </Router>
    </>
  );
}

export default App;
