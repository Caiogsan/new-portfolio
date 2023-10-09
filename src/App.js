import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Main from './components/main/Main';
import Footer from './containers/footer/Footer';
import Header from './containers/header/Header';
import About from './components/about/About';
import Project from "./components/project/Project"
import Contact from "./components/contact/Contact"

function App() {
  return (
    
      <Router>
        <div className="App bg-gray-200">
        <Header></Header>
          <Routes>
          <Route path="/home" exact element={<Main></Main>} />
          <Route path="/home/about" exact element={<About></About>} />
          <Route path="/home/project" exact element={<Project></Project>} />
          <Route path="/home/contact" exact element={<Contact></Contact>} />
        </Routes>
     
        <Footer></Footer>
      </div>

      </Router>

     
  );
}

export default App;
