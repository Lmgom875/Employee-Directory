//! Import React and style files
import React, { Component } from "react";
import { Grid, Search } from "semantic-ui-react";


class SearchBar extends Component {
   
    render() {
    return (
        <Grid>
        <Grid.Column width={6}>
          <Search
            onResultSelect={this.handleResultSelect}
            //onSearchChange={(this.props.handleSearchChange())}
            //results={results}
            //value={value}
            //{...this.props}
          />
        </Grid.Column>
        {/* <Grid.Column width={10}>
          <Segment>
            <Header>State</Header>
            <pre style={{ overflowX: 'auto' }}>
              {JSON.stringify(this.state, null, 2)}
            </pre>
            <Header>Options</Header>
            <pre style={{ overflowX: 'auto' }}>
              {JSON.stringify(source, null, 2)}
            </pre>
          </Segment>
        </Grid.Column> */}
      </Grid>
    );
  }
}

export default SearchBar;
