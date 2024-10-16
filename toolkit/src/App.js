import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';
import { Todo } from './pages/Todo';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/todo">Todo</Link></li>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/todo" element={<Todo />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
