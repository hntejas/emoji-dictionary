import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "🐶": "Dog",
  "🐧": "Penguin",
  "🐦": "Bird",
  "🙈": "Monkey doesn't see evil",
  "🙉": "Monkey doesn't hear evil",
  "🙊": "Monkey doesn't speak evil",
  "🐤": "Chick",
  "🐣": "Chick",
  "🐥": "Koli mari",
  "🦆": "Duck",
  "🦅": "Eagle",
  "🐱": "Cat",
  "🐭": "Rat",
  "🐹": "Hamster",
  "🐰": "Rabbit",
  "🦊": "Fox",
  "🐻": "Bear",
  "🐼": "Panda",
  "🐨": "Koala",
  "🐯": "Tiger",
  "🦁": "Lion",
  "🐮": "Cow",
  "🐷": "Piglet",
  "🐽": "Snout",
  "🐸": "Frog",
  "🐵": "Monkey",
  "🐒": "Monkey sit",
  "🐺": "Wolf",
  "🐗": "Horned pig",
  "🐴": "Horse",
  "🦄": "Unicorn",
  "🐢": "Tortoise",
  "🐍": "Snake",
  "🐙": "Octopus",
  "🦑": "Squid",
  "🐡": "Puffer fish",
  "🐠": "Fish",
  "🐟": "Blue fish",
  "🐬": "Dolfin",
  "🐳": "Happy Whale",
  "🐋": "whale",
  "🦈": "Shark",
  "🐊": "Crocodile",
  "🐅": "Tiger",
  "🐆": "Cheetah",
  "🦍": "Gorilla",
  "🐘": "Elephant",
  "🦏": "Rhino",
  "🐪": "Camel",
  "🐫": "Camel",
  "🐃": "Buffalo",
  "🐂": "Ox",
  "🐄": "Cow",
  "🐎": "Horse",
  "🐖": "Piggy",
  "🐏": "Sheep",
  "🐑": "Sheep",
  "🐐": "Goat",
  "🦌": "Deer",
  "🐕": "Dog",
  "🐩": "Sheep Dog",
  "🐈": "Cat"
};

export default function App() {
  const [userInputEmoji, setUserInputEmoji] = useState("");
  const [userEmojiMeaning, setUserEmojiMeaning] = useState("");

  function inputChangeHandler(event) {
    var userInput = event.target.value;
    var matchedEmojiMeaning = emojiDictionary[userInput];
    setUserInputEmoji(userInput);
    if (matchedEmojiMeaning) {
      setUserEmojiMeaning(matchedEmojiMeaning);
    } else {
      setUserEmojiMeaning("Ops! Emoji description not available");
    }
  }

  function selectInputHandler(emoji) {
    var userInput = emoji;
    var matchedEmojiMeaning = emojiDictionary[userInput];
    setUserInputEmoji(userInput);
    if (matchedEmojiMeaning) {
      setUserEmojiMeaning(matchedEmojiMeaning);
    }
  }

  return (
    <div className="App">
      <h1>Emoji Dictionary</h1>
      <input
        onChange={inputChangeHandler}
        placeholder="Enter an Emoji"
        value={userInputEmoji}
      ></input>
      <h2>{userEmojiMeaning}</h2>

      <h2>Emojis we support</h2>
      <div style={{ width: "80%", margin: "auto" }}>
        {Object.keys(emojiDictionary).map((emoji, index) => (
          <span
            key={index}
            style={{ padding: "0.5rem", display: "inline-block" }}
            onClick={() => selectInputHandler(emoji)}
          >
            {emoji}
          </span>
        ))}
      </div>
    </div>
  );
}
