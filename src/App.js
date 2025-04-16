import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Input from './components/Input/Input';
import Header from './components/Header/Header';
import PostApi from './components/PostApi/PostApi';
import GetApi from './components/GetApi/GetApi';

function App() {
  return (
    <>
    {/* <h2>This is React app</h2>
    <Input/> */}
    {/* <Header/> */}
    {/* <PostApi/> */}
    <GetApi/>
    {/* <Router>
      <Routes>
        <Route path="/" element={<PostApi/>}/>
        <Route path="/Input" element={<Input/>}/>


        
      </Routes>
    </Router> */}
    </>
  );
}

export default App;
