//! Import React and style files
import React, { Component } from "react";
import { Table } from "semantic-ui-react";

//!Import component

class UserTableRow extends Component {
  render() {
    return (
      <Table.Row>
        <Table.Cell>Foto</Table.Cell>
        <Table.Cell>Luis Gomez</Table.Cell>
        <Table.Cell>860-518-2298</Table.Cell>
        <Table.Cell>lmgom875@gmail.com</Table.Cell>
        <Table.Cell>10/20/1976</Table.Cell>
      </Table.Row>

     /* { {_.map(data, ({ age, gender, name }) => (
              <Table.Row key={name}>
                <Table.Cell>{name}</Table.Cell>
                <Table.Cell>{age}</Table.Cell>
                <Table.Cell>{gender}</Table.Cell>
              </Table.Row>
            ))} }*/
    )
  }
}

export default UserTableRow;
