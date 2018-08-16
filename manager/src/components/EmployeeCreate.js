import React, { Component } from "react";
import { Picker, Text } from "react-native";
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
        <CardItem style={{ flexDirection: "column" }}>
          <Text style={styles.pickerTextStyle}>Shift</Text>
          <Picker
            selectedValue={this.props.shift}
            onValueChange={day =>
              this.props.updateEmployee({ prop: "shift", value: day })
            }
          >
            <Picker.Item label="Monday" value="Monday" />
            <Picker.Item label="Tuesday" value="Tuesday" />
            <Picker.Item label="Wednesday" value="Wednesday" />
            <Picker.Item label="Thursday" value="Thursday" />
            <Picker.Item label="Friday" value="Friday" />
            <Picker.Item label="Saturday" value="Saturday" />
            <Picker.Item label="Sunday" value="Sunday" />
          </Picker>
        </CardItem>
        <CardItem>
          <Button>Create</Button>
        </CardItem>
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
  { updateEmployee }
)(EmployeeCreate);
