import React, { Component } from "react";
import Header from "./Header";
import { connect } from "react-redux";

const report = ["Total", "Active", "Recovered", "Death"];
const keys = {
  Total: "TotalConfirmed",
  Recovered: "TotalRecovered",
  Death: "TotalDeaths",
  Active: "NewConfirmed",
};
class Overview extends Component {
  cardRender() {
    return report.map((field) => {
      return (
        <div key={field} className="col-md-3 ">
          <div className="card report-card">
            <div className="card-body">
              <h5 className="card-title">{field}</h5>
              <p className="card-text">
                {this.props.covid.NewConfirmed
                  ? this.props.covid[keys[field]]
                  : " "}
              </p>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="content">
        <Header title="Covid 19 Tracker" />
        <div className="container-fluid">
          <div className="row">{this.cardRender()}</div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { covid: state.covid };
}

export default connect(mapStateToProps)(Overview);
