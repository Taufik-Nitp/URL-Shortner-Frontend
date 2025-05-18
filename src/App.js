import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import BasicFormControl from './components/Body';

import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
import SlugPage from './components/SlugPage';
import Signup from './components/Authentication/Signup';
import Login from './components/Authentication/Login';
function App() {
  return (
   <>
     
      <Router>
            <Routes>
                {/* Home route */}
                <Route path="/" element={ 
                  <>
                 <Navbar></Navbar>
                 <BasicFormControl></BasicFormControl>
                  </>
                  }/>
                    {/* Dynamic route */}
                <Route path="/:slug" element={<SlugPage />} />
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/login" element= {<Login/>}/>
            </Routes>
        </Router>
   </>
  );
}

export default App;
