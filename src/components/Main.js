import React from "react";
import PlantCard from "./PlantCard";
import PlantsData from "./PlantsData";
import Overlay from "./Overlay";

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      overlay: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClick(text) {
    this.setState((prevState) => {
      return {
        overlay: !prevState.overlay,
      };
    });
  }

  handleClose() {
    this.setState({ overlay: false });
  }
  render() {
    const plantsData = PlantsData.map((plant) => {
      return (
        <PlantCard
          id={plant.id}
          name={plant.name}
          cname={plant.cname}
          src={plant.src}
          type={plant.type}
          handleClick={this.handleClick}
        />
      );
    });
    return (
      <div className="main">
        <h2>Explore the plants!</h2>
        <div className="container cardsContainer">{plantsData}</div>
        {this.state.overlay ? <Overlay handleClose={this.handleClose} /> : ""}
      </div>
    );
  }
}

export default Main;
