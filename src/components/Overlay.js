import React from "react";

class Overlay extends React.Component {
  render() {
    return (
      <div className="overlay">
        <div className="overlayCard">
          <img
            class="overlayImg"
            src="https://hips.hearstapps.com/hmg-prod/images/gettyimages-1205923822-612x612-1597694031.jpg"
          />
          <h3>We are still working on this...</h3>
          <h5>✨ 🌱 🚀 ✨ 🌱 🚀</h5>
          <p>Please, come back soon!</p>
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
