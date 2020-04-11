import React, { Component } from "react";

import { Table} from "semantic-ui-react";

class UsersTableHeader extends Component {
    render() {
        return (
            <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Picture</Table.HeaderCell>
            <Table.HeaderCell
            //sorted={column === 'name' ? direction : null}
            //onClick={this.handleSort('name')}
            >
              Name
            </Table.HeaderCell>
            <Table.HeaderCell>Phone</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>Date of Birth</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        )
    }
}

export default UsersTableHeader;