import { Component, OnInit,ViewChild, ElementRef,AfterViewInit,NgZone } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-page6',
  templateUrl: './page6.page.html',
  styleUrls: ['./page6.page.scss'],
})
export class Page6Page implements OnInit {
  @ViewChild('saChart') saChart!: ElementRef;
  chart: echarts.ECharts | undefined;
  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    this.createStackedAreaChart()
  }

  createStackedAreaChart(){
    const chart = echarts.init(this.saChart.nativeElement);
    const option = {
      xAxis: {
        type: 'category',
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July','Aug','Sept','Oct','Nov','Dec']
      },
      yAxis: {
        type: 'value'
      },
      
      series: [
        {
          data: [1, 3, 5, 4, 6, 3,4],
          type: 'line',
          areaStyle: {
            color: "rgba(143, 187, 200, 1)"
          },
      
          markLine: {
          data: [{
            type: "max"
          }]},
          smooth: true,
          
            lineStyle: {
            width: 5
          }
        },
    
      ]
    };
    chart.setOption(option);
  }
}
