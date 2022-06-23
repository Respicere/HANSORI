import React, { Component } from "react";
import main1 from "../asset/main/main1.jpg";
import seal from "../asset/main/seal.png";

import ReactFullpage from "@fullpage/react-fullpage";
import Test from "./Test";
import MainPungmul from "./MainPungmul";

export default class Main2 extends Component {
  render() {
    return (
      <ReactFullpage
        scrollOverflow={true}
        render={({ state, fullpageApi }) => (
          <div id="fullpage-wrapper">
            <div className="section " style={{ backgroundColor: "#FAF0E6" }}>
              <div className="section1 ">
                <div className="mainDiv1 ">
                  <img
                    src={main1}
                    alt=""
                    className="mainImg1"
                    onClick={() => (window.location.href = "/gallery")}
                  />
                  <div className="mainDiv3">
                    동국대학교 공과대 풍물패
                    <br />
                  </div>
                </div>
                <div className="mainDiv4">
                  <MainPungmul />
                  <div className="sealDiv">
                    <img
                      src={seal}
                      className="seal"
                      alt=""
                      onClick={() => {
                        window.location.href = "./about";
                      }}
                    />
                  </div>
                </div>
              </div>

              <div class="arrow" onClick={() => fullpageApi.moveSectionDown()}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>

            <div className="section">
              <Test />
            </div>
          </div>
        )}
      />
    );
  }
}
