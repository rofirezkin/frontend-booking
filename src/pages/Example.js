import Breadcrumb from "elements/Breadcrumb";
import InputDate from "elements/Form/InputDate";
import React, { Component } from "react";

export default class Example extends Component {
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const breadcrumbList = [
      { pageTitle: "Home", pageHref: "" },
      { pageTitle: "House Details", pageHref: "" },
    ];
    return (
      <div className="container">
        <div
          className="row align-items-center justify-content-center"
          style={{ height: "100vh" }}
        >
          <div className="col-auto">
            <Breadcrumb data={breadcrumbList} />
          </div>
        </div>
      </div>
    );
  }
}
