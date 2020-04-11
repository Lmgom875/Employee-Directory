//! Import React and style files
import React, { Component } from "react";
import { Table } from "semantic-ui-react";


class UserTableRow extends Component {
  render() {
    const { user } = this.props;
    return (
      <Table.Row>
        <Table.Cell className= "center aligned"> <img src={ user.picture.thumbnail } alt= "user-face" /> </Table.Cell>
        <Table.Cell>
          {user.name}
        </Table.Cell>
        <Table.Cell>{user.phone}</Table.Cell>
        <Table.Cell>{user.email}</Table.Cell>
        <Table.Cell>{user.dob.date}</Table.Cell>
      </Table.Row>
    );
  }
}

export default UserTableRow;
