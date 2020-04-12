//! Import React and style files
import React, { Component } from "react";
import { Table, } from "semantic-ui-react";

//! Import component
import UserTableRow from "./UserTableRow";



class UsersTableBody extends Component {

    render() {
      const props = this.props;
        return (
            <Table.Body>
              {props.user.map(user => <UserTableRow key={ user.id } user={ user } />)}
          </Table.Body> 
        )
    }
}

export default UsersTableBody;