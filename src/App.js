import React from 'react';

class App extends React.Component{
  
  render(){
  return (
    <div className="App">
      <div>
        <div className="preloader">
          <div className="loading">
            <h2>
              Loading...
            </h2>
            <span className="progress" />
          </div>
        </div>
        <div className="wrapper">
          <ul className="scene unselectable" data-friction-x="0.1" data-friction-y="0.1" data-scalar-x={25} data-scalar-y={15} id="scene">
            <li className="layer" data-depth={0.00}>
            </li>
            {/* BG */}
            <li className="layer" data-depth="0.10">
              <div className="background">
              </div>
            </li>
            {/* Hero */}
            <li className="layer" data-depth="0.20">
              <div className="title">
                <h2>
                  Comming Soon
                </h2>
                <span className="line" />
              </div>
            </li>
            <li className="layer" data-depth="0.25">
              <div className="sphere">
                <img alt="sphere" src="assets/images/sphere.png" />
              </div>
            </li>
            <li className="layer" data-depth="0.30">
              <div className="hero">
                <h1 id="countdown">
                Ready for Prepartion
                </h1>
                <p className="sub-title">
                  Ready for Prepartion
                </p>
              </div>
            </li>
            {/* Flakes */}
            <li className="layer" data-depth="0.40">
              <div className="depth-1 flake1">
                <img alt="flake" src="assets/images/flakes/depth1/flakes1.png" />
              </div>
              <div className="depth-1 flake2">
                <img alt="flake" src="assets/images/flakes/depth1/flakes2.png" />
              </div>
              <div className="depth-1 flake3">
                <img alt="flake" src="assets/images/flakes/depth1/flakes3.png" />
              </div>
              <div className="depth-1 flake4">
                <img alt="flake" src="assets/images/flakes/depth1/flakes4.png" />
              </div>
            </li>
            <li className="layer" data-depth="0.50">
              <div className="depth-2 flake1">
                <img alt="flake" src="assets/images/flakes/depth2/flakes1.png" />
              </div>
              <div className="depth-2 flake2">
                <img alt="flake" src="assets/images/flakes/depth2/flakes2.png" />
              </div>
            </li>
            <li className="layer" data-depth="0.60">
              <div className="depth-3 flake1">
                <img alt="flake" src="assets/images/flakes/depth3/flakes1.png" />
              </div>
              <div className="depth-3 flake2">
                <img alt="flake" src="assets/images/flakes/depth3/flakes2.png" />
              </div>
              <div className="depth-3 flake3">
                <img alt="flake" src="assets/images/flakes/depth3/flakes3.png" />
              </div>
              <div className="depth-3 flake4">
                <img alt="flake" src="assets/images/flakes/depth3/flakes4.png" />
              </div>
            </li>
            <li className="layer" data-depth="0.80">
              <div className="depth-4">
                <img alt="flake" src="assets/images/flakes/depth4/flakes.png" />
              </div>
            </li>
            <li className="layer" data-depth={1.00}>
              <div className="depth-5">
                <img alt="flake" src="assets/images/flakes/depth5/flakes.png" />
              </div>
            </li>
            {/* Contact */}
            <li className="layer" data-depth="0.20">
              <div className="contact">
                Theme by DVS_MAX_5
              </div>
            </li>
          </ul>
        </div>
      </div>

    </div>
  );
}
}
export default App;
