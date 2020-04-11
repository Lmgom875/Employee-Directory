//! Import React and style files
import React, { Component } from "react";
import { Table } from "semantic-ui-react";

//! Import component
import UsersTableHeader from "./UsersTableHeader";
import UsersTableBody from "./UsersTableBody";

class UsersTable extends Component {
  render() {
    return (
      <Table sortable celled fixed>
        <UsersTableHeader />
        <UsersTableBody />
      </Table>
    );
  }
}

export default UsersTable;
