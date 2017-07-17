import React from "react";

class InstaImage extends React.Component {
  render() {
    return(
      <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
        <div className="photo-box">
            <img src={ this.props.src } />
            <div className="caption">{ this.props.caption } </div>
        </div>
      </div>
    );
  }
}

export default InstaImage;
