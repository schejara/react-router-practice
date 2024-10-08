import './App.css';
import StudentForm from '../StudentForm/StudentForm.jsx';
import StudentList from '../StudentList/StudentList.jsx';
//import { Router } from 'express';
import { HashRouter as Router, Route, Link } from "react-router-dom"

import About from '../About/About.jsx'


function App() {
    return (
        <div className="App">
            <header>
                <h1>GitHub Student List</h1>
                <Router>
                
                    <nav>
                        <ul>
                    <li><Link to="/StudentForm" >Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        
                        <li><Link to="/StudentList">StudentsList</Link></li>
                        
                        </ul>
                            </nav> 
                            
                            <Route path = "/About" >
                               <About/>
                            </Route>

                         <Route path="/StudentForm" exact>
                                 < StudentForm/>
                                 </Route>

                                 <Route path="/StudentList"  >
                                 < StudentList/>
                                 </Route> 

                    

                    
                
                </Router>
                {/* Nice spot for a nav, eh? */}
            </header>
            
           
        </div>
    );
}


export default App;
