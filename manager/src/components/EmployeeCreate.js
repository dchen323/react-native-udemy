import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import { updateEmployee } from "../actions/EmployeeActions";
import { Card, CardItem, TextField, Button } from "./common";

class EmployeeCreate extends Component {
  render() {
    return (
      <Card>
        <CardItem>
          <TextField
            label="Name"
            placeholder="Mike"
            value={this.props.name}
            onChangeText={text =>
              this.props.updateEmployee({ prop: "name", value: text })
            }
          />
        </CardItem>
        <CardItem>
          <TextField
            label="Phone"
            placeholder="281-330-8004"
            value={this.props.phone}
            onChangeText={text =>
              this.props.updateEmployee({ prop: "phone", value: text })
            }
          />
        </CardItem>
        <CardItem />
        <CardItem>
          <Button>Create</Button>
        </CardItem>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  const { name, phone, shift } = state.employee;
  return { name, phone, shift };
};

export default connect(
  mapStateToProps,
  { updateEmployee }
)(EmployeeCreate);
