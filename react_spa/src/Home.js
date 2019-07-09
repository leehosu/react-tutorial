import React, { Component } from "react";

class Home extends Component{
    render(){
        return (
            <div>
                <h2> HELLO! </h2>
                <p> React-router v4 has been released and routing adoption <br/>
                    has changed. Until the previous version (v3), if it was <br/>
                    a static routing that is commonly used, dynamic routing <br/>
                    was applied. Static routing refers to a way to write <br/>
                    routing information to the top-most page, and to draw <br/>
                    the corresponding component when a specific path is <br/>
                    entered into the browser. While all routing information is <br/> 
                    located in one place, it has the advantage of being easy <br/>
                    to manage, but its static nature can reduce scalability <br/>
                    and reusability.</p>
                    
                    
                    <p> Made By Lee Hosu</p>
            </div>
        );
    }
}

export default Home;