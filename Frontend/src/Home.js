import React, { Component } from "react";
import { NavLink } from "react-router-dom";
 
class Home extends Component {
  render() {
    return (
      <div>
          <ul className="header">
            <li><button style={{marginLeft: "5px"}} className="btn btn-danger"><NavLink exact to="/">Home</NavLink></button></li>
            <li><button style={{marginLeft: "5px"}} className="btn btn-danger"><NavLink to="/stuff">About</NavLink></button></li>
            <li><button style={{marginLeft: "5px"}} className="btn btn-danger"><NavLink to="/contact">Contact</NavLink></button></li>
            <li><button style={{marginLeft: "5px"}} className="btn btn-danger"><NavLink to="/Login">Login</NavLink></button></li>
          </ul> 
                      <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-12 offset-md- offset-md-">
                                {/* <h2 className="text-center">Add Donor</h2> */}
                                    <div className="card-body">
          
                                        <p>Blood is universally recognized as the most precious element that sustains life. It saves innumerable lives across the world in a variety of conditions. The need for blood is great - on any given day. approximately 39.000 units of Red Blood Cells are needed. More than 29 million units of blood components are transfused every year. Donate Blood Despite the increase in the number of donors. blood remains in short supply during emergencies. mainly attributed to the lack of information and accessibility. We positively believe this tool can overcome most of these challenges by effectively connecting the blood donors with the blood recipients.</p>
                                        <p className="text-center">THANKING YOU.</p>
                                      </div>
                              </div>
                        </div>
          </div>
        </div>
    );
  }
}
 
export default Home;