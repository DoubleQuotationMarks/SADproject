import React from 'react';
import { useState , useEffect} from "react";
import {Component }from 'react';
import { Button, WhiteSpace, WingBlank, Flex,Icon} from 'antd-mobile';
import './StaffStatic.less'
import axios from 'axios'
import { Chart, Line, Scale, Guide } from 'ant-design-mobile-chart';


class StaffStatic extends Component {

    
    state = {
        Stat:[]
      }

     constructor(){
       super();
  
       axios.get('https://sadbackend-cyt.herokuapp.com/api/v1/user/staff/stat').then( 
           (response) => {console.log(response)
           this.setState({Stat:response.data.data})
           
     })
     }

    render() { 
              
        return (
             
          <div style={{ width: '428px' , height: '926px', background: "#fff3d4"}}>
          <div style={{ width: '100%' , height: '80px'}}><Button href="/staff" inline style={{ width: '60px' , height: '30px', marginLeft: '40px',marginTop:"50px",border:"transparent", background:"transparent"}}><div class="backb"><Icon type="left" size="md"/></div></Button></div>
          <div class="title">Statistic</div>

          <div style={{ width: '100%' , height: '118px'}}>
              <Flex justify="center">
              <div class='roundborder' style={{ width: '190px' , height: '118px', background: "#DE5D4D", color: '#FFFFFF'}}>
                  <Flex>
                  <div class="bigword" style={{ width: '130px' , height: '90px'}}>2.0</div>
                  <div class="bigunit" style={{ width: '60px' , height: '90px'}}>ppl</div>
                  </Flex>
                  <div class="smallword" >Highest user attendence</div>
              </div>

              <div style={{ width: '0px' , height: '118px'}}></div>
              <div class='roundborder' style={{ width: '190px' , height: '118px', background: "#F5D19B", color: '#000000'}}>
                  <Flex>
                  <div class="bigword" style={{ width: '130px' , height: '90px'}}>1.13</div>
                  <div class="bigunit" style={{ width: '60px' , height: '90px'}}>hour(s)</div>
                  </Flex>
                  <div class="smallword" >Average user stay time</div>
              </div>    
              </Flex>
          </div>
          <div style={{ width: '100%' , height: '15px'}}></div>
          <div class='roundborder' style={{ width: '400px' , height: '241px', background: "#FFFFFF"}}>
              <div class='charttitle' style={{ width: '400px' , height: '41px'}}>User Attendence of Last Week</div>
              <Chart source={this.state.Stat} width="400" height="200" pixelRatio={window.devicePixelRatio}>
              <Line position="date*attendance_count" />
              <Scale field="date" />
              <Scale field="attendance_count" range={[0,1]} tickCount={5}/>
              </Chart>
          </div>
          <div style={{ width: '100%' , height: '15px'}}></div>
          <div class='roundborder' style={{ width: '400px' , height: '241px', background: "#FFFFFF"}}>
              <div class='charttitle' style={{ width: '400px' , height: '41px'}}>Avg. User Stay Time of Last Week</div>
              <Chart source={this.state.Stat} width="400" height="200" pixelRatio={window.devicePixelRatio}>
              <Line position="date*avg_stay_hour" />
              <Scale field="date" />
              <Scale field="avg_stay_hour" />
              </Chart>
          </div>
      </div>
            
        );
    }
   
}
 
export default StaffStatic;
