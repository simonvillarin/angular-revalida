import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'node_modules/chart.js';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  ngOnInit(): void {
    Chart.register(...registerables);

    const data = {
      labels: ['Desktop', 'Laptop', 'MoBo', 'SSD', 'Keyboard'],
      datasets: [
        {
          label: 'My Dataset',
          data: [10, 70, 30, 100, 50],
          fill: true,
          borderColor: 'rgb(75, 192, 192)',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          tension: 0.1,
          
        }
      ]
    };

    new Chart('lineChart', {
      type: 'bar',
      data: data,
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}
