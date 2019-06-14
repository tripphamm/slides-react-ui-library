/* eslint-disable react/jsx-curly-brace-presence */
import React from "react";
import { hot } from "react-hot-loader";

import Reveal from "../custom_modules/reveal/js/reveal";
import "../custom_modules/reveal/css/reveal.css";
import "../custom_modules/reveal/css/theme/black.css";

import Slide from "./components/Slide";
import Code from "./components/Code";
import Emoji from "./components/Emoji";
import ListWithEmojis from "./components/ListWithEmojis";

import reactUILibraryLogo from "./images/react-ui-library.png";
import vpLogo from "./images/vp.png";
import twitterLogo from "./images/twitter.png";
import gitHubLogo from "./images/github.png";

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
                marginBottom: 50
              }}
              src={vpLogo}
              alt="UI Library"
            />
            <h2>UI Team</h2>
          </Slide>
          <Slide>
            <h3>
              <Emoji unicodeOrShortName=":man_raising_hand:" />
            </h3>
            <p className="fragment fade-in">EJ Hammond</p>
            <p className="fragment fade-in" style={{ opacity: 0.6 }}>
              (Front End Developer)
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <p className="fragment fade-in" style={{ marginRight: 20 }}>
                Edward James Hammond
              </p>
              <span>
                <Emoji
                  className="fragment fade-in"
                  unicodeOrShortName=":three:"
                />
              </span>
            </div>
            <div
              className="fragment fade-in"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <img
                className="plain"
                style={{ height: 60 }}
                src={twitterLogo}
                alt="twitter"
              />
              <img
                className="plain"
                style={{ height: 60 }}
                src={gitHubLogo}
                alt="twitter"
              />
              <p>@tripphamm</p>
            </div>
          </Slide>
          <Slide>
            <img
              className="plain"
              style={{
                height: 200,
                marginBottom: 50
              }}
              src={reactUILibraryLogo}
              alt="React UI Library"
            />
            <h2>React VP UI Library</h2>
          </Slide>
          <Slide>
            <h3>What is it?</h3>
            <blockquote className="fragment fade-in">
              React components which produce UI-Library-compliant markup
            </blockquote>
            <Code
              className="fragment fade-in"
              language="html"
              code={`
<TextButton skin="primary" />

// ✨ ⬇️

<button class="textbutton textbutton-skin-primary"></button>
            `}
            />
          </Slide>
          <Slide>
            <h3>
              <Emoji unicodeOrShortName=":hockey:" />
              <Emoji unicodeOrShortName=":goal:" /> Goals
            </h3>
            <p className="fragment fade-in">
              Make it insanely easy for devs to do the right thing
            </p>
            <ListWithEmojis
              animated
              items={[
                {
                  emojiUnicodeOrShortName: ":wheelchair:",
                  text: "Accessibility"
                },
                {
                  emojiUnicodeOrShortName: ":iphone:",
                  text: "Mobile"
                },
                {
                  emojiUnicodeOrShortName: ":nail_care:",
                  text: "Consistent style"
                }
              ]}
            />
          </Slide>
          <Slide>
            <h3>
              <Emoji unicodeOrShortName=":rocket:" /> Version 1.0
            </h3>
            <p className="fragment fade-in" style={{ opacity: 0.6 }}>
              (v1.2.2)
            </p>
            <ListWithEmojis
              animated
              items={[
                {
                  emojiUnicodeOrShortName: ":arrow_down:",
                  text: "Vistaprint Artifactory"
                },
                {
                  emojiUnicodeOrShortName: ":book:",
                  text: "CoreWiki: React UI Library"
                },
                {
                  emojiUnicodeOrShortName: ":speech_balloon:",
                  text: "Slack: #proj-react-ui-library"
                }
              ]}
            />
          </Slide>
          <Slide>
            <h3>Front end resources</h3>
            <ListWithEmojis
              items={[
                {
                  emojiUnicodeOrShortName: ":atom:",
                  text: "#help-reactjs"
                },
                {
                  emojiUnicodeOrShortName: ":desktop:",
                  text: "#sig-front-end"
                },
                {
                  emojiUnicodeOrShortName: ":man_mage:",
                  text: "#guild-front-end"
                }
              ]}
            />
          </Slide>
          <Slide>
            <h3>Thanks!</h3>
          </Slide>
        </div>
      </div>
    );
  }
}

export default hot(module)(App);
