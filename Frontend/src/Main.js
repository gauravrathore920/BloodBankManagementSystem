import {
  Route,
  HashRouter
} from "react-router-dom";
import React, { Component } from "react";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";
import LoginComponent from "./components/LoginComponent";
import CreateDonor from "./components/CreateDonor";
import Donor from "./components/Donor";
import StockHome from "./components/StockHome";
import allDonor from "./components/allDonor";
import UpdateDonor from "./components/UpdateDonor";
import IncreaseStock from "./components/IncreaseStock";
import DecreaseStock from "./components/DecreaseStock";
import AllStock from "./components/AllStock";
import UserRegister from "./User/UserRegister";
import RegisterNewDonor from "./User/RegisterNewDonor";
import UserSearch from "./User/UserSearch";
import UserStock from "./User/UserStock";
import Search from "./components/Search";
import SignUp from "./components/SignUp";
import ShowRequest from "./components/ShowRequest";
import BloodRequest from "./User/BloodRequest";

 
class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>ONLINE BLOOD DONATION MANAGEMENT SYSTEM</h1>
            <div className="content">
                    <Route exact path="/" component={Home}/>
                    <Route path="/stuff" component={Stuff}/>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/Login" component={LoginComponent}/>
                    <Route path="/adddonor" component={CreateDonor}/>
                    <Route path="/Donor" component={Donor}/>
                    <Route path="/search" component={Search}/>
                    <Route path="/Stock" component={StockHome}/>
                    <Route path="/exit" component={Home}/>
                    <Route path="/allDonor" component={allDonor}/>
                    <Route path="/updateDonor/:id" component={UpdateDonor}/>
                    <Route path="/increaseStock" component={IncreaseStock}/>
                    <Route path="/decreaseStock" component={DecreaseStock}/>
                    <Route path="/allStock" component={AllStock}/>
                    <Route path="/user" component={UserRegister}/>
                    <Route path="/RegisterNewDonor" component={RegisterNewDonor}/>
                    <Route path="/UserSearch" component={UserSearch}/>
                    <Route path="/UserStock" component={UserStock}/>
                    <Route path="/signUp" component={SignUp}/>
                    <Route path="/showrequest" component={ShowRequest}/>
                    <Route path="/RequestBlood" component={BloodRequest}/>
            </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default Main;