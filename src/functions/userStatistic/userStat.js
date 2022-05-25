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
import { Nav, NavItem} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faHome, faUserCircle } from '@fortawesome/free-solid-svg-icons';
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

// const api = axios.create({
//   baseURL:'https://628205b3ed9edf7bd87d009e.mockapi.io/barchart'
// })

let userid = window.location.pathname
let userid1 = userid.replace('/userstat/','')
console.log(userid1)

let tabs = [{
  route: "/profile/"+userid1,
  icon: faUserCircle,
  label: "User"
},{
  route: "/home/"+userid1,
  icon: faHome,
  label: "Home"
},{
  route: "/setting/"+userid1,
  icon: faGear,
  label: "Settings"
}]
class UserStat extends Component {
    
  
  state = {
    stay_time:[],
    calories:[],
    most_train:[],
    least_train:[]

  }

       

          constructor(){
            super();
            // api.get('/').then(res =>{
            //   console.log(res.data)
            //   this.setState({
            //     situation:res.data,
            //     bar:res.data.bar
            //    })
            // })
            axios.get('https://sadbackend-cyt.herokuapp.com/api/v1/user/stat/'+userid1).then( 
              (response) => {console.log(response.data.data)
              this.setState({
                stay_time:response.data.data.stay_time,
                calories:response.data.data.calories,
                most_train:response.data.data.most_train,
                least_train:response.data.data.least_train

              } )
              
        })
       
          }
            
    
    render() { 

      const{
        stay_time,
        calories,
        most_train,
        least_train
      }=this.state;
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
                 
                 <Button href={"/home/"+userid1} inline style={{ marginLeft: '40px',marginTop:"50px", backgroundColor:'#FFF3D4' }}>Back</Button>
                <h1 class ="UserTittle">Statistic</h1>
                <WhiteSpace size ="xs"/>
             
               <div>
                   <Button type="primary"  className = "UserButtonRed1"  inline style={{ marginLeft: '80px' }} >
                   <p style={{ color: 'white',fontSize:'30px' }}>{stay_time}  <h class ="UserButton"  style={{ color: 'white' }}>hours</h>
                   <p class ="UserButton"  style={{ color: 'white' }}>Average Stay Time</p></p>
                   <WhiteSpace size ="xs"/>
                   </Button>
                   
                   <Button type="primary" className = "UserButtonOrange1" inline style={{marginLeft: '10px',marginRight :'10px' }}>
                   <p style={{ color: 'black' ,fontSize:'30px' }}>{calories} <h class ="UserButton" style={{ color: 'black' }}>kcal</h><br></br>
                   <p class ="UserButton" style={{ color: 'black'  }}>Total calories burned</p></p>
                   </Button>
                   
              {/* use `am-button-borderfix`. because Multiple buttons inline arranged, the last one border-right may not display */}
                <WhiteSpace size ="xs"/>
                <WhiteSpace size ="xs"/>
                <Button type="primary" className = "UserButtonOrange2" inline style={{ marginLeft: '80px' }}>
                  <p style={{ color: 'black',fontSize:'30px'  }}>{most_train}<br></br>
                  <p class ="UserButton" style={{ color: 'black' }}>Most trained part</p></p>
                </Button>
                {/* use `am-button-borderfix`. because Multiple buttons inline arranged, the last one border-right may not display */}
                <Button type="primary" className = "UserButtonRed2"  inline style={{ marginLeft: '10px',marginRight :'10px' }}>
                  <p style={{ color: 'white' ,fontSize:'30px' }}>{least_train} <br></br>
                  <p class ="UserButton" style={{ color: 'white' }}>Least trained part</p></p>
                </Button>
                <WhiteSpace size ="xs"/>
                <br></br> 
                   </div>
       
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
            
                <div>
    {/* Top Bar*/}

   
    {/* Bottom Tab Navigator*/}
    <nav className="navbar fixed-bottom navbar-light w-10" inline style={{ height: '120px' , }}  role="navigation">
      <Nav className="h-10"  >
        <div className=" d-flex " >
          {/* {flex-row justify-content-around} */}
          {
            tabs.map((tab, index) =>(
              <NavItem key={`tab-${index}`}inline style={{ marginBottom :'50px' }}>
                <NavLink to={tab.route} className="nav-link" activeClassName="active">
                  <div className="row d-flex  justify-content-center ">
                    <FontAwesomeIcon size="lg" icon={tab.icon}  />
                    <div >{tab.label}</div>
                  </div>
                </NavLink>
              </NavItem>
            ))
          }
        </div>
      </Nav>
    </nav>
  </div>
  
            </div>


        );
    }
}
 
export default UserStat;