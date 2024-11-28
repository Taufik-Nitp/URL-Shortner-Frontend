import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import BasicFormControl from './components/Body';

import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
import SlugPage from './components/SlugPage';
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
            </Routes>
        </Router>
   </>
  );
}

export default App;
