import logo from './assets/logo.svg'
import './homepage.css'
import {Route, Link} from 'react-router-dom'

function HomePage(){
    return (
        <div>
            <div className="box ">
                <div className="box flex flex-row h-center v-center">
                    <img className="App-logo" src={logo} alt="RAPID UI"/>          
                </div>
                <div className="flex flex-row h-center v-center text-size-3" style={{textAlign:'center'}}>
                    Build Beautiful Applications Rapidly with Rapid UI 
                </div>  
                <div className="flex flex-row h-center v-center text-size-2" style={{textAlign:'center'}}>
                    With Rapid UI you can develop responsive and polished web apps on the go.
                </div>              
                <Route>
                    <div className="box flex mt-1 h-center v-center flex-gap-1 homePageMainButtons">
                        <Link to="/docs/getting-started">
                            <button className="btn-solid large primary">Get Started</button>
                        </Link>
                        <Link to="/docs/navbar">
                            <button className="btn-solid large secondary">Documentation</button>
                        </Link>
                    </div>
                </Route>                
            </div>
            <footer className="box bg-primary pt-1 mt-2 flex flex-column h-center v-center flex-gap-sm">
                <div>Made With 🧡 By Gaurav Sharma</div>                                
                <h5 className="text-size-1">Connect With Me On</h5>
                <div>
                    <a className="btn-solid" href="https://www.linkedin.com/in/gaurav-kr-sharma/"><i className="fa fa-linkedin"></i></a>
                    <a className="btn-solid" href="https://www.twitter.com/in/sharma_codes/"><i className="fa fa-twitter"></i></a>                    
                    <a className="btn-solid" href="https://www.instagram.com/be_a_sharma/"><i className="fa fa-instagram"></i></a>
                </div>
            </footer>
        </div>
    );
}

export default HomePage;