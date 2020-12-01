import React from 'react';
import dynamic from 'next/dynamic';
import {Row,Col} from 'react-bootstrap'
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
          
            series: [{
              name: 'Transactions',
              data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5]
            }],
            options: {
              chart: {
                height: 350,
                type: 'line',
              },
              stroke: {
                width: 7,
                curve: 'smooth'
              },
              xaxis: {
                type: 'datetime',
                categories: ['1/11/2000', '2/11/2000', '3/11/2000', '4/11/2000', '5/11/2000', '6/11/2000', '7/11/2000', '8/11/2000', '9/11/2000', '10/11/2000', '11/11/2000', '12/11/2000', '1/11/2001', '2/11/2001', '3/11/2001','4/11/2001' ,'5/11/2001' ,'6/11/2001'],
                tickAmount: 10,
                labels: {
                  formatter: function(value, timestamp, opts) {
                    return opts.dateFormatter(new Date(timestamp), 'dd MMM')
                  }
                }
              },
              title: {
                text: 'TimeSeries',
                align: 'left',
                style: {
                  fontSize: "16px",
                  color: '#666'
                }
              },
              fill: {
                type: 'gradient',
                gradient: {
                  shade: 'dark',
                  gradientToColors: [ '#FDD835'],
                  shadeIntensity: 1,
                  type: 'horizontal',
                  opacityFrom: 1,
                  opacityTo: 1,
                  stops: [0, 100, 100, 100]
                },
              },
              markers: {
                size: 4,
                colors: ["#FFA41B"],
                strokeColors: "#fff",
                strokeWidth: 2,
                hover: {
                  size: 7,
                }
              },
              yaxis: {
                min: -10,
                max: 40,
                title: {
                  text: 'Number of Order',
                },
              }
            },
          
          
          };
        }

      

  render() {
    return (
      <div style={{textAlign:'center'}}>
     
        <div >
          <div >
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="line"
            

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
          
            series: [44, 55],
            options: {labels:['DropOff','Shipping'],
              chart: {
                type: 'donut',
              },
              responsive: [{
                breakpoint: 480,
                options: {
                  chart: {
                    width: 200
                  },
                  legend: {
                    position: 'bottom'
                  }
                }
              }]
            },
          
          
          };
        }

    

  render() {

    return (
      <div >
      
        <Chart options={this.state.options} series={this.state.series} type="donut"/>
      </div>
    );
  }
}

// main


const _Chart=()=>{

  return (

  <div >

  <Row style={{justifyContent:''}}>
  <Col md={12} lg={7} sm={12} style={{border:'',textAlign:'left'}}>
        <TimeSeries/>
  </Col>
  <Col md={12} lg={5} sm={12}>
    <Donut/>
  </Col>
   
       
</Row>
  </div>
    )
}


export default _Chart;