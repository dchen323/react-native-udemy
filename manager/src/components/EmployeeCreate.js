import React, { Component } from "react";
import { Picker, Text, View } from "react-native";
import { connect } from "react-redux";
import {
  updateText,
  createEmployee,
  udpateEmployee
} from "../actions/EmployeeActions";
import { Card, CardItem, TextField, Button } from "./common";

class EmployeeCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      phone: this.props.phone,
      shift: this.props.shift,
      uid: ""
    };
  }
  addEmployee() {
    const { name, phone, shift } = this.state;
    this.props.createEmployee({ name, phone, shift });
  }

  editEmployee() {
    const { name, phone, shift } = this.state;
    this.props.udpateEmployee({
      name,
      phone,
      shift,
      uid: this.props.employee.uid
    });
  }

  deleteEmployee() {}

  render() {
    const { name, phone, shift } = this.state;
    let button;
    if (this.props.employee) {
      button = (
        <CardItem>
          <Button onPress={this.editEmployee.bind(this)}>Update</Button>
          <Button onPress={this.deleteEmployee.bind(this)}>Delete</Button>
        </CardItem>
      );
    } else {
      button = (
        <CardItem>
          <Button onPress={this.addEmployee.bind(this)}>Create</Button>
        </CardItem>
      );
    }
    return (
      <Card>
        <CardItem>
          <TextField
            label="Name"
            placeholder="Mike"
            value={name}
            onChangeText={name => this.setState({ name })}
          />
        </CardItem>
        <CardItem>
          <TextField
            label="Phone"
            placeholder="281-330-8004"
            value={phone}
            onChangeText={phone => this.setState({ phone })}
          />
        </CardItem>
        <CardItem style={{ flexDirection: "column" }}>
          <Text style={styles.pickerTextStyle}>Shift</Text>
          <Picker
            selectedValue={shift}
            onValueChange={shift => this.setState({ shift })}
          >
            <Picker.Item label="None" value="None" />
            <Picker.Item label="Monday" value="Monday" />
            <Picker.Item label="Tuesday" value="Tuesday" />
            <Picker.Item label="Wednesday" value="Wednesday" />
            <Picker.Item label="Thursday" value="Thursday" />
            <Picker.Item label="Friday" value="Friday" />
            <Picker.Item label="Saturday" value="Saturday" />
            <Picker.Item label="Sunday" value="Sunday" />
          </Picker>
        </CardItem>
        {button}
      </Card>
    );
  }
}

const styles = {
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
};

const mapStateToProps = (state, ownProps) => {
  let name, phone, shift;
  if (ownProps.employee) {
    name = ownProps.employee.name;
    phone = ownProps.employee.phone;
    shift = ownProps.employee.shift;
  } else {
    name = state.employee.name;
    phone = state.employee.phone;
    shift = state.employee.shift;
  }
  return { name, phone, shift };
};

export default connect(
  mapStateToProps,
  {
    updateText,
    createEmployee,
    udpateEmployee
  }
)(EmployeeCreate);
