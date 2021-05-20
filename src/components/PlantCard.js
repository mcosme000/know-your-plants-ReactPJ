import React from "react";

class Plant extends React.Component {
  render() {
    return (
      <div className="plantCard">
        <img src={this.props.src} />
        <h3>{this.props.name}</h3>
        <h5>{this.props.cname}</h5>
        <p>{this.props.type}</p>
        <button
          onClick={() => {
            this.props.handleClick();
          }}
        >
          Read more
        </button>
      </div>
    );
  }
}

export default Plant;
