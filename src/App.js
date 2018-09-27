/* eslint-disable react/jsx-curly-brace-presence */
import React from 'react';
import { hot } from 'react-hot-loader';

import Reveal from '../custom_modules/reveal/js/reveal';
import '../custom_modules/reveal/css/reveal.css';
import '../custom_modules/reveal/css/theme/black.css';

import Slide from './components/Slide';
import Code from './components/Code';
import ListWithEmojis from './components/ListWithEmojis';

import reduxLogo from './images/redux-logo.svg';
import reduxComparison from './images/redux-comparison.png';
import reduxPatternDiagram from './images/redux-pattern-diagram.png';

class App extends React.Component {
  componentDidMount() {
    Reveal.initialize();
  }

  render() {
    return (
      <div className="reveal">
        <div className="slides">
          <Slide>
            <img
              className="plain"
              style={{
                height: 200,
              }}
              src={reduxLogo}
              alt="Redux"
            />
            <h1>Redux</h1>
            <p>EJ Hammond</p>
          </Slide>
          <Slide>
            <h3>Agenda</h3>
            <ListWithEmojis
              items={[
                {
                  emojiUnicodeOrShortName: ':clock:',
                  text: 'History of state management in js',
                },
                {
                  emojiUnicodeOrShortName: ':sunglasses:',
                  text: 'What\'s so cool about Redux?',
                },
                {
                  emojiUnicodeOrShortName: ':computer:',
                  text: 'Code walkthrough',
                },
              ]}
            />
          </Slide>
          <Slide>
            <h3>Example Todo API</h3>
            <Code
              language="json"
              code={`
[
  { id: 1, completed: true, description: "Get milk" },
  { id: 2, completed: false, description: "Do homework" }
]
              `}
            />
          </Slide>
          <Slide>
            <h3>2006 JQuery</h3>
            <Code
              language="javascript"
              code={`
$.getJSON('/todos', (todos) => {
  todos.forEach((todo) => {
    const $element = $('<div></div>');
    $element.attr('data-id', todo.id);
    if (todo.completed) {
      $element.addClass('completed');
    } else {
      $element.addClass('incomplete');
    }
    $element.text(todo.description);
    $('body').append($element);
  });
});
              `}
            />
          </Slide>
          <Slide>
            <h3><i>&quot;You can&apos;t handle the truth!&quot;</i></h3>
            <p>The state (truth) is in the DOM</p>
            <Code
              language="html"
              code={`
<body>
  <div class="completed" data-id="1">Get milk</div>
  <div class="incomplete" data-id="2">Do homework</div>
</body>
              `}
            />
          </Slide>
          <Slide>
            <h3>This is not great...</h3>
            <ListWithEmojis
              animated
              items={[
                {
                  emojiUnicodeOrShortName: ':sob:',
                  text: 'Changes in mark-up can easily break logic',
                },
                {
                  emojiUnicodeOrShortName: ':dizzy_face:',
                  text: 'State changes are hard to track',
                },
                {
                  emojiUnicodeOrShortName: ':thinking:',
                  text: 'It\'s hard to reproduce bugs',
                },
              ]}
            />
          </Slide>
          <Slide>
            <h3>2010 Backbone</h3>
            <p>Store state in models</p>
            <Code
              language="javascript"
              code={`
const todos = await fetch('/todos');
todos.forEach((todo) => {
  const todoModel = new TodoModel({
    id: todo.id,
    description: todo.description,
    completed: todo.completed,
  });
});
              `}
            />
          </Slide>
          <Slide>
            <h3>State is out of the DOM, but...</h3>
            <ListWithEmojis
              animated
              items={[
                {
                  emojiUnicodeOrShortName: ':dizzy_face:',
                  // models/collections/views can all update state
                  text: 'State changes are still hard to track',
                },
                {
                  emojiUnicodeOrShortName: ':thinking:',
                  // state is distributed across multiple models
                  text: 'It\'s still hard to reproduce bugs',
                },
              ]}
            />
          </Slide>
          <Slide>
            <h3>2013 React (without Redux)</h3>
            <p>Only self and parents can update state</p>
            <Code
              language="javascript"
              code={`
class Todos extends React.Component {
  ...
  componentDidMount() {
    fetch('/todos').then((todos) => {
      this.setState({
        todos,
      });
    });

    render() {
      return (
        <div>
          {this.state.todos.map((todo) => {
            <div
              key={todo.id}
              className={todo.completed ? 'completed' : 'incomplete'}
            >
              {todo.description}
            </div>
          })}
        </div>
      )
    }
  }
}
              `}
            />
          </Slide>
          <Slide>
            <h3>State changes are easier to track, but...</h3>
            <ListWithEmojis
              animated
              items={[
                {
                  emojiUnicodeOrShortName: ':thinking:',
                  // state is distributed across multiple components
                  text: 'It\'s still hard to reproduce bugs',
                },
                {
                  emojiUnicodeOrShortName: ':man_shrugging:',
                  // state must be "lifted" and passed as props
                  text: 'It\'s cumbersome to share state between components',
                },
              ]}
            />
          </Slide>
          <Slide>
            <h3>2015 React + Redux</h3>
            <img src={reduxComparison} alt="Redux comparison" />
            <caption
              style={{
                display: 'block',
                fontSize: '0.3em',
                height: '70vh',
              }}
            >
              https://css-tricks.com/learning-react-redux/ (modified)
            </caption>
          </Slide>
          <Slide>
            <h3>2015 React + Redux</h3>
            <img src={reduxPatternDiagram} alt="Redux pattern" />
            <caption
              style={{
                display: 'block',
                fontSize: '0.3em',
              }}
            >
              https://angularfirebase.com/lessons/angular-ngrx-redux-starter-guide/
            </caption>
          </Slide>
        </div>
      </div>
    );
  }
}

export default hot(module)(App);
