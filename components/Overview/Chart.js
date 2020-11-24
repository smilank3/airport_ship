import React from 'react';
import dynamic from 'next/dynamic';
const ChartWithNoSSR = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});



const Chart = ({ ...props }) => {
  return <ChartWithNoSSR {...props} />;
};

class TimeSeries extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: ['Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May']
        }
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
      ]
    };
  }

  render() {
    return (
      <div >
      <h3>Example chart tracking Order (timeseries)</h3>
        <div >
          <div >
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="line"
              width="500"

            />
          </div>
        </div>


      </div>
    );
  }
}

class Donut extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      options: {},
      series: [44, 55, 41, 17, 15],
      labels: ['A', 'B', 'C', 'D', 'E']
    }
  }

  render() {

    return (
      <div className="donut" style={{position:'relative'}}>
      <h3 style={{float:'right'}}> percentage</h3>
        <Chart options={this.state.options} series={this.state.series} type="donut" width="380" />
      </div>
    );
  }
}

// main


const _Chart=()=>{

  return (

  <div style={{display:'flex'}}>
       <TimeSeries/>
       <Donut/>

  </div>
    )
}


export default _Chart;