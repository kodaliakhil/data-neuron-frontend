import { useState } from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header/Header";
import ResizableContainer from "./components/resizableContainer/ResizableContainer";

function App() {
  return (
    <>
      <Header />
      <div
        style={{ overflow: "hidden" }}
        className="p-5 d-flex flex-row flex-wrap"
      >
        <ResizableContainer
          id={"item1"}
          className="m-3 flex-grow-1 shadow-lg bg-secondary"
          defaultSize={{
            width: Math.floor(parseInt(window.innerWidth) / 2) - 200,
            height: 300,
          }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "solid 1px #ddd",
            background: "#f0f0f0",
          }}
        >
          <div className="d-flex flex-column align-items-center bg-secondary container-card p-5">
            <img
              alt="neuron"
              className="image1"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaSbmLkVlC-LbDJuspssq8bc3nigBD_FSlEwMiWAn-LEO6L0tSgo0QV6zVcF4GYjMaDjg&usqp=CAU"
            />
            {/* <p className="text-light my-2 ">{data?.description}</p> */}
          </div>
        </ResizableContainer>

        <ResizableContainer
          id={"item2"}
          className="m-3 flex-grow-1 shadow bg-secondary"
          defaultSize={{
            width: Math.floor(window.innerWidth / 2) - 200,
             height: 300,
          }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "solid 1px #ddd",
            background: "#f0f0f0",
          }}
        >
          <div className="d-flex flex-column align-items-center bg-secondary container-card p-5">
            <img
              alt="neuron"
              className="image1"
              src="https://www.ibm.com/blog/wp-content/uploads/2023/03/What-is-Generative-AI-what-are-Foundation-Models-and-why-do-they-matter-scaled.jpg"
            />
            {/* <p className="text-light my-2 ">{data?.description}</p> */}
          </div>
        </ResizableContainer>

        <ResizableContainer
          id={"item3"}
          className="m-3 flex-grow-1 bg-light shadow"
          defaultSize={{
            width: window.innerWidth - 200,
             height: 300,
          }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "solid 1px #ddd",
            background: "#f0f0f0",
          }}
        >
          <div className="d-flex flex-column align-items-center bg-secondary container-card p-5">
            <img
              alt="neuron"
              className="image1"
              src="https://cdn.sanity.io/images/tlr8oxjg/production/afce27d5dcb021422c709cb5bf60cb3a33f7376d-1456x816.png"
            />
            {/* <p className="text-light my-2 ">{data?.description}</p> */}
          </div>
        </ResizableContainer>
      </div>
    </>
  );
}

export default App;
