import { Link } from 'react-router-dom';
import {Component} from 'react';

class   Navbar extends Component{
    render(){
        return(
            <nav>
                <h2>Blog Post</h2>
                <div className='link'>
                <Link to="/">Home</Link>
                <Link to="/Create">Create</Link>
                
                </div>
            </nav>
            
        );
    }
}
export default Navbar ;