import React, { Component } from 'react';
import { random } from 'lodash';
import Machine from './components/Machine';
import '@fontsource/roboto';
import { Grid } from '@mui/material';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [],
      index: '',
    }
  }

  randomQuoteIndex = () => random(0, this.state.array.length - 1);
//   or Math.floor(Math.random() * this.state.array.length - 1)

  quoteIndex = () => this.setState({index: this.randomQuoteIndex()});

  componentDidMount = () =>
    fetch("https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json")
    .then(data => data.json())
    .then(array => this.setState({array}, this.quoteIndex()));

  get quote() {return this.state.array[this.state.index]}

  render() {
    return (
      <Grid
      container
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      id="quote-box">
        <Grid item xs={12} sm={6}>
          {this.quote ? <Machine theQuote={this.quote} theIndex={this.quoteIndex}/> : null}
        </Grid>
      </Grid>
    );
  }
}


export default App;
