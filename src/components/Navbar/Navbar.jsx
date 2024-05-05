import React, { Component } from "react";
import "./navbar.scss";
import powerpoint from "./icons/powerpoint.png";
import github from "./icons/github.png";

export default class Navbar extends Component {
  state = {
    active: false,
  };

  toggle = () => {
    this.setState({ active: !this.state.active });
    if (this.state.active) {
      document.querySelector("nav").style.height = "calc(50px + 0.5vh)";
    } else {
      document.querySelector("nav").style.height = "87.5vh";
    }

    window.addEventListener("resize", () => {
      if (window.innerWidth > 1024 && this.state.active) {
        document.querySelector("nav").style.height = "calc(50px + 0.5vh)";
      }
    });
  };

  render() {
    return (
      <nav>
        <div className={`container ${this.state.active ? "active" : ""}`}>
          <div className="icons">
            <a href="">
              <img src={powerpoint} alt="powerpoint icon" />
            </a>
            <a href="">
              <img src={github} alt="github icon" />
            </a>
          </div>

          <ul className="nav-list">
            <li className="nav-link">
              <a href="#" class="nav-item">
                Ochrona danych
              </a>
            </li>
            <li className="nav-link">
              <a href="#" class="nav-item">
                Autoryzacja
              </a>
            </li>
            <li className="nav-link">
              <a href="#" class="nav-item">
                Nasza aplikacja
              </a>
            </li>
          </ul>
        </div>
        <div className="toggle">
          <span
            className="icon"
            onClick={this.toggle}
            onChange={this.toggle}></span>
        </div>
      </nav>
    );
  }
}
