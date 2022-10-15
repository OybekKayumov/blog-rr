import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions";

class UserHeader extends Component {
  render() {
    return(
      <div>
        UserHeader
      </div>
    )
  }
}

export default connect(null, { fetchUser })(UserHeader);
 