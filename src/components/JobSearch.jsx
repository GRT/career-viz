import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/ActionCreators';
import { doGet } from '../requests/RequestBuilder.jsx';

class JobSearch extends Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this._handleChange.bind(this);
    this.handleSubmit = this._handleSubmit.bind(this);
    this._getJobsList = this._getJobsList.bind(this);
  }

  error (e) {
    throw e;
  }

  _getJobsList(jobTitle) {
    doGet(this.error, 'title/' + jobTitle,
      response => {
        this.props.setJobListRes(response);
        // this.props.setViewState();
      });
  }

  _handleChange(event) {
    this.setState({value: event.target.value});
  }

  _handleSubmit(event) {
    event.preventDefault();
    this._getJobsList(this.state.value);
  }

  render() {
    return (
      <div>
        <div>What kind of a job are you looking for?</div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.value} onChange={this.handleChange} />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

JobSearch.propTypes = {
  setJobListRes: PropTypes.func,
  setViewState: PropTypes.func
};

function mapStateToProps(state){
  return {
    data: state.data,
    view: state.view
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(JobSearch);
