import React from "react";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Main from "./components/Main";
import Footer from "./components/Footer";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Main handleClick={this.handleClick} />
        <Footer />
      </div>
    );
  }
}

export default App;
