import React, { Component } from "react";
import { ListView } from "react-native";
import _ from "lodash";
import { connect } from "react-redux";
import { fetchEmployees } from "../actions/EmployeeActions";
import EmployeeListItem from "./EmployeeListItem";

class EmployeeList extends Component {
  componentDidMount() {
    this.props.fetchEmployees();
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ employees }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(employees);
  }

  renderRow(employee) {
    return <EmployeeListItem employee={employee} />;
  }

  render() {
    if (!this.dataSource) {
      this.createDataSource(this.props);
    }
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

const mapStateToProps = state => {
  const employees = _.map(state.employees, (val, uid) => ({
    ...val,
    uid
  }));

  return { employees };
};

export default connect(
  mapStateToProps,
  { fetchEmployees }
)(EmployeeList);
