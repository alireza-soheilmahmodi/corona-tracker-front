import React, { Component } from "react";
import Header from "./Header";
import { connect } from "react-redux";
import Chart from "chart.js";

const report = ["Total", "Active", "Recovered", "Death"];
const keys = {
  Total: "TotalConfirmed",
  Recovered: "TotalRecovered",
  Death: "TotalDeaths",
  Active: "NewConfirmed",
};
class Overview extends Component {
  componentDidMount() {
    let myChart = document.getElementById("myChart").getContext("2d");

    // Global Options
    Chart.defaults.global.defaultFontFamily = "Lato";
    Chart.defaults.global.defaultFontSize = 18;
    Chart.defaults.global.defaultFontColor = "#777";
    let labels = [];
    let data = [];
    for (let i = 0; i < 31; i++) {
      labels.push(i);
    }
    for (let i = 0; i < 31; i++) {
      data.push(Math.floor(Math.random() * 100000));
    }
    let massPopChart = new Chart(myChart, {
      type: "line",
      data: {
        labels,
        datasets: [
          {
            label: "confirmed",
            data,
            backgroundColor: "#f1f3ff",
            borderWidth: 1,
            borderColor: "#777",
            hoverBorderWidth: 3,
            hoverBorderColor: "#000",
          },
        ],
      },
      options: {
        title: {
          display: true,
          text: "Total Covid 19 Graph",
          fontSize: 25,
        },
        legend: {
          display: false,
        },
        layout: {
          padding: {
            left: 5,
            right: 5,
            bottom: 5,
            top: 5,
          },
        },
        tooltips: {
          enabled: true,
        },
      },
    });
  }
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

        <div className="container">
          <canvas id="myChart"></canvas>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { covid: state.covid };
}

export default connect(mapStateToProps)(Overview);
