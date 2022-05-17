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



const Item = List.Item;
const Brief = Item.Brief;
     let Gymname = window.location.pathname
         let Gymname1 = Gymname.replace('/gymequip/','')

const api = axios.create({
    baseURL:'https://628205b3ed9edf7bd87d009e.mockapi.io/'+Gymname1
  })
  
class CustomerEquipment extends Component {
   
    state = {
        equip:[]
      }

     constructor(){
       super();
       api.get('/').then(res =>{
         console.log(res.data)
         this.setState({equip :res.data})
       })
     }

        //     state = {
            
        //             equip : [{
        //                             "id": 1,
        //                             "workout" : "running" ,
        //                            "equipment":[{
        //                                             "equipmentId" :1 ,
        //                                             "equipmentName" :"treadmil_01",
        //                                             "people" :  "20ppl"
        //                                         },
        //                                         {
        //                                             "equipmentId" :2 ,
        //                                             "equipmentName" :"treadmil_02",
        //                                             "people" :  "20ppl"
        //                                         },
        //                                         {
        //                                             "equipmentId" :3 ,
        //                                             "equipmentName" :"treadmil_03",
        //                                             "people" :  "20ppl"
        //                                         }
                                
        //                         ]},
        //                         {
        //                             id: 2,
        //                             workout : "abs" ,
        //                             equipment:[{
        //                                             equipmentId :1 ,
        //                                             equipmentName :"abs_01",
        //                                             people :  "20ppl"
        //                                         },
        //                                         {
        //                                             equipmentId :2 ,
        //                                             equipmentName :"abs_02",
        //                                             people : "20ppl"
        //                                         },
        //                                         {
        //                                             equipmentId :3 ,
        //                                             equipmentName :"abs_03",
        //                                             people :  "20ppl"
        //                                         }
                                
        //                         ]},
        //                         {
        //                             id: 3,
        //                             workout : "abs" ,
        //                             equipment:[{
        //                                             equipmentId :1 ,
        //                                             equipmentName :"back_01",
        //                                             people : "20ppl"
        //                                         },
        //                                         {
        //                                             equipmentId :2 ,
        //                                             equipmentName :"back_02",
        //                                             people : "20ppl"
        //                                         },
        //                                         {
        //                                             equipmentId :3 ,
        //                                             equipmentName :"back_03",
        //                                             people : "20ppl"
        //                                         }
                                
        //                         ]},
                            
                                        
                        
            
            
            
        //     ]
        // }
      
    render() { 
    
        return (
            <div class="shapeGymequip ">
                 
                 <Button href="/gymlist" inline style={{ marginLeft: '40px',marginTop:"50px", backgroundColor:'#FFF3D4' }}>Back</Button>
            <p class ="CustTittle">{Gymname1}</p>   
            <br></br>
           {this.state.equip.map( ( equipData )  =>(
           <div  >
               <WingBlank size="sm">
                <WhiteSpace size="sm" />                
            <Accordion  defaultActiveKey="1" className="my-accordion" onChange={this.onChange} >
           
          
            <Accordion.Panel header= {equipData.workout}    >
           
          
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
           
          
       
         
            </Accordion>
            <WhiteSpace size="sm" />
            </WingBlank>
        </div>) )}
        </div>
        );
    }
}
 
export default CustomerEquipment;