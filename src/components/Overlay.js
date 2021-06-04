import React from "react";

class Overlay extends React.Component {
  render() {
    const { name, cname, src, type, description } = this.props.plant;
    return (
      <div className="overlay">
        <div className="overlayCard">
          <div className="overlayImg">
            <img alt="plant" src={src} />
          </div>
          <div className="overlayText">
            <h2 className="common">{name}</h2>
            <h4 className="cname">Scientific name: {cname}</h4>
            <h4>Best for {type}</h4>
            <p>{description}</p>
          </div>
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
