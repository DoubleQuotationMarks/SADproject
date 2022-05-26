import React from 'react';
import { useState , useEffect} from "react";
import {Component }from 'react';
import { Button, WhiteSpace, WingBlank, Flex, Picker, List, Icon} from 'antd-mobile';
import { Nav, NavItem} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faHome, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import './MyProgram.less'

let userid = window.location.pathname
let userid1 = userid.replace('/myprogram/','')
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
const seasons = [
  [
    {
      label: 'arm',
      value: 'arm',
    },
    {
      label: 'aerobic',
      value: 'aerobic',
    },
    {
      label: 'chest',
      value: 'chest',
    },
    {
      label: 'abdomen',
      value: 'abdomen',
    },
    {
      label: 'thigh',
      value: 'thigh',
    },
    {
      label: 'hip',
      value: 'hip',
    },
    {
      label: 'back',
      value: 'back',
    },
  ],
  [
    {
      label: 'easy',
      value: 'easy',
    },
    {
      label: 'normal',
      value: 'normal',
    },
    {
      label: 'advanced',
      value: 'advanced',
    },{
      label: 'expert',
      value: 'expert',
    },
  ],
];





class MyProgram extends React.Component {
  state = {
    MO: [],
    TU: [],
    WE: [],
    TH: [],
    FR: [],
    SA: [],
    SU: [],
  };

  addMO (vv) {
    this.setState({
      MO: [...this.state.MO, vv]
    });
  };
  addTU (vv) {
    this.setState({
      TU: [...this.state.TU, vv]
    });
  };
  addWE (vv) {
    this.setState({
      WE: [...this.state.WE, vv]
    });
  };
  addTH (vv) {
    this.setState({
      TH: [...this.state.TH, vv]
    });
  };
  addFR (vv) {
    this.setState({
      FR: [...this.state.FR, vv]
    });
  };
  addSA (vv) {
    this.setState({
      SA: [...this.state.SA, vv]
    });
  };
  addSU (vv) {
    this.setState({
      SU: [...this.state.SU, vv]
    });
  };


  componentDidUpdate(){
    console.log(this.state);
  };

  render() {
    return (

      <div style={{ width: '428px' , height: '926px', background: "#F5D19B"}}>
          <div style={{ width: '100%' , height: '80px'}}><Button href={"/home/"+userid1} inline style={{ width: '60px' , height: '30px', marginLeft: '40px',marginTop:"50px",border:"transparent", background:"transparent"}}><div class="backb"><Icon type="left" size="md"/></div></Button></div>
          <div class="title">My Program</div>
          <WhiteSpace></WhiteSpace>
          <WingBlank>
          <div class = "calendiv" style={{ background: "#E5E5E5",width: '380px' , height: '350px'}}>
          <WhiteSpace></WhiteSpace>
          <div class = "roundborder" style={{width: '350px' , height: '40px'}}>

            <Flex>
            <div class = "dateb" style={{width: '50px' , height: '40px'}}>MO</div>
            <div class = "roundborder" style={{ background: "#FFFFFF",width: '300px' , height: '40px'}}>
            <div style={{width: '400px' , height: '5px'}}></div>
            <Flex>
            {this.state.MO.map( ( part )  =>(  
              <Flex.Item> {part[0] == 'arm'?<div class = "partb" style={{height: '30px', background: "#DE5D4D"}}>{part[0]}</div>
                          :part[0] == 'aerobic'?<div class = "partb" style={{height: '30px', background: "#F2994A"}}>{part[0]}</div>
                          :part[0] == 'chest'?<div class = "partb" style={{height: '30px', background: "#F2C94C"}}>{part[0]}</div>
                          :part[0] == 'back'?<div class = "partb" style={{height: '30px', background: "#219653"}}>{part[0]}</div>
                          :part[0] == 'abdomen'?<div class = "partb" style={{height: '30px', background: "#2D9CDB"}}>{part[0]}</div>
                          :part[0] == 'thigh'?<div class = "partb" style={{height: '30px', background: "#2F80ED"}}>{part[0]}</div>
                          :part[0] == 'hip'?<div class = "partb" style={{height: '30px', background: "#9B51E0"}}>{part[0]}</div>:<div></div>}</Flex.Item>
            ))}
            <Flex.Item>
            <Picker
            data={seasons}
            title="Select training part and intensity"
            cascade={false}
            extra=""
            value=""
            onOk={v => this.addMO(v)}
            > 
            <div style={{ color: "#FFFFFF"}}> 12</div>
            </Picker>
            </Flex.Item>
            </Flex>
            
            </div>
            </Flex>
          </div>
          <WhiteSpace></WhiteSpace>



          <div class = "roundborder" style={{width: '350px' , height: '40px'}}>

            <Flex>
            <div class = "dateb" style={{width: '50px' , height: '40px'}}>TU</div>
            <div class = "roundborder" style={{ background: "#FFFFFF",width: '300px' , height: '40px'}}>
            <div style={{width: '400px' , height: '5px'}}></div>
            <Flex>
            {this.state.TU.map( ( part )  =>(  
              <Flex.Item> {part[0] == 'arm'?<div class = "partb" style={{height: '30px', background: "#DE5D4D"}}>{part[0]}</div>
                          :part[0] == 'aerobic'?<div class = "partb" style={{height: '30px', background: "#F2994A"}}>{part[0]}</div>
                          :part[0] == 'chest'?<div class = "partb" style={{height: '30px', background: "#F2C94C"}}>{part[0]}</div>
                          :part[0] == 'back'?<div class = "partb" style={{height: '30px', background: "#219653"}}>{part[0]}</div>
                          :part[0] == 'abdomen'?<div class = "partb" style={{height: '30px', background: "#2D9CDB"}}>{part[0]}</div>
                          :part[0] == 'thigh'?<div class = "partb" style={{height: '30px', background: "#2F80ED"}}>{part[0]}</div>
                          :part[0] == 'hip'?<div class = "partb" style={{height: '30px', background: "#9B51E0"}}>{part[0]}</div>:<div></div>}</Flex.Item>
            ))}
            <Flex.Item>
            <Picker
            data={seasons}
            title="Select training part and intensity"
            cascade={false}
            extra=""
            value=""
            onOk={v => this.addTU(v)}
            > 
            <div style={{ color: "#FFFFFF"}}> 12</div>
            </Picker>
            </Flex.Item>
            </Flex>
            
            </div>
            </Flex>
          </div>          <WhiteSpace></WhiteSpace>



          <div class = "roundborder" style={{width: '350px' , height: '40px'}}>

            <Flex>
            <div class = "dateb" style={{width: '50px' , height: '40px'}}>WE</div>
            <div class = "roundborder" style={{ background: "#FFFFFF",width: '300px' , height: '40px'}}>
            <div style={{width: '400px' , height: '5px'}}></div>
            <Flex>
            {this.state.WE.map( ( part )  =>(  
              <Flex.Item> {part[0] == 'arm'?<div class = "partb" style={{height: '30px', background: "#DE5D4D"}}>{part[0]}</div>
                          :part[0] == 'aerobic'?<div class = "partb" style={{height: '30px', background: "#F2994A"}}>{part[0]}</div>
                          :part[0] == 'chest'?<div class = "partb" style={{height: '30px', background: "#F2C94C"}}>{part[0]}</div>
                          :part[0] == 'back'?<div class = "partb" style={{height: '30px', background: "#219653"}}>{part[0]}</div>
                          :part[0] == 'abdomen'?<div class = "partb" style={{height: '30px', background: "#2D9CDB"}}>{part[0]}</div>
                          :part[0] == 'thigh'?<div class = "partb" style={{height: '30px', background: "#2F80ED"}}>{part[0]}</div>
                          :part[0] == 'hip'?<div class = "partb" style={{height: '30px', background: "#9B51E0"}}>{part[0]}</div>:<div></div>}</Flex.Item>
            ))}
            <Flex.Item>
            <Picker
            data={seasons}
            title="Select training part and intensity"
            cascade={false}
            extra=""
            value=""
            onOk={v => this.addWE(v)}
            > 
            <div style={{ color: "#FFFFFF"}}> 12</div>
            </Picker>
            </Flex.Item>
            </Flex>
            
            </div>
            </Flex>
          </div>          <WhiteSpace></WhiteSpace>



          <div class = "roundborder" style={{width: '350px' , height: '40px'}}>

            <Flex>
            <div class = "dateb" style={{width: '50px' , height: '40px'}}>TH</div>
            <div class = "roundborder" style={{ background: "#FFFFFF",width: '300px' , height: '40px'}}>
            <div style={{width: '400px' , height: '5px'}}></div>
            <Flex>
            {this.state.TH.map( ( part )  =>(  
              <Flex.Item> {part[0] == 'arm'?<div class = "partb" style={{height: '30px', background: "#DE5D4D"}}>{part[0]}</div>
                          :part[0] == 'aerobic'?<div class = "partb" style={{height: '30px', background: "#F2994A"}}>{part[0]}</div>
                          :part[0] == 'chest'?<div class = "partb" style={{height: '30px', background: "#F2C94C"}}>{part[0]}</div>
                          :part[0] == 'back'?<div class = "partb" style={{height: '30px', background: "#219653"}}>{part[0]}</div>
                          :part[0] == 'abdomen'?<div class = "partb" style={{height: '30px', background: "#2D9CDB"}}>{part[0]}</div>
                          :part[0] == 'thigh'?<div class = "partb" style={{height: '30px', background: "#2F80ED"}}>{part[0]}</div>
                          :part[0] == 'hip'?<div class = "partb" style={{height: '30px', background: "#9B51E0"}}>{part[0]}</div>:<div></div>}</Flex.Item>
            ))}
            <Flex.Item>
            <Picker
            data={seasons}
            title="Select training part and intensity"
            cascade={false}
            extra=""
            value=""
            onOk={v => this.addTH(v)}
            > 
            <div style={{ color: "#FFFFFF"}}> 12</div>
            </Picker>
            </Flex.Item>
            </Flex>
            
            </div>
            </Flex>
          </div>          <WhiteSpace></WhiteSpace>



          <div class = "roundborder" style={{width: '350px' , height: '40px'}}>

            <Flex>
            <div class = "dateb" style={{width: '50px' , height: '40px'}}>FR</div>
            <div class = "roundborder" style={{ background: "#FFFFFF",width: '300px' , height: '40px'}}>
            <div style={{width: '400px' , height: '5px'}}></div>
            <Flex>
            {this.state.FR.map( ( part )  =>(  
              <Flex.Item> {part[0] == 'arm'?<div class = "partb" style={{height: '30px', background: "#DE5D4D"}}>{part[0]}</div>
                          :part[0] == 'aerobic'?<div class = "partb" style={{height: '30px', background: "#F2994A"}}>{part[0]}</div>
                          :part[0] == 'chest'?<div class = "partb" style={{height: '30px', background: "#F2C94C"}}>{part[0]}</div>
                          :part[0] == 'back'?<div class = "partb" style={{height: '30px', background: "#219653"}}>{part[0]}</div>
                          :part[0] == 'abdomen'?<div class = "partb" style={{height: '30px', background: "#2D9CDB"}}>{part[0]}</div>
                          :part[0] == 'thigh'?<div class = "partb" style={{height: '30px', background: "#2F80ED"}}>{part[0]}</div>
                          :part[0] == 'hip'?<div class = "partb" style={{height: '30px', background: "#9B51E0"}}>{part[0]}</div>:<div></div>}</Flex.Item>
            ))}
            <Flex.Item>
            <Picker
            data={seasons}
            title="Select training part and intensity"
            cascade={false}
            extra=""
            value=""
            onOk={v => this.addFR(v)}
            > 
            <div style={{ color: "#FFFFFF"}}> 12</div>
            </Picker>
            </Flex.Item>
            </Flex>
            
            </div>
            </Flex>
          </div>          <WhiteSpace></WhiteSpace>


          <div class = "roundborder" style={{width: '350px' , height: '40px'}}>

            <Flex>
            <div class = "dateb" style={{width: '50px' , height: '40px'}}>SA</div>
            <div class = "roundborder" style={{ background: "#FFFFFF",width: '300px' , height: '40px'}}>
            <div style={{width: '400px' , height: '5px'}}></div>
            <Flex>
            {this.state.SA.map( ( part )  =>(  
              <Flex.Item> {part[0] == 'arm'?<div class = "partb" style={{height: '30px', background: "#DE5D4D"}}>{part[0]}</div>
                          :part[0] == 'aerobic'?<div class = "partb" style={{height: '30px', background: "#F2994A"}}>{part[0]}</div>
                          :part[0] == 'chest'?<div class = "partb" style={{height: '30px', background: "#F2C94C"}}>{part[0]}</div>
                          :part[0] == 'back'?<div class = "partb" style={{height: '30px', background: "#219653"}}>{part[0]}</div>
                          :part[0] == 'abdomen'?<div class = "partb" style={{height: '30px', background: "#2D9CDB"}}>{part[0]}</div>
                          :part[0] == 'thigh'?<div class = "partb" style={{height: '30px', background: "#2F80ED"}}>{part[0]}</div>
                          :part[0] == 'hip'?<div class = "partb" style={{height: '30px', background: "#9B51E0"}}>{part[0]}</div>:<div></div>}</Flex.Item>
            ))}
            <Flex.Item>
            <Picker
            data={seasons}
            title="Select training part and intensity"
            cascade={false}
            extra=""
            value=""
            onOk={v => this.addSA(v)}
            > 
            <div style={{ color: "#FFFFFF"}}> 12</div>
            </Picker>
            </Flex.Item>
            </Flex>
            
            </div>
            </Flex>
          </div>          <WhiteSpace></WhiteSpace>


          <div class = "roundborder" style={{width: '350px' , height: '40px'}}>

            <Flex>
            <div class = "dateb" style={{width: '50px' , height: '40px'}}>SU</div>
            <div class = "roundborder" style={{ background: "#FFFFFF",width: '300px' , height: '40px'}}>
            <div style={{width: '400px' , height: '5px'}}></div>
            <Flex>
            {this.state.SU.map( ( part )  =>(  
              <Flex.Item> {part[0] == 'arm'?<div class = "partb" style={{height: '30px', background: "#DE5D4D"}}>{part[0]}</div>
                          :part[0] == 'aerobic'?<div class = "partb" style={{height: '30px', background: "#F2994A"}}>{part[0]}</div>
                          :part[0] == 'chest'?<div class = "partb" style={{height: '30px', background: "#F2C94C"}}>{part[0]}</div>
                          :part[0] == 'back'?<div class = "partb" style={{height: '30px', background: "#219653"}}>{part[0]}</div>
                          :part[0] == 'abdomen'?<div class = "partb" style={{height: '30px', background: "#2D9CDB"}}>{part[0]}</div>
                          :part[0] == 'thigh'?<div class = "partb" style={{height: '30px', background: "#2F80ED"}}>{part[0]}</div>
                          :part[0] == 'hip'?<div class = "partb" style={{height: '30px', background: "#9B51E0"}}>{part[0]}</div>:<div></div>}</Flex.Item>
            ))}
            <Flex.Item>
            <Picker
            data={seasons}
            title="Select training part and intensity"
            cascade={false}
            extra=""
            value=""
            onOk={v => this.addSU(v)}
            > 
            <div style={{ color: "#FFFFFF"}}> 12</div>
            </Picker>
            </Flex.Item>
            </Flex>
            
            </div>
            </Flex>
          </div>       


          </div>
          <div style={{ width: '400px' , height: '25px'}}></div>
          <div class = "calendiv" style={{ background: "#FFF3D4",width: '380px' , height: '50px'}}><div class="suggb">Suggestion</div></div>
          <div style={{ width: '400px' , height: '25px'}}></div>
          <div class="infob" style={{ width: '300px'}}>We will suggest you a training program based on your body information.</div>
          </WingBlank>
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
      
    );
  }
}
export default MyProgram;