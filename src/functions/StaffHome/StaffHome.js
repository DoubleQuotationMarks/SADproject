import React, { Component } from 'react';
import { List, Accordion, Icon, Button, Flex, WhiteSpace, WingBlank } from 'antd-mobile';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import staff_p1 from './status.png'
import staff_p2 from './static.png'
import staff_p3 from './reserve.png'
import staff_p4 from './other.png'
import './StaffHome.less'

class StaffHome extends Component {


  
      state = {
        home:[]
      }

     constructor(){
         super();
     }

    render() { 
        return (
          
            <div style={{ width: '428px' , height: '926px', background: "#F5D19B"}}>
            <div style={{ width: '100%' , height: '80px'}}></div>
            <div class="title">Dashboard</div>
    
            <div class="roundborder" style={{ width: '379px' , height: '766px', border_radius: '30px', background: "#FFFFFF"}}>
                <div style={{ width: '100%' , height: '37px'}}></div>
                <Flex justify="center">
                    
                    <WingBlank size="sm">
                        <Button href = "/staff/status" style={{ width: '166px' , height: '166px', background: "#fff3d4", borderColor: "#fff3d4" }}>
                            <Flex style={{ width: '166px' , height: '20px'}} justify='center'></Flex>
                            <Flex style={{ width: '166px' , height: '100px'}} justify='center'>
                                <img src={staff_p1} class = "photo"/>
                            </Flex>
                            <Flex class="subtitle" style={{ width: '166px' , height: '50px'}} justify="center">
                                Equipment Status
                            </Flex>
                        </Button>
                    </WingBlank>
                    
                    <WingBlank size="sm">
                        <Button href = "/staff/static" style={{ width: '166px' , height: '166px', background: "#fff3d4", borderColor: "#fff3d4"}}>
                            <Flex style={{ width: '166px' , height: '20px'}} justify='center'></Flex>
                            <Flex style={{ width: '166px' , height: '100px'}} justify='center'>
                                <img src={staff_p2} class = "photo"/>
                            </Flex>
                            <Flex class="subtitle" style={{ width: '166px' , height: '50px'}} justify="center">
                                Statistic
                            </Flex>
                        </Button>
                    </WingBlank>
    
                </Flex>
                <WhiteSpace size="lg" />
                <Flex justify="center">
                    <WingBlank size="sm">
                        <Button style={{ width: '166px' , height: '166px', background: "#fff3d4", borderColor: "#fff3d4"}}>
                            <Flex style={{ width: '166px' , height: '20px'}} justify='center'></Flex>
                            <Flex style={{ width: '166px' , height: '100px'}} justify='center'>
                                <img src={staff_p3} class = "photo"/>
                            </Flex>
                            <Flex class="subtitle" style={{ width: '166px' , height: '50px'}} justify="center">
                                Reservation
                            </Flex>
                        </Button>
                    </WingBlank>
                    <WingBlank size="sm">
                        <Button style={{ width: '166px' , height: '166px', background: "#fff3d4", borderColor: "#fff3d4"}}>
                            <Flex style={{ width: '166px' , height: '20px'}} justify='center'></Flex>
                            <Flex style={{ width: '166px' , height: '100px'}} justify='center'>
                                <img src={staff_p4} class = "photo"/>
                            </Flex>
                            <Flex class="subtitle" style={{ width: '166px' , height: '50px'}} justify="center">
                                Others
                            </Flex>
                        </Button>
                    </WingBlank>
                </Flex>
                </div>
        </div>

        
        );
    }
}
 
export default StaffHome;