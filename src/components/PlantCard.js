import React from "react";

class Plant extends React.Component {
  getId = () => {
    this.props.handleClick(this.props.plant.id);
  };

  render() {
    const { src, name, type } = this.props.plant;

    return (
      <div className="plantCard">
        <div className="cardImg">
          <img src={src} alt="plant" />
        </div>
        <div className="cardText">
          <h3>{name}</h3>
          <p>{type}</p>
          <button onClick={this.getId}>Read more</button>
        </div>
      </div>
    );
  }
}

export default Plant;
