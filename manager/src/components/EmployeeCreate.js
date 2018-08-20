import React, { Component } from "react";
import { Picker, Text, View } from "react-native";
import { connect } from "react-redux";
import { updateText, createEmployee } from "../actions/EmployeeActions";
import { Card, CardItem, TextField, Button } from "./common";

class EmployeeCreate extends Component {
  addEmployee() {
    const { name, phone, shift } = this.props;
    this.props.createEmployee({ name, phone, shift });
  }

  editEmployee() {
    const { name, phone, shift } = this.props;
    this.props.updateText({
      name,
      phone,
      shift,
      uid: this.props.employee.uid
    });
  }

  deleteEmployee() {}

  render() {
    console.log(this.props);
    let name, phone, shift, button;
    if (this.props.employee) {
      name = this.props.employee.name;
      phone = this.props.employee.phone;
      shift = this.props.employee.shift;
      button = (
        <CardItem>
          <Button onPress={this.editEmployee.bind(this)}>Update</Button>
          <Button onPress={this.deleteEmployee.bind(this)}>Delete</Button>
        </CardItem>
      );
    } else {
      name = this.props.name;
      phone = this.props.phone;
      shift = this.props.shift;
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
            onChangeText={text =>
              this.props.updateText({ prop: "name", value: text })
            }
          />
        </CardItem>
        <CardItem>
          <TextField
            label="Phone"
            placeholder="281-330-8004"
            value={phone}
            onChangeText={text =>
              this.props.updateText({ prop: "phone", value: text })
            }
          />
        </CardItem>
        <CardItem style={{ flexDirection: "column" }}>
          <Text style={styles.pickerTextStyle}>Shift</Text>
          <Picker
            selectedValue={shift}
            onValueChange={day =>
              this.props.updateText({ prop: "shift", value: day })
            }
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

const mapStateToProps = state => {
  const { name, phone, shift } = state.employee;
  return { name, phone, shift };
};

export default connect(
  mapStateToProps,
  {
    updateText,
    createEmployee
  }
)(EmployeeCreate);
