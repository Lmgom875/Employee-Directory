//! Import React and style files
import React, { Component } from "react";
import { Table, } from "semantic-ui-react";

//! Import component
import UserTableRow from "./UserTableRow";

class UsersTableBody extends Component {
    render() {
        return (
            <Table.Body>
                <UserTableRow />
          </Table.Body> 
        )
    }
}

export default UsersTableBody;