import React, { Component } from "react";
import lottie from "lottie-web";
import animationData from "./search-not-found.json";
import styles from "./search.module.css";

class SearchNotFound extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.lottieAnimation = lottie.loadAnimation({
      container: document.querySelector(".animation-wrapper"),
      renderer: "svg",
      loop: false,
      autoplay: true,
      animationData: animationData,
    });
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <div
          className="animation-wrapper"
          onMouseEnter={() => {
            this.lottieAnimation.goToAndPlay(1, false);
          }}
          onMouseLeave={() => {
            lottie.goToAndStop(1600, false);
          }}
        >
        </div>
        <h3 className={styles.text}>{this.props.text}</h3>
      </div>
    );
  }
}

export default SearchNotFound;