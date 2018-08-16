import React, { Component } from "react";
import { View, Text } from "react-native";
import { Card, CardItem, TextField, Button } from "common";

class EmployeeCreate extends Component {
  render() {
    return (
      <Card>
        <CardItem>
          <Input label="Name" placeholder="Mike" />
        </CardItem>
        <CardItem>
          <Input label="Phone" placeholder="281-330-8004" />
        </CardItem>
        <CardItem>Test</CardItem>
        <CardItem>Test</CardItem>
      </Card>
    );
  }
}

export default EmployeeCreate;
