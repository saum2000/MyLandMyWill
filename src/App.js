import "./App.css";
import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import bkg from "./components/photos/bkg.jpg";
import AdminScreen from "./screens/admin";
import Homescreen from "./screens/home";
//import LoginScreen from './screens/Login';

class App extends Component {
  render() {
    return (
      <Router>
        <div
          style={{
            backgroundImage: `url(${bkg})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "repeat",
            zIndex: "-1",
            overflowX: "hidden",
            height: "100%",
            minHeight: "100vh",
          }}
        >
          <div>
            <Header />{" "}
            <Switch>
              <Route exact path="/" component={Homescreen} />{" "}
              <Route path="/admin" component={AdminScreen} />{" "}
            </Switch>{" "}{" "}
            {/* <AdminScreen/>
                            <Homescreen/> {" "} */}{" "}
          </div>{" "}
          <div class="Foot">
            {" "}
            <Footer />
          </div>{" "}
        </div>{" "}
      </Router>
    );
  }
}
render(<App />, document.getElementById("root"));
export default App;
