require('medium-editor/dist/css/medium-editor.css');
require('medium-editor/dist/css/themes/default.css');
var React = require('react');
var Editor = require('react-medium-editor');

var App = React.createClass({
  getInitialState() {
    return {text: 'Fusce dapibus, tellus ac cursus commodo'}
  },

  render() {
    return (
      <div>
        <div>{this.state.text}</div>
        <Editor text={this.state.text}
          onChange={this.handleChange}
          options={{buttons: ['bold', 'italic', 'underline']}}/>
      </div>
    );
  },

  handleChange(text) {
    this.setState({text: text});
  }
});

React.render(<App/>, document.body);
