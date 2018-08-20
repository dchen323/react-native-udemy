import React, { Component } from "react";
import { Picker, Text, View } from "react-native";
import { text } from "react-native-communications";
import { connect } from "react-redux";
import { createEmployee, udpateEmployee } from "../actions/EmployeeActions";
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

  textEmployee() {
    const { phone, shift } = this.state;
    text(phone, `Your upcoming shift is on ${shift}`);
  }

  deleteEmployee() {}

  render() {
    const { name, phone, shift } = this.state;
    let button;
    if (this.props.employee) {
      button = (
        <Card style={styles.containerStyle}>
          <CardItem>
            <Button onPress={this.editEmployee.bind(this)}>Update</Button>
            <Button onPress={this.textEmployee.bind(this)}>Text</Button>
          </CardItem>
          <CardItem>
            <Button onPress={this.deleteEmployee.bind(this)}>Delete</Button>
          </CardItem>
        </Card>
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
  },
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#ddd",
    borderBottomWidth: 0,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 0.5,
    marginRight: 0.5,
    marginTop: 0.5
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
    createEmployee,
    udpateEmployee
  }
)(EmployeeCreate);
