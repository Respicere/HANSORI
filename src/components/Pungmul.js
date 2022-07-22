import React from "react";
import { useState, useEffect } from "react";

import inst1 from "../asset/instruments/inst1.png";
import inst2 from "../asset/instruments/inst2.png";
import inst3 from "../asset/instruments/inst3.png";
import inst4 from "../asset/instruments/inst4.png";
import inst5 from "../asset/instruments/inst5.png";

import sound1 from "../asset/audio/metal.mp3";
import sound2 from "../asset/audio/janggu.mp3";
import sound3 from "../asset/audio/drum.mp3";
import sound4 from "../asset/audio/jing.mp3";
import sound5 from "../asset/audio/sogo.mp3";

import sound11 from "../asset/audio/metal1.mp3";
import sound22 from "../asset/audio/janggu1.mp3";
import sound33 from "../asset/audio/drum1.mp3";
import sound44 from "../asset/audio/jing1.mp3";
import sound55 from "../asset/audio/sogo1.mp3";

const index = [0, 1, 2, 3, 4];
function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}
shuffle(index);

function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

const _inst = [
  [inst1, "쇠", 0],
  [inst2, "장구", 1],
  [inst3, "북", 2],
  [inst4, "징", 3],
  [inst5, "소고", 4],
];

const _sound1 = [
  new Audio(sound1),
  new Audio(sound2),
  new Audio(sound3),
  new Audio(sound4),
  new Audio(sound5),
];

const _sound2 = [
  new Audio(sound11),
  new Audio(sound22),
  new Audio(sound33),
  new Audio(sound44),
  new Audio(sound55),
];

const _sounds = [_sound1, _sound2];

var _sound = _sound1;

function setSound(soundNum) {
  _sound = _sounds[soundNum];
}

const _size = [
  getRandomNumber(0.1, 0.2),
  getRandomNumber(0.2, 0.3),
  getRandomNumber(0.3, 0.35),
  getRandomNumber(0.1, 0.35),
  getRandomNumber(0.15, 0.25),
];
shuffle(_size);

const _position = [
  getRandomNumber(0.1, 0.3),
  getRandomNumber(0.1, 0.3),
  getRandomNumber(0.1, 0.3),
  getRandomNumber(0.1, 0.3),
];

function Pungmul() {
  const [size, setSize] = useState(window.innerHeight);
  const [checkedButton, setCheckedButton] = useState(0);

  useEffect(() => {
    function handleResize() {
      setSize(
        window.innerWidth > window.innerHeight
          ? window.innerHeight
          : window.innerWidth
      );
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div
        className="contents"
        style={{
          height: "90vh",
        }}
      >
        <div
          className="showName"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translateY(-50%)",
          }}
        >
          <img
            className="inst"
            src={_inst[index[0]][0]}
            alt=""
            style={{ height: _size[0] * size, filter: "invert(100%)" }}
            onClick={() => _sound[index[0]].play()}
          />
          <div className="text">{_inst[index[0]][1]}</div>
        </div>
        <div
          className="showName"
          style={{
            position: "absolute",
            top: window.innerHeight * _position[0],
            left: window.innerWidth * _position[0],
          }}
        >
          <img
            className="inst"
            src={_inst[index[1]][0]}
            alt=""
            style={{ height: _size[1] * size, filter: "invert(100%)" }}
            onClick={() => _sound[index[1]].play()}
          />
          <div className="text">{_inst[index[1]][1]}</div>
        </div>

        <div
          className="showName"
          style={{
            position: "absolute",
            top: window.innerHeight * _position[1],
            right: window.innerWidth * _position[1],
          }}
        >
          <img
            className="inst"
            src={_inst[index[2]][0]}
            alt=""
            style={{ height: _size[2] * size, filter: "invert(100%)" }}
            onClick={() => _sound[index[2]].play()}
          />
          <div className="text">{_inst[index[2]][1]}</div>
        </div>

        <div
          className="showName"
          style={{
            position: "absolute",
            bottom: window.innerHeight * _position[2],
            left: window.innerWidth * _position[2],
          }}
        >
          <img
            className="inst"
            src={_inst[index[3]][0]}
            alt=""
            style={{ height: _size[3] * size, filter: "invert(100%)" }}
            onClick={() => _sound[index[3]].play()}
          />
          <div className="text">{_inst[index[3]][1]}</div>
        </div>

        <div
          className="showName"
          style={{
            position: "absolute",
            bottom: window.innerHeight * _position[3],
            right: window.innerWidth * _position[3],
          }}
        >
          <img
            className="inst"
            src={_inst[index[4]][0]}
            alt=""
            style={{ height: _size[4] * size, filter: "invert(100%)" }}
            onClick={() => _sound[index[4]].play()}
          />
          <div className="text">{_inst[index[4]][1]}</div>
        </div>
      </div>
      <div className="pungmulButtonDiv">
        <button
          className={
            checkedButton === 0
              ? "pungmulButton checkedButton"
              : "pungmulButton"
          }
          onClick={() => {
            setSound(0);
            setCheckedButton(0);
          }}
        >
          SOUND1
        </button>
        <button
          className={
            checkedButton === 1
              ? "pungmulButton checkedButton"
              : "pungmulButton"
          }
          onClick={() => {
            setSound(1);
            setCheckedButton(1);
          }}
        >
          SOUND2
        </button>
      </div>
    </>
  );
}

export default Pungmul;
