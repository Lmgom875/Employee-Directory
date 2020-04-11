//! Import React and style files
import React, { Component } from "react";
import "./App.css";
import { Header, Icon, Divider, Container } from "semantic-ui-react";

//! Import component
import UsersTable from "./components/UsersTable";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header as="h2" icon textAlign="center">
          <Icon name="users" circular />
          <Header.Content>Employees Directory</Header.Content>
        </Header>
        <Divider />
        <Container>
          <UsersTable />
        </Container>
      </div>
    );
  }
}

export default App;
