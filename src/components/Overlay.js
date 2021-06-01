import React from "react";

class Overlay extends React.Component {
  render() {

    const { name, cname, src, type, description } = this.props.plant; 
    return (
      <div className="overlay">
        <div className="overlayCard">
          <img
            className="overlayImg" alt="plant"
            src={src}
          />
          <h2>{name}</h2>
          <h3>{cname}</h3>
          <p>{type}</p>
          <p>{description}</p>
        </div>
        <button
          className="closeBtn"
          onClick={() => {
            this.props.handleClose();
          }}
        >
          X
        </button>
      </div>
    );
  }
}

export default Overlay;
