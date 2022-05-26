import React, { Component} from 'react';
import { List } from 'antd-mobile'
import { Button, WhiteSpace, WingBlank, Flex, Icon} from 'antd-mobile';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import './StaffStatus.less'
import axios from 'axios'

class StaffStatus extends Component {

    
    state = {
        Status:[]
      }

     constructor(){
       super();
       axios.get('https://sadbackend-cyt.herokuapp.com/api/v1/gym/list').then( 
           (response) => {console.log(response)
           this.setState({Status :response.data.data})
           }
        )
     }
     

    render() { 
              
        return (
            <div style={{ width: '428px' , height: '926px', background: "#F5D19B"}}>
                <div style={{ width: '100%' , height: '80px'}}><Button href="/staff" inline style={{ width: '60px' , height: '30px', marginLeft: '40px',marginTop:"50px",border:"transparent", background:"transparent"}}><div class="backb"><Icon type="left" size="md"/></div></Button></div>
                <div class="title">Gym List</div>
                {this.state.Status.map((GymStatus) => (

                   <div>
                       <Link to={"/staff/gympanel/"+ GymStatus.name + "&" + GymStatus.branch_gym_id}  >
                       <div class='shadowdiv' style={{ width: '390px' , height: '74px'}}>
                            <Flex justify="center">
                                {GymStatus.status == 'uncrowded'   
                                ?(<div style={{ width: '2px' , height: '74px', background: "#34C759"}}></div>) 
                                :(<div style={{ width: '2px' , height: '74px', background: "#DE5D4D"}}></div>)}
                                
                                <div style={{ width: '388px' , height: '74px', background: "#FFFFFF"}}>
                                    <Flex justify="center">
                                        <div style={{ width: '344px' , height: '74px', background: "#FFFFFF"}}>
                                            <div style={{ width: '344px' , height: '50px', background: "#FFFFFF"}}>
                                                <Flex justify="center">
                                                    <div class = 'branchtext' style={{ width: '250px' , height: '50px', background: "#FFFFFF"}}>{GymStatus.name}</div>
                                                    <div style={{ width: '94px' , height: '50px', background: "#FFFFFF"}}> 
                                                        <Flex justify="center">
                                                            <div style={{ width: '11px' , height: '50px', background: "#FFFFFF"}}>
                                                                <div style={{ width: '11px' , height: '19.5px', background: "#FFFFFF"}}></div>
                                                                {GymStatus.status == 'uncrowded'   
                                                                ?( <div class = 'circle' style={{ width: '11px' , height: '11px', background: "#34C759"}}></div>) 
                                                                :( <div class = 'circle' style={{ width: '11px' , height: '11px', background: "#DE5D4D"}}></div>)}
                                                                
                                                                <div style={{ width: '11px' , height: '19.5px', background: "#FFFFFF"}}></div>
                                                            </div>
                                                            
                                                            {GymStatus.status == 'uncrowded'   
                                                            ?( <div class='statustext' style={{ width: '83px' , height: '50px', background: "#FFFFFF", color: "#34C759"}}>{GymStatus.status}</div>) 
                                                            :( <div class='statustext' style={{ width: '83px' , height: '50px', background: "#FFFFFF", color: "#de5d4d"}}>{GymStatus.status}</div> )}
                                                        </Flex>
                                                    </div>
                                                </Flex>
                                            </div>
                                            <div class = 'addrtext' style={{ width: '344px' , height: '24px', background: "#FFFFFF"}}>{GymStatus.address}</div>
                                        </div>
                                        
                                        <div style={{ width: '44px' , height: '74px', background: "#FFFFFF"}}>
                                            <div style={{ width: '44px' , height: '15px', background: "#FFFFFF"}}></div>
                                            <div style={{ width: '44px' , height: '59px', background: "#FFFFFF"}}><Icon type='right' /></div>
                                        </div>
                                    </Flex>
                                </div>
                            </Flex>
                        </div>
                        </Link>

                        <WhiteSpace size="sm" />
                   </div>

                ))}
            
            </div>
        );
    }
   
}
 
export default StaffStatus;