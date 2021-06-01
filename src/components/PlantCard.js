import React from "react";

class Plant extends React.Component {

  getId = () => {
    this.props.handleClick(this.props.plant.id); 
  }

  

  render() {

    const { src, name, cname, type } = this.props.plant; 

    return (
      <div className="plantCard">
        <img src={src} alt="plant"/>
        <h3>{name}</h3>
        <h5>{cname}</h5>
        <p>{type}</p>
        <button onClick={this.getId}>
          Read more
        </button>
      </div>
    );
  }
}

export default Plant;
