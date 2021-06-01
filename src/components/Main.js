import React from "react";
import PlantCard from "./PlantCard";
import PlantsData from "./PlantsData";
import Overlay from "./Overlay";

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      overlay: false,
      number: "", 
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClick(id) {
    this.setState({number: id}); 
    this.setState((prevState) => {
      return {
        overlay: !prevState.overlay,
      };
    });
    
    console.log(this.state.number); 
  }

  handleClose() {
    this.setState({ overlay: false });
  }
  render() {
    const plantsData = PlantsData.map((plant, id) => {
      return (
        <PlantCard 
          key={id}
          plant={plant}
          handleClick={this.handleClick}
        />
      );
    });
    return (
      <div className="main">
        <h2>Explore the plants!</h2>
        <div className="container cardsContainer">{plantsData}</div>
        {this.state.overlay ? <Overlay plant={PlantsData[this.state.number]} handleClose={this.handleClose} /> : ""}
      </div>
    );
  }
}

export default Main;
