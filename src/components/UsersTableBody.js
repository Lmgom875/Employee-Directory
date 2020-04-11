//! Import React and style files
import React, { Component } from "react";
import { Table, } from "semantic-ui-react";

//! Import component
import UserTableRow from "./UserTableRow";

//!Import database
import users from "../DataBase/users.json";

class UsersTableBody extends Component {

//todo Ask: Is constructor and super ids needed for uses state in a child component?
constructor() {
  super();
  this.state = {
    users: [],
  };
}

componentDidMount() {
  this.getUsers();
}

getUsers() {
  //console.log(users);
  this.setState({ users });
}


    render() {
      const { users } = this.state;
        return (
            <Table.Body>
              {users.map(user => <UserTableRow key={ user.id } user={ user } />)}
          </Table.Body> 
        )
    }
}

export default UsersTableBody;