import React, { Component} from 'react';
import { List } from 'antd-mobile'
import {  Card, WhiteSpace, WingBlank,Button ,Accordion ,NavBar, Icon} from 'antd-mobile';
import './UserHome.less'
import getUrlQuery from '../../utils/getUrlQuery'
import axios from 'axios'
const Item = List.Item;
const Brief = Item.Brief;


//import asdsd from "../GymList/index"



const api = axios.create({
  baseURL:'https://628205b3ed9edf7bd87d009e.mockapi.io/userhome'
})

class UserHome extends Component {


  
      state = {
        reservation:[],
          conversation:[]
      }

     constructor(){
       super();
       api.get('/').then(res =>{
        console.log(res.data)
         this.setState({
           reservation :res.data,

        })
       
       })
     }
  // data = { 
  //   reservation : [{
  //                       "id": 1,
  //                       "activity" : "running" ,
  //                       "date":"4/3",
  //                       "detail":[{
  //                                       "time" :"2am" ,
  //                                       "machine" :"treadmil_01",
  //                                       "Gym" : "daan"
  //                                   },
                                
                
  //               ]},
  //               {
  //                 "id": 2,
  //                 "activity" : "boxing" ,
  //                 "date" :"3/2",
  //                 "detail":[{
  //                                 "time" :"2am" ,
  //                                 "machine" :"treadmil_01",
  //                                 "Gym" : "daan"
  //                             },
                          
          
  //         ]}

              
  //             ]} 


    render() { 
        return (
          
        <div class = "shapeHome" style={{  height: '926px'}}>
         <h1 className ="HomeTitle">Home</h1>
      <WingBlank size="large">
        <WhiteSpace size="xs" />
        <Card className ="am-cardBackGround"  >
          <Card.Header 
            title="My Reservation"
            extra={<Button  inline size="small"  className= "reservationButton"><p>ADD</p></Button>}
      />
      <Card.Body>
      <div style={{ marginTop: 10, marginBottom: 10 }}>
      {this.state.reservation.map( ( reservationData)  =>(
      <div>
          
          <WingBlank size="lg">
          <WhiteSpace size="lg" />
          <Card>
            <Card.Header
              title={reservationData.activity}
              extra={reservationData.date + '  ' + reservationData.detail.time}
            />
            <Card.Footer content={reservationData.detail.machine} extra={reservationData.detail.Gym } />
          </Card>
        </WingBlank>
         
                {/* <WingBlank size="sm">
                <WhiteSpace size="sm" />
             
            <Accordion defaultActiveKey="1"  onChange={this.onChange} >
            <Accordion.Panel header= {reservationData.activity} >
                <Item  multipleLine onClick={() => {}}    className = "AccodianBodyUser" >
                <div>{reservationData.detail.machine}</div>
                <Brief ></Brief>
                </Item >
        
            </Accordion.Panel >
            </Accordion>
              
            <WhiteSpace size="sm" />
                                </WingBlank>

          */}
         
         
             
   
    </div>
           ) )}
          </div>
      </Card.Body>
    </Card>
    <WhiteSpace size="lg" />
    </WingBlank>
   <br></br>
   <br></br>
   <br></br>     
   
                  <Button  href="/gymlist" className = "UserButtonOrangeGymStatus"  inline style={{ marginLeft: '80px' }}  selected={this.state.selectedTab === 'home'}>
                  <p class ="UserButtonText">Gym Status</p>
                  <WhiteSpace />
                  </Button>
   
                {/* use `am-button-borderfix`. because Multiple buttons inline arranged, the last one border-right may not display */}
                <Button href="/userstat" className = "UserButtonOrangeStatistic" inline style={{marginLeft: '10px' }}>
             
                  <p class ="UserButtonText">Statistic</p>
                </Button>
                <WhiteSpace />
                <WhiteSpace />
                <Button href="" className = "UserButtonOrangeTraningProgram" inline style={{ marginLeft: '80px' }}>
                  
                  <p class ="UserButtonText">Training Program</p>
                </Button>
                {/* use `am-button-borderfix`. because Multiple buttons inline arranged, the last one border-right may not display */}
                <Button  href=""  className = "UserButtonOrangeOthers"  inline style={{ marginLeft: '10px' }}>
                
                  <p class ="UserButtonText">Others</p>
                </Button>
                <WhiteSpace />
              
        </div>

        
        );
    }
}
 
export default UserHome;