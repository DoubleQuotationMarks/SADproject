import React, { Component} from 'react';
import { List } from 'antd-mobile'
import {  Card, WhiteSpace, WingBlank,Button ,Accordion ,NavBar, Icon} from 'antd-mobile';
import './UserHome.less'
import getUrlQuery from '../../utils/getUrlQuery'
import axios from 'axios'

const Item = List.Item;
const Brief = Item.Brief;


//import asdsd from "../GymList/index"
let userid = window.location.pathname
let userid1 = userid.replace('/','')
console.log(userid1)
//use userid1 to get user 


class UserHome extends Component {


  
      state = {
        reservation:[]
        
      }

     constructor(){
       super();
      //  api.get('/').then(res =>{
      //   console.log(res.data)
      //    this.setState({
      //      reservation :res.data,

      //   })
       
      //  })
      axios.get('https://sadbackend-cyt.herokuapp.com/api/v1/user/reservation/'+userid1).then( 
        (response) => {console.log(response)
        this.setState({reservation:response.data.data

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
              title={reservationData.category}
              extra={reservationData.machine_id}
            />
            <Card.Footer content={new Date(reservationData.date).toDateString()}  extra={reservationData.gym_name} />
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