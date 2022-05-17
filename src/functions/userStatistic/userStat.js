import React from 'react';
import { useState , useEffect} from "react";
import {Component }from 'react';
import { Button, WhiteSpace, WingBlank, Flex} from 'antd-mobile';
import ReactFC from "react-fusioncharts";
import './userStat.less'
// Step 3 - Include the fusioncharts library
import FusionCharts from "fusioncharts";
// Step 4 - Include the chart type
import Column2D from "fusioncharts/fusioncharts.charts";
// Preparing the chart data
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import axios from 'axios'

ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

const api = axios.create({
  baseURL:'https://628205b3ed9edf7bd87d009e.mockapi.io/barchart'
})


class UserStat extends Component {
    
  
  state = {
    situation:[],
    bar:[]
  }

       

          constructor(){
            super();
            api.get('/').then(res =>{
              console.log(res.data)
              this.setState({
                situation:res.data,
                bar:res.data.bar
               })
         
              
            })
       
          }
            
    
    render() { 



      const chartData =   [
        {
        "label": "Monday",
        "value": "290"
        },
        {
          "label": "Tuesday",
        "value": "260"
        },
        {
          "label": "Wenesday",
        "value": "180"
        },
        {
          "label": "Thursday",
        "value": "140"
        },
        {
          "label": "Friday",
        "value": "140"
        },
        {
          "label": "Saturday",
        "value": "140"
        },
        {
          "label": "Sunday",
        "value": "140"
        }

  ];

  const caloriesData =   [
    {
    "label": "Monday",
    "value": "290"
    },
    {
      "label": "Tuesday",
    "value": "1300"
    },
    {
      "label": "Wenesday",
    "value": "1800"
    },
    {
      "label": "Thursday",
    "value": "1400"
    },
    {
      "label": "Friday",
    "value": "2000"
    },
    {
      "label": "Saturday",
    "value": "1445"
    },
    {
      "label": "Sunday",
    "value": "1240"
    }

];


// Create a JSON object to store the chart configurations
          const chartConfigs = {
          type: "column2d", // The chart type
          width: "400", // Width of the chart
          height: "300", // Height of the chart
          dataFormat: "json", // Data type
         
          dataSource: {
          // Chart Configuration
          chart: {
          caption: "Stay Time at Gym of Last Week",    //Set the chart caption
          // subCaption: "In MMbbl = One Million barrels",             //Set the chart subcaption
          // xAxisName: "Country",           //Set the x-axis name
          // yAxisName: "Reserves (MMbbl)",  //Set the y-axis name
          numberSuffix: "mins",
          theme: "fusion",
          baseFontSize:"10",              //Set the theme for your chart
          },
          // Chart Data - from step 2


             data:chartData

          
         
          }
       
          };
     

          const caloriesConfigs = {
            type: "column2d", // The chart type
            width: "400", // Width of the chart
            height: "300", // Height of the chart
            dataFormat: "json", // Data type
            dataSource: {
            // Chart Configuration
            chart: {
            caption: "Calories Burned Last Week",    //Set the chart caption
            // subCaption: "In MMbbl = One Million barrels",             //Set the chart subcaption
            // xAxisName: "Country",           //Set the x-axis name
            // yAxisName: "Reserves (MMbbl)",  //Set the y-axis name
            numberSuffix: "kcal",
            baseFontSize:"10",
            theme: "fusion"                 //Set the theme for your chart
            },
            // Chart Data - from step 2
  
               
               data:caloriesData
  
            
           
            }
         
            };
        return (
            <div style={{backgroundColor: "#FFF3D4" }}>
                 
                 <Button href="/" inline style={{ marginLeft: '40px',marginTop:"50px", backgroundColor:'#FFF3D4' }}>Back</Button>
                <h1 class ="UserTittle">Statistic</h1>
                <WhiteSpace size ="xs"/>
             {this.state.situation.map((graph) => (
               <div>
                   <Button type="primary"  className = "UserButtonRed1"  inline style={{ marginLeft: '80px' }} >
                   <p style={{ color: 'white',fontSize:'30px' }}>{graph.userstat.staytime}  <h class ="UserButton"  style={{ color: 'white' }}>hours</h>
                   <p class ="UserButton"  style={{ color: 'white' }}>Average Stay Time</p></p>
                   <WhiteSpace size ="xs"/>
                   </Button>
                   
                   <Button type="primary" className = "UserButtonOrange1" inline style={{marginLeft: '10px',marginRight :'10px' }}>
                   <p style={{ color: 'black' ,fontSize:'30px' }}>{graph.userstat.calories} <h class ="UserButton" style={{ color: 'black' }}>kcal</h><br></br>
                   <p class ="UserButton" style={{ color: 'black'  }}>Total calories burned</p></p>
                   </Button>
                   
              {/* use `am-button-borderfix`. because Multiple buttons inline arranged, the last one border-right may not display */}
                <WhiteSpace size ="xs"/>
                <WhiteSpace size ="xs"/>
                <Button type="primary" className = "UserButtonOrange2" inline style={{ marginLeft: '80px' }}>
                  <p style={{ color: 'black',fontSize:'30px'  }}>{graph.userstat.mosttrain}<br></br>
                  <p class ="UserButton" style={{ color: 'black' }}>Most trained part</p></p>
                </Button>
                {/* use `am-button-borderfix`. because Multiple buttons inline arranged, the last one border-right may not display */}
                <Button type="primary" className = "UserButtonRed2"  inline style={{ marginLeft: '10px',marginRight :'10px' }}>
                  <p style={{ color: 'white' ,fontSize:'30px' }}>{graph.userstat.leasttrain} <br></br>
                  <p class ="UserButton" style={{ color: 'white' }}>Least trained part</p></p>
                </Button>
                <WhiteSpace size ="xs"/>
                <br></br> 
                   </div>
             ))}
                <br></br>
                <br></br>
            
                <ReactFC {...chartConfigs } className ="UserGraph" />
                <br></br>
                <ReactFC {...caloriesConfigs } className ="UserGraph" />
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            

  
            </div>


        );
    }
}
 
export default UserStat;