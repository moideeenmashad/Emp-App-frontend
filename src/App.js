import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes ,Route} from 'react-router-dom';

import Home from './components/Home';
import Form from './components/Form';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' exact element ={<Home/>} />
      <Route path='/Form' exact element={<Form/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
