import { Component, VERSION } from '@angular/core';
import * as Highcharts from 'highcharts';
// import data from '../../../assets/data_new.js';

declare var require: any;
let Boost = require('highcharts/modules/boost');
let noData = require('highcharts/modules/no-data-to-display');
let exportData = require('highcharts/modules/export-data');
let exporting = require('highcharts/modules/exporting');
let networkGraphs = require('highcharts/modules/networkgraph');

Boost(Highcharts);
noData(Highcharts);
exportData(Highcharts);
exporting(Highcharts);
networkGraphs(Highcharts);

@Component({
  selector: 'network-graphs',
  templateUrl: './network-graphs.component.html',
  styleUrls: ['./network-graphs.component.css'],
})
export class NetworkGraphsComponent {
  name = 'Angular ' + VERSION.major;
}
