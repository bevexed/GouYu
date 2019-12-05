import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Button} from "antd-mobile";

class MyComponent extends Component {
  render() {
    return (
      <div>
       <Button>123</Button>
      </div>
    );
  }
}


export default connect(
)(MyComponent);
