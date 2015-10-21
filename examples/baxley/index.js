'use strict'

var React = require('react')
  , ReactDOM = require('react-dom')
  , TranscriptPlayer = require('react-transcript-player')
  , transcript = require('./media/transcript.json')

ReactDOM.render(
  React.createElement(
    TranscriptPlayer, {transcript: transcript, maxHeight: 600}),
  document.getElementById('mount'))