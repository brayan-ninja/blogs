
import {Component} from 'react';

class   Navbar extends Component{
    render(){
        return(
            <nav>
                <h2>Blog Post</h2>
                <div className='link'>
                    <a href="">Home</a>
                    <a href="">Create</a>
                </div>
            </nav>
            
        );
    }
}
export default Navbar ;