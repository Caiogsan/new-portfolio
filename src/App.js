import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Main from './components/main/Main';
import Footer from './containers/footer/Footer';
import Header from './containers/header/Header';
import About from './components/about/About';
import Project from "./components/project/Project"
import Contact from "./components/contact/Contact"
import { useState, React } from "react";
import { LanguageContext } from './containers/header/LanguageContext';

function App() {

  const [language, setLanguage] = useState("ingles");

  return (
    
      <LanguageContext.Provider value={{language, setLanguage}}>
        <Router>
            <div className="App bg-gray-200" id='teste'>
            <Header></Header>
            
              <Routes>
              <Route path="/new-portfolio/home" exact element={<Main></Main>} />
              <Route path="/new-portfolio/home/about" exact element={<About></About>} />
              <Route path="/new-portfolio/home/project" exact element={<Project></Project>} />
              <Route path="/new-portfolio/home/contact" exact element={<Contact></Contact>} />
            </Routes>
        
            <Footer></Footer>
          </div>

      </Router>
      </LanguageContext.Provider>

     
  );
}

export default App;
