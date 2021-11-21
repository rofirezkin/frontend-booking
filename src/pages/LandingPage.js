import Header from "parts/Header";
import React, { Component } from "react";

import landingPage from "json/landingPage.json";
import Hero from "parts/Hero";
import MostPicked from "parts/MostPicked";
import Categories from "parts/Categories";
import Testimony from "parts/Testimony";
import Footer from "parts/Footer";
export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.refMostPicked = React.createRef();
    this.state = {
      isTracking: "",
    };
  }

  componentDidMount() {
    console.log("dd", this.refMostPicked.current.offsetTop);
    const data = this.refMostPicked.current.offsetTop;

    this.setState({
      isTracking: data,
    });
  }

  render() {
    console.log("dffdd", this.state.isTracking);
    return (
      <>
        <Header {...this.props}></Header>
        <Hero refMostPicked={this.state.isTracking} data={landingPage.hero} />
        <MostPicked
          refMostPicked={this.refMostPicked}
          data={landingPage.mostPicked}
        />
        <Categories data={landingPage.categories} />
        <Testimony data={landingPage.testimonial} />
        <Footer />
      </>
    );
  }
}
