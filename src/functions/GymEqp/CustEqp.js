import React, { Component} from 'react';
import { Accordion, List  } from 'antd-mobile';
import { ActionSheet, WhiteSpace, WingBlank , Badge ,Toast ,Button, Modal } from 'antd-mobile';
import "./CustEqp.less"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams
  } from "react-router-dom";
  import { withRouter } from "react-router";
  import axios from 'axios'
import abs from "./abs.png"
import arm from './arm.png'
import back from './back.png'
import cardio from './cardio.png'
import chest from './chest.png'
import hips from './hip.png'
import leg from './leg.png'

const Item = List.Item;
const Brief = Item.Brief;
     let Gymname = window.location.pathname
         let Gymname1 = Gymname.replace('/gymequip/','')

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
      axios.get('https://sadbackend-cyt.herokuapp.com/api/v1/gym/machine?gym_id=branch-1000001&sorted_by=category').then( 
        (response) => {
          console.log(response.data.data)
          console.log(Object.getOwnPropertyNames(response.data))
           this.setState({ EQUIP:response.data.data})
        
        })
        .catch(function(error) {
          console.log(error);
        })

     }

      
    render() { 
  
        return (
            <div style={{backgroundColor: "#FFF3D4" }}>
                 
            <Button href="/gymlist" inline style={{ marginLeft: '40px',marginTop:"50px", backgroundColor:'#FFF3D4' }}>Back</Button>
            <p class ="CustTittle">{Gymname1}</p>   
            <br></br>
            {/* <p>{EQUIP}</p> */}
            {/* {this.state.EQUIP.map((data) => (
              <div>{data}</div>
            ))} */}
           {/* {this.state.equip.map( ( equipData )  =>(  
           <div  >
            <WingBlank size="sm">
            <WhiteSpace size="sm" />                
            <Accordion  defaultActiveKey="1" className="my-accordion" onChange={this.onChange} >
           
          {Object.getOwnPropertyNames(equipData) == 'abs' ? 
            <Accordion.Panel header= {  
            <div style ={{backgroundColor:"#46B862"}}>
            <img src={abs} style= {{marginLeft : "30px" }}/>
            </div>} >
                      {equipData.equipment.map((barang ) => (
                          <Item arrow="none"  extra={barang.people+'ppl'} id ={barang.equipmentId} >
                              <div>{barang.equipmentName}
                              {barang.people <= 5 ? (
                                <div class="circleEquipStat " style ={{ backgroundColor: "#57FF89" ,marginRight :'110px' ,marginTop:'10px'} }></div>
                              ) :(
                                <div class="circleEquipStat " style ={{ backgroundColor: "#FF6164" ,marginRight :'110px' ,marginTop:'10px'} }></div>
                              )}       
                              </div>
                          </Item>
                      ))}
            </Accordion.Panel>
            : Object.getOwnPropertyNames(equipData) == 'arm'?
            <Accordion.Panel header= {
              <div style ={{backgroundColor:"#FAA61A"}}>
              <img src={arm} style= {{marginLeft : "30px" }}/>
              </div>}
               >
            {equipData.equipment.map((barang ) => (
                <Item arrow="none"  extra={barang.people+'ppl'} id ={barang.equipmentId} >
                    <div>{barang.equipmentName}
                    {barang.people <= 5 ? (
                      <div class="circleEquipStat " style ={{ backgroundColor: "#57FF89" ,marginRight :'110px' ,marginTop:'10px'} }></div>
                    ) :(
                      <div class="circleEquipStat " style ={{ backgroundColor: "#FF6164" ,marginRight :'110px' ,marginTop:'10px'} }></div>
                    )}       
                    </div>
                </Item>
            ))}
            </Accordion.Panel>
            : Object.getOwnPropertyNames(equipData) == 'back' ?
            <Accordion.Panel header= {
              <div style ={{backgroundColor:"#F5D19B"}}>
              <img src={back} style= {{marginLeft : "30px" }}/>
              </div>} >
            {equipData.equipment.map((barang ) => (
                <Item arrow="none"  extra={barang.people+'ppl'} id ={barang.equipmentId} >
                    <div>{barang.equipmentName}
                    {barang.people <= 5 ? (
                      <div class="circleEquipStat " style ={{ backgroundColor: "#57FF89" ,marginRight :'110px' ,marginTop:'10px'} }></div>
                    ) :(
                      <div class="circleEquipStat " style ={{ backgroundColor: "#FF6164" ,marginRight :'110px' ,marginTop:'10px'} }></div>
                    )}       
                    </div>
                </Item>
            ))}
            </Accordion.Panel>
            : Object.getOwnPropertyNames(equipData) == 'cardio' ?
            <Accordion.Panel header= {
              <div style ={{backgroundColor:"#DE5D4D"}}>
              <img src={cardio} style= {{marginLeft : "30px" }}/>
              </div>
            }>
            {equipData.equipment.map((barang ) => (
                <Item arrow="none"  extra={barang.people+'ppl'} id ={barang.equipmentId} >
                    <div>{barang.equipmentName}
                    {barang.people <= 5 ? (
                      <div class="circleEquipStat " style ={{ backgroundColor: "#57FF89" ,marginRight :'110px' ,marginTop:'10px'} }></div>
                    ) :(
                      <div class="circleEquipStat " style ={{ backgroundColor: "#FF6164" ,marginRight :'110px' ,marginTop:'10px'} }></div>
                    )}       
                    </div>
                </Item>
            ))}
            </Accordion.Panel>
            : Object.getOwnPropertyNames(equipData) == "chest" ?
            <Accordion.Panel header= {
              <div style ={{backgroundColor:"#3B5998"}}>
              <img src={chest} style= {{marginLeft : "30px" }}/>
              </div>
            }>
            {equipData.equipment.map((barang ) => (
                <Item arrow="none"  extra={barang.people+'ppl'} id ={barang.equipmentId} >
                    <div>{barang.equipmentName}
                    {barang.people <= 5 ? (
                      <div class="circleEquipStat " style ={{ backgroundColor: "#57FF89" ,marginRight :'110px' ,marginTop:'10px'} }></div>
                    ) :(
                      <div class="circleEquipStat " style ={{ backgroundColor: "#FF6164" ,marginRight :'110px' ,marginTop:'10px'} }></div>
                    )}       
                    </div>
                </Item>
            ))}
            </Accordion.Panel>
          : Object.getOwnPropertyNames(equipData) == "hips" ?
          <Accordion.Panel header= {
            <div style ={{backgroundColor:"#ADADAD"}}>
            <img src={hips} style= {{marginLeft : "30px" }}/>
            </div>
          }>
          {equipData.equipment.map((barang ) => (
              <Item arrow="none"  extra={barang.people+'ppl'} id ={barang.equipmentId} >
                  <div>{barang.equipmentName}
                  {barang.people <= 5 ? (
                    <div class="circleEquipStat " style ={{ backgroundColor: "#57FF89" ,marginRight :'110px' ,marginTop:'10px'} }></div>
                  ) :(
                    <div class="circleEquipStat " style ={{ backgroundColor: "#FF6164" ,marginRight :'110px' ,marginTop:'10px'} }></div>
                  )}       
                  </div>
              </Item>
          ))}
          </Accordion.Panel>
            :
            <Accordion.Panel header= {
              <div style ={{backgroundColor:"#8E78FF"}}>
              <img src={leg} style= {{marginLeft : "30px" }}/>
              </div>
            }>
            {equipData.equipment.map((barang ) => (
                <Item arrow="none"  extra={barang.people+'ppl'} id ={barang.equipmentId} >
                    <div>{barang.equipmentName}
                    {barang.people <= 5 ? (
                      <div class="circleEquipStat " style ={{ backgroundColor: "#57FF89" ,marginRight :'110px' ,marginTop:'10px'} }></div>
                    ) :(
                      <div class="circleEquipStat " style ={{ backgroundColor: "#FF6164" ,marginRight :'110px' ,marginTop:'10px'} }></div>
                    )}       
                    </div>
                </Item>
            ))}
            </Accordion.Panel>
          }

            </Accordion>
            <WhiteSpace size="sm" />
            </WingBlank>
            
        </div>) )} */}
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        </div>
      
        );
    }
}
 
export default CustomerEquipment;