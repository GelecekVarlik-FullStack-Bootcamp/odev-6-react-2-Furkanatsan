
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Todos from './components/Todos';
import Category from './components/Category';
import {Link,Routes,Route,useParams} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">ToDo App</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active" >Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/Todos" className="nav-link active" >Todos</Link>
              </li>
              <li className="nav-item  ">
               <Link to="/Login" className="nav-link " >Login</Link>
              </li>
              <li className="nav-item  ">
               <Link to="/Register" className="nav-link " >Register</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    
      
      
      

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Register" element={<Register/>}/>
        <Route path="/Todos" element={<Todos/>}/>
        <Route path="/Category" element={<Category/>}/>
      </Routes>

    </div>
    
  );
}

export default App;
