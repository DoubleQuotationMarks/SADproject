import React, { Component} from 'react';
import { Accordion, List  } from 'antd-mobile';
import { ActionSheet, WhiteSpace, WingBlank , Badge ,Toast ,Button, Modal } from 'antd-mobile';
import "./CustEqp.less"
import axios from 'axios'
import abs from "./abs.png"
import arm from './arm.png'
import back from './back.png'
import cardio from './cardio.png'
import chest from './chest.png'
import hips from './hip.png'
import leg from './leg.png'
import { Nav, NavItem} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faHome, faUserCircle } from '@fortawesome/free-solid-svg-icons';
const Item = List.Item;
const Brief = Item.Brief;
     let Gymname = window.location.pathname
     let Gymname1 = Gymname.replace('/gym/gymstate/','')
     let Gymname2 =Gymname1.split('_')

//useGymname2[2] for user id

let tabs = [{
  route: "/profile/"+Gymname2[2],
  icon: faUserCircle,
  label: "User"
},{
  route: "/home/"+Gymname2[2],
  icon: faHome,
  label: "Home"
},{
  route: "/setting/"+Gymname2[2],
  icon: faGear,
  label: "Settings"
}]


// const api = axios.create({
//     baseURL:'https://628205b3ed9edf7bd87d009e.mockapi.io/'+Gymname1
//   })
  
class CustomerEquipment extends Component {
   
    state = {
        EQUIP:[]
      }

     constructor(){
       super();
      //  api.get('/').then(res =>{
      //    console.log(res.data)
      //    this.setState({equip :res.data})
      //  })
      axios.get('https://sadbackend-cyt.herokuapp.com/api/v1/gym/machine/category/'+Gymname2[1]).then( 
        (response) => {
          console.log(response)
          console.log(response.data.data)
           this.setState({ EQUIP:response.data.data})
        
        })
        .catch(function(error) {
          console.log(error);
        })
   

     }

      
    render() { 
  
        return (
            <div style={{backgroundColor: "#FFF3D4" ,position:'fixed',width: '100%',height: '100%'}}>
                 
            <Button href={"/gym/"+Gymname2[2]} inline style={{ marginLeft: '40px',marginTop:"50px" ,backgroundColor:'#FFF3D4'}}>Back</Button>
            <p class ="CustTittle">{Gymname2[0]}</p>   
            <br></br>
        
           {this.state.EQUIP.map( ( equipData )  =>(  
           <div >
            <WingBlank size="sm">
            <WhiteSpace size="sm" />
                 
         
           
          {equipData.category === 'back'  && equipData.machines ? 
             <Accordion  defaultActiveKey="1" className="my-accordion" onChange={this.onChange} style ={{backgroundColor:"#46B862"}} >
             <Accordion.Panel header= {  
            <img src={back}  style= {{marginLeft : "30px"}}/>} >
              <div style ={{backgroundColor:"#FFF3D4"}}>
                      {equipData.machines.map((barang ) => (
                          <Item arrow="none"  extra={barang.waiting_ppl+'ppl'} id ={barang.machine_id} >
                         
                              <div>{barang.name}
                              {barang.waiting_ppl <= 4 ? (
                                <div class="circleEquipStat " style ={{ backgroundColor: "#57FF89" ,marginRight :'110px' ,marginTop:'10px'} }></div>
                              ) :(
                                <div class="circleEquipStat " style ={{ backgroundColor: "#FF6164" ,marginRight :'110px' ,marginTop:'10px'} }></div>
                              )}       
                              </div>
                            
                          </Item>
                      ))}
                      </div>
            </Accordion.Panel>
       
            </Accordion>
            : equipData.category === 'chest' && equipData.machines?
            <Accordion  defaultActiveKey="1" className="my-accordion" onChange={this.onChange} style ={{backgroundColor:"#FAA61A"}} >
            <Accordion.Panel header= {
              <img src={chest} style= {{marginLeft : "30px" }}/>
              } >
            <div style ={{backgroundColor:"#FFF3D4"}}>
            {equipData.machines.map((barang ) => (
                <Item arrow="none"  extra={barang.waiting_ppl+'ppl'} id ={barang.machine_id}  >
                    <div>{barang.name}
                    {barang.waiting_ppl <= 4 ? (
                      <div class="circleEquipStat " style ={{ backgroundColor: "#57FF89" ,marginRight :'110px' ,marginTop:'10px'} }></div>
                    ) :(
                      <div class="circleEquipStat " style ={{ backgroundColor: "#FF6164" ,marginRight :'110px' ,marginTop:'10px'} }></div>
                    )}       
                    </div>
                </Item>
            ))}
            </div>
            </Accordion.Panel>
            </Accordion>
            : equipData.category === 'cardio' && equipData.machines?
            <Accordion  defaultActiveKey="1" className="my-accordion" onChange={this.onChange} style ={{backgroundColor:"#F5D19B"}} >
            <Accordion.Panel header= {
              <img src={cardio} style= {{marginLeft : "30px" }}/>
              } >
              <div style ={{backgroundColor:"#FFF3D4"}}>
            {equipData.machines.map((barang ) => (
                <Item arrow="none"  extra={barang.waiting_ppl+'ppl'} id ={barang.machine_id} >
                    <div>{barang.name}
                    {barang.waiting_ppl <= 4 ? (
                      <div class="circleEquipStat " style ={{ backgroundColor: "#57FF89" ,marginRight :'110px' ,marginTop:'10px'} }></div>
                    ) :(
                      <div class="circleEquipStat " style ={{ backgroundColor: "#FF6164" ,marginRight :'110px' ,marginTop:'10px'} }></div>
                    )}       
                    </div>
                </Item>
            ))}
            </div>
            </Accordion.Panel>
            </Accordion>
            : equipData.category === 'abs'&& equipData.machines ?
            <Accordion  defaultActiveKey="1" className="my-accordion" onChange={this.onChange} style ={{backgroundColor:"#DE5D4D"}} >
            <Accordion.Panel header= {
              <img src={abs} style= {{marginLeft : "30px" }}/>
            }>
              <div style ={{backgroundColor:"#FFF3D4"}}>
            {equipData.machines.map((barang ) => (
                <Item arrow="none"  extra={barang.waiting_ppl+'ppl'} id ={barang.machine_id}  >
                    <div>{barang.name}
                    {barang.waiting_ppl <= 4 ? (
                      <div class="circleEquipStat " style ={{ backgroundColor: "#57FF89" ,marginRight :'110px' ,marginTop:'10px'} }></div>
                    ) :(
                      <div class="circleEquipStat " style ={{ backgroundColor: "#FF6164" ,marginRight :'110px' ,marginTop:'10px'} }></div>
                    )}       
                    </div>
                </Item>
            ))}
            </div>
            </Accordion.Panel>
            </Accordion>
            : equipData.category === "leg" && equipData.machines?
            <Accordion  defaultActiveKey="1" className="my-accordion" onChange={this.onChange} style ={{backgroundColor:"#3B5998"}} >
            <Accordion.Panel header= {
              <img src={leg} style= {{marginLeft : "30px" }}/>
            }>
              <div style ={{backgroundColor:"#FFF3D4"}}>
            {equipData.machines.map((barang ) => (
                <Item arrow="none"  extra={barang.waiting_ppl+'ppl'} id ={barang.machine_id}  >
                    <div>{barang.name}
                    {barang.waiting_ppl <= 4 ? (
                      <div class="circleEquipStat " style ={{ backgroundColor: "#57FF89" ,marginRight :'110px' ,marginTop:'10px'} }></div>
                    ) :(
                      <div class="circleEquipStat " style ={{ backgroundColor: "#FF6164" ,marginRight :'110px' ,marginTop:'10px'} }></div>
                    )}       
                    </div>
                </Item>
            ))}
            </div>
            </Accordion.Panel>
            </Accordion>
          : equipData.category === "arm" && equipData.machines?
          <Accordion  defaultActiveKey="1" className="my-accordion" onChange={this.onChange} style ={{backgroundColor:"#ADADAD"}} >
          <Accordion.Panel header= {
            <img src={arm} style= {{marginLeft : "30px" }}/>
          }>
            <div style ={{backgroundColor:"#FFF3D4"}}>
          {equipData.machines.map((barang ) => (
              <Item arrow="none"  extra={barang.waiting_ppl+'ppl'} id ={barang.machine_id} >
                  <div>{barang.name}
                  {barang.waiting_ppl<= 4 ? (
                    <div class="circleEquipStat " style ={{ backgroundColor: "#57FF89" ,marginRight :'110px' ,marginTop:'10px'} }></div>
                  ) :(
                    <div class="circleEquipStat " style ={{ backgroundColor: "#FF6164" ,marginRight :'110px' ,marginTop:'10px'} }></div>
                  )}       
                  </div>
              </Item>
          ))}
          </div>
          </Accordion.Panel>
          </Accordion>
            :equipData.category === "hips" && equipData.machines?
            <Accordion  defaultActiveKey="1" className="my-accordion" onChange={this.onChange}  style ={{backgroundColor:"#8E78FF"}} >
            <Accordion.Panel header= {
          <img src={hips} style= {{marginLeft : "30px" }}/>

            }>
              <div style ={{backgroundColor:"#FFF3D4"}}>
            {equipData.machines.map((barang ) => (
                <Item arrow="none"  extra={barang.waiting_ppl+'ppl'} id ={barang.machine_id}  >
                    <div>{barang.name}
                    {barang.waiting_ppl <= 4 ? (
                      <div class="circleEquipStat " style ={{ backgroundColor: "#57FF89" ,marginRight :'110px' ,marginTop:'10px'} }></div>
                    ) :(
                      <div class="circleEquipStat " style ={{ backgroundColor: "#FF6164" ,marginRight :'110px' ,marginTop:'10px'} }></div>
                    )}       
                    </div>
                </Item>
            ))}
            </div>
            </Accordion.Panel>
            </Accordion>
            :
              <div></div>
          }
           
     
            <WhiteSpace size="sm" />
            </WingBlank>
           
        </div>) )}
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
 
export default CustomerEquipment;