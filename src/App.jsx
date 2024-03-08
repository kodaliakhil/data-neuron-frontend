import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header/Header";
import { Resizable } from "re-resizable";
import { getData } from "./services/Service";
import { useEffect, useState } from "react";

function App() {
  return (
    <>
      <Header />
      <div
        style={{ overflow: "hidden" }}
        className="p-5 d-flex flex-column flex-wrap"
      >
        <div className="d-flex flex-wrap">
          <Resizable
            id={"item1"}
            className="m-3 flex-grow-1 shadow-lg "
            defaultSize={{
              width: 300,
              height: 300,
            }}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "solid 3px black",
              background: "#f0f0f0",
            }}
          >
            <div className="d-flex flex-column align-items-center  container-card ">
              <img
                alt="laptop"
                className="image"
                src="https://images.pexels.com/photos/193350/pexels-photo-193350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
            </div>
          </Resizable>

          <Resizable
            id={"item2"}
            className="m-3 flex-grow-1 shadow "
            defaultSize={{
              width: 300,
              height: 300,
            }}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "solid 3px black",
              background: "#f0f0f0",
            }}
          >
            <div className="d-flex flex-column align-items-center  container-card ">
              <img
                alt="neuron"
                className="image"
                src="https://images.pexels.com/photos/17485657/pexels-photo-17485657/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-image-depicts-how-ai-could-adapt-to-an-infinite-amount-of-uses-it-was-created-by-nidia-dias-as-part-of-the-visualising-ai-pr.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
            </div>
          </Resizable>
        </div>

        <Resizable
          id={"item3"}
          className="m-3 flex-grow-1 bg-light shadow"
          defaultSize={{
            width: "100%",
            height: 300,
          }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "solid 3px black",
            background: "#f0f0f0",
          }}
        >
          <div className="d-flex flex-column align-items-center  container-card ">
            <img
              alt="neuron"
              className="image"
              src="https://images.pexels.com/photos/681335/pexels-photo-681335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
          </div>
        </Resizable>
      </div>
    </>
  );
}

export default App;
