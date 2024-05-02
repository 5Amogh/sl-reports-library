import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from "@angular/core";
import { ChartDataset, ChartOptions, ChartType } from "chart.js";
import * as stackedBar from "chartjs-plugin-stacked100";
import * as pluginDataLabels from "chartjs-plugin-datalabels";

@Component({
  selector: "sl-percentage-column-charts",
  templateUrl: "./percentage-column-charts.component.html",
  styleUrls: ["./percentage-column-charts.component.css"],
})
export class PercentageColumnChartsComponent implements OnInit {
  @ViewChild("chartCanvas") chartCanvas;
  // @Output() clickOnGraphEventEmit = new EventEmitter();
  @Input() chartData;
  submiisionDateArray;
  public barChartData: ChartDataset[];
  public barChartOptions: any;
  public barChartLabels = [];
  public barChartType: ChartType = "bar";
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels, stackedBar];
  constructor() {}

  ngOnInit() {
    this.submiisionDateArray = this.chartData.chart.submissionDateArray;
    const options = {
      ...(this.chartData.chart.type == "horizontalBar" && {
        indexAxis: "y",
      }),
      scales: {
        x: {
          ...(this.chartData.chart.options.scales.xAxes[0].scaleLabel && {
            title: {
              display:
                this.chartData.chart.options.scales.xAxes[0].scaleLabel.display,
              text: this.chartData.chart.options.scales.xAxes[0].scaleLabel
                .labelString,
            },
            ...this.chartData.chart.options.scales.xAxes[0],
          }),
        },
        y: {
          ...(this.chartData.chart.options.scales.yAxes[0].scaleLabel && {
            title: {
              display:
                this.chartData.chart.options.scales.yAxes[0].scaleLabel.display,
              text: this.chartData.chart.options.scales.yAxes[0].scaleLabel
                .labelString,
            },
            ...this.chartData.chart.options.scales.yAxes[0],
          }),
        },
      },
    };
    this.barChartOptions = options;
    this.barChartOptions["plugins"] = {
      ...((this.chartData.chart.options.legend && {
        legend: this.chartData.chart.options.legend,
      }) || {
        legend: {
          display: false,
        },
      }),
      stacked100: { enable: true, replaceTooltipLabel: true },
      datalabels: {
        offset: 0,
        anchor: "end",
        align: "left",
        font: {
          size: 12,
        },
        formatter: (value, data) => {
          const d: any = data.chart.data;
          const { datasetIndex, dataIndex } = data;
          // to remove  0 data in  report
          if (d.originalData[datasetIndex][dataIndex] == 0) {
            if (
              (data.datasetIndex + 1) % this.barChartData.length == 0 &&
              this.submiisionDateArray.length
            ) {
              return ["", "", this.submiisionDateArray[data.dataIndex]];
            }
            return "";
          }
          // to remove date in instance report
          if (this.submiisionDateArray && !this.submiisionDateArray.length) {
            return `${d.originalData[datasetIndex][dataIndex]}`;
          }

          // for last value
          if ((data.datasetIndex + 1) % this.barChartData.length == 0) {
            // console.log(data.datasetIndex)
            if (d.originalData[datasetIndex][dataIndex] == 1) {
              return ["", "", this.submiisionDateArray[data.dataIndex]];
            }
            return [
              `                                              ${d.originalData[datasetIndex][dataIndex]}`,
              "",

              `                                ${
                this.submiisionDateArray[data.dataIndex]
              }`,
            ];
          } else {
            return `${d.originalData[datasetIndex][dataIndex]}`;
          }
        },
      },
    };
  }
}
