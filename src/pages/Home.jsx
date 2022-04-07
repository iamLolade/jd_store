import React, { Component } from 'react';
import "../Styles/Home/HomePage.css"

class Home extends Component {
    state = {  } 
    render() { 
        return (
            <div className="layout">
                <h3>Welcome</h3>
                <div>
                    <button>About Us</button>
                    <button>Categories</button>
                </div>
            </div>
        );
    }
}
 
export default Home;