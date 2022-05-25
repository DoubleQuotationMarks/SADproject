import React, { Component} from 'react';
import { List } from 'antd-mobile'
import {  WhiteSpace, WingBlank,Badge  ,Button, NoticeBar} from 'antd-mobile';
import './gymList.less'
import axios from 'axios'
import { Nav, NavItem} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faHome, faUserCircle } from '@fortawesome/free-solid-svg-icons';



let userid = window.location.pathname
let userid1 = userid.replace('/gym/','')
console.log(userid1)

const Item = List.Item;
const Brief = Item.Brief;


let tabs = [{
    route: "/home",
    icon: faUserCircle,
    label: "User"
  },{
    route: "/home/"+userid1,
    icon: faHome,
    label: "Home"
  },{
    route: "/login",
    icon: faGear,
    label: "Settings"
  }]
class GymList extends Component {

    
    state = {
        Gym:[]
      }

     constructor(){
       super();
    //    api.get('/').then(res =>{
    //      console.log(res.code)
    //      this.setState({Gym :res.data})
    //    })

       axios.get('https://sadbackend-cyt.herokuapp.com/api/v1/gym/list').then( 
           (response) => {console.log(response)
           this.setState({Gym :response.data.data})
           
     })
     }
     

    render() { 
              
        return (
             
            <div class ="shapeGymList">
                   
                <Button href={"/home/"+userid1} inline style={{ marginLeft: '40px',marginTop:"50px", backgroundColor:'#FFF3D4' }}>Back</Button>
                <h1 class ="GymTitle"> Gym List</h1>
                {this.state.Gym.map((GymData) => (
                   
                        <div>
                        <WhiteSpace size="sm" />
                        
                            {/* <Item href={"gymequip"+GymData.GymName} className="am-list-itemGymList" arrow="horizontal"  onClick={() => {}} extra={"comfort"} id ={GymData.id} am-list-content >
                                
                                {GymData.GymName}  
                            <Brief>{GymData.address}</Brief>
                            </Item> */}

                                <Button  className = "UserLink"  href={"gymstate/"+GymData.name+'_'+GymData.branch_gym_id+'_'+userid1}  >
                                {GymData.status === 'uncrowded' ?
                                (  <div class="circleStat " style ={{ backgroundColor: "#57FF89"} }></div>) 
                                :( <div class="circleStat " style ={{ backgroundColor: "#FF6164"} }></div> )}

                                {GymData.status === "uncrowded" ?
                                (  <p class ="buttontext2  "style ={{ color: "#57FF89"} }>comfort </p>) 
                                :( <p class ="buttontext2 " style ={{ color:"#FF6164"} }>crowded </p> )}   

                                <p class = "buttontext">{GymData.name}
                               <p class="buttonDescription" style={{ fontSize:'10px'}} >{GymData.address}</p> </p>

                          
            
                                </Button>
                                <WhiteSpace size="xl" />
                            
                        <WhiteSpace size="sm" />
                        </div>

              
                               
                ))


                }

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
 
export default GymList;