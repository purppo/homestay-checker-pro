"use strict";

import React  from 'react';
import ReactDOM  from 'react-dom';
import $      from 'jquery';
import marked from 'marked';

class QuestionBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: []};
  }

  loadQuestionsFromServer() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: data => this.setState({data: data}),
      error: (xhr, status, err) => console.error(this.props.url, status, err.toString())
    });
  }

  handleQuestionSubmit(question) {
    let questions = this.state.data;
    question.id = Date.now();
    let newQuestions = questions.concat([question]);
    this.setState({data: newQuestions});
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      type: 'POST',
      data: question,
      success: data => this.setState({data: data}),
      error: (xhr, status, err) => {this.setState({data: questions}); console.error(this.props.url, status, err.toString())}
    });
  }

  componentDidMount() {
    this.loadQuestionsFromServer();
    //setInterval( () => this.loadQuestionsFromServer(), this.props.pollInterval );
  }

  render() {
    return (
      <div className="questionBox">
        <h1>Questions</h1>
        <QuestionList data={this.state.data}/>
        <QuestionForm onQuestionSubmit={this.handleQuestionSubmit.bind(this)} />
      </div>
    );
  }
}

class QuestionList extends React.Component {
  render() {
    let questionNodes = this.props.data.map( question => {
      return (
        <Question key={question.no}>
          {question.q}
        </Question>
      );
    });
    return (
      <div className="questionList">
        {questionNodes}
      </div>
    );
  }
}

class Question extends React.Component {
  render() {
    let rawMarkup = marked(this.props.children.toString(), {sanitize: true});
    return (
      <div className="question">
        <span dangerouslySetInnerHTML={{__html: rawMarkup}} />
      </div>
    );
  }
}

class QuestionForm extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    let author = ReactDOM.findDOMNode(this.refs.author).value.trim();
    let text   = ReactDOM.findDOMNode(this.refs.text).value.trim();
    if (!text || !author) {
      return;
    }
    this.props.onQuestionSubmit({author: author, text: text});
    ReactDOM.findDOMNode(this.refs.author).value = '';
    ReactDOM.findDOMNode(this.refs.text).value   = '';
    return;
  }

  render() {
    return (
      <form className="questionForm" onSubmit={this.handleSubmit.bind(this)}>
        <input type="text" placeholder="Your name" ref="author" />
        <input type="text" placeholder="Say something..." ref="text" />
        <input type="submit" value="Post" />
      </form>
    );
  }
}



ReactDOM.render(
  <QuestionBox url="/photo" pollInterval={2000} />,
  document.getElementById('content')
);
