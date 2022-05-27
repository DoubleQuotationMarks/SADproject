import React, { Component} from 'react';
import { List } from 'antd-mobile'
import {  Card, WhiteSpace, WingBlank,Button ,Accordion ,NavBar, Icon} from 'antd-mobile';
import './UserHome.less'
import getUrlQuery from '../../utils/getUrlQuery'
import axios from 'axios'
import { Nav, NavItem} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faHome, faUserCircle } from '@fortawesome/free-solid-svg-icons';
const Item = List.Item;
const Brief = Item.Brief;


let userid = window.location.pathname
let userid1 = userid.replace('/home/','')
console.log(userid1)
//use userid1 to get user 

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
class UserHome extends Component {


  
      state = {
        reservation:[]
        
      }

     constructor(){
       super();

      axios.get('https://sadbackend-cyt.herokuapp.com/api/v1/user/reservation/'+userid1).then( 
        (response) => {console.log(response)
        this.setState({reservation:response.data.data

        })
        
  })
     }
  
    render() { 
        return (
    
        <div class = "shapeHome" >
           
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
   
                  <Button  href={"/gym/"+userid1} className = "UserButtonOrangeGymStatus"  inline style={{ marginLeft: '80px' }}  >
                  <p class ="UserButtonText">Gym Status</p>
                  <WhiteSpace />
                  </Button>
   
                {/* use `am-button-borderfix`. because Multiple buttons inline arranged, the last one border-right may not display */}
                <Button href={"/userstat/"+userid1} className = "UserButtonOrangeStatistic" inline style={{marginLeft: '10px' }}>
             
                  <p class ="UserButtonText">Statistic</p>
                </Button>
                <WhiteSpace />
                <WhiteSpace />
                <Button href={"/myprogram/"+userid1} className = "UserButtonOrangeTraningProgram" inline style={{ marginLeft: '80px' }}>
                  
                  <p class ="UserButtonText">Training Program</p>
                </Button>
                {/* use `am-button-borderfix`. because Multiple buttons inline arranged, the last one border-right may not display */}
                <Button  href=""  className = "UserButtonOrangeOthers"  inline style={{ marginLeft: '10px' }}>
                
                  <p class ="UserButtonText">Others</p>
                </Button>
                <WhiteSpace />
                <div>  
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


              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
        </div>

        
        );
    }
}
 
export default UserHome;