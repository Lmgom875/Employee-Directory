//! Import React and style files
import React, { Component } from "react";
import { Table } from "semantic-ui-react";

//!Import database
import users from "../DataBase/users.json";

//! Import component
import UsersTableHeader from "./UsersTableHeader";
import UsersTableBody from "./UsersTableBody";
class UsersTable extends Component {

  //todo Ask: Is constructor and super ids needed for uses state in a child component?
  constructor() {
    super();
    this.state = {
      users: [],
      column: null,
      direction: null,
    };
  }
  //!Fake API call
  componentDidMount() {
    this.getUsers();
  }
  //!Set the state to the DB Array
  getUsers() {
    this.setState({ users });
  }



  handleSort = () => () => {
    const { direction } = this.state
    
    if (direction !== "ascending") {
      const usersAlpha = users.sort((a, b) => a.name !== b.name ? a.name < b.name ? -1 : 1 :0);
      this.setState({
        users: usersAlpha,
        direction: "ascending",
      })

      return
    }

    this.setState({
      users: users.reverse(),
      direction: "descending",
    })
   }


  render() {
    const usersState = this.state;
    return (
      <Table sortable celled fixed>
        <UsersTableHeader user={ usersState }  handleSort={ this.handleSort }/>
        <UsersTableBody user= { users }/>
      </Table>
    );
  }
}

export default UsersTable;
