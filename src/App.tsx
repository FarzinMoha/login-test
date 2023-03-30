
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import Router from './Router';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
      <Router/>
      </BrowserRouter>
    </div>
  );
}

export default App;
