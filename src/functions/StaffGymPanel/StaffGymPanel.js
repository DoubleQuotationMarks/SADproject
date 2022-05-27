import React, { Component} from 'react';
import { Accordion, List, Flex  } from 'antd-mobile';
import { ActionSheet, WhiteSpace, WingBlank , Badge ,Toast ,Button, Modal,Icon } from 'antd-mobile';
import "./StaffGymPanel.less"

import axios from 'axios'
import abs from "./abs.png"
import arm from './arm.png'
import back from './back.png'
import cardio from './cardio.png'
import chest from './chest.png'
import hips from './hip.png'
import leg from './leg.png'


const Item = List.Item;
var Gymid ,Gymname ,Endpoint;

class StaffGymPanel extends Component {
   
    state = {
        Panel:[]
      }

     constructor(){
      super();
      Gymid = window.location.pathname.replace('/staff/gympanel/','').split('&')[1]
      Gymname = window.location.pathname.replace('/staff/gympanel/','').split('&')[0]
      Endpoint = 'https://sadbackend-cyt.herokuapp.com/api/v1/gym/machine/category/'+ Gymid 
      axios.get(Endpoint).then( 
        (response) => {
          console.log(response)
          console.log(response.data.data)
           this.setState({ Panel:response.data.data})
        
        })
        .catch(function(error) {
          console.log(error);
        })  
      
     }

    renew_api() {
      Gymid = window.location.pathname.replace('/staff/gympanel/','').split('&')[1]
      Gymname = window.location.pathname.replace('/staff/gympanel/','').split('&')[0]
      Endpoint = 'https://sadbackend-cyt.herokuapp.com/api/v1/gym/machine/category/'+ Gymid 
      axios.get(Endpoint).then( 
        (response) => {
          console.log(response)
          console.log(response.data.data)
           this.setState({ Panel:response.data.data})
        
        })
        .catch(function(error) {
          console.log(error);
        })  

    }

    add_people( id_prop ){
      axios.put("https://sadbackend-cyt.herokuapp.com/api/v1/machine/status", {"amount": 1,"machine_id": id_prop }).then( 
        (response) => {
          console.log(response)
          console.log(response.data.data)        
        })
        this.renew_api()
        
    }

    subtract_people( id_prop ){
      axios.put("https://sadbackend-cyt.herokuapp.com/api/v1/machine/status", {"amount": -1,"machine_id": id_prop }).then( 
        (response) => {
          console.log(response)
          console.log(response.data.data)        
        })
      this.renew_api()
        
    }

    componentDidUpdate(){
      this.renew_api()
    }

    shouldComponentUpdate() {
      return true; 
    }
      
    render() { 
      
  
        return (
          <div style={{ width: '428px' , height: '926px', background: "#FFF3D4"}}>
          <div style={{ width: '100%' , height: '80px'}}><Button href="/staff/status" inline style={{ width: '60px' , height: '30px', marginLeft: '40px',marginTop:"50px",border:"transparent", background:"transparent"}}><div class="backb"><Icon type="left" size="md"/></div></Button></div>
          <div class="title">{Gymname}</div> 
           {this.state.Panel.map( ( equipData )  =>(  
           <div >
            <WingBlank size="lg">
                 
         
           
          {equipData.category == 'abs'  && equipData.machines ? 
            <Accordion  defaultActiveKey="1" className="my-accordion" onChange={this.onChange}  >
            <Accordion.Panel header= {  
            <div style ={{marginLeft:'-20px',width: '100%' ,backgroundColor:"#46B862" }}>
            <img src={abs} style= {{marginLeft : "50px",marginTop:'-10px'}}/>
            </div>} >
            <div style ={{marginLeft:'-20px',backgroundColor:"#FFF3D4"}}>
            {equipData.machines.map((barang ) => (
                <Item arrow="none"  id ={barang.machine_id} style ={{marginLeft:'15px'}} >
                    <Flex justify="center">
                    <div class="parttext" style={{width: '90px'}}>{barang.name}</div>
                    <div style={{ width: '5px'}}></div>

                    {barang.waiting_ppl <= 5 ? (
                      <div class="circleEquipStat " style ={{ backgroundColor: "#57FF89" } }></div>
                    ) :(
                      <div class="circleEquipStat " style ={{ backgroundColor: "#FF6164" } }></div>
                    )}
                    <div style={{ width: '5px'}}></div>
                    
                    <Button onClick={() => this.add_people(barang.machine_id)} style={{ width: '80px'}}><div class="title">+</div></Button>
                    <div class="subtitle" style={{ width: '100px' , height: '20px'}}>{barang.waiting_ppl}</div>ppl
                    <div style={{ width: '10px'}}></div>
                    <Button onClick={() => this.subtract_people(barang.machine_id)} style={{ width: '80px'}}><div class="title">-</div></Button>    
                    </Flex>     
                </Item>
            ))}
            </div>
            </Accordion.Panel>
            </Accordion>




            : equipData.category == 'arm' && equipData.machines?
            <Accordion  defaultActiveKey="1" className="my-accordion" onChange={this.onChange}  >
            <Accordion.Panel header= {
              <div style ={{marginLeft:'-20px',width: '100%' ,backgroundColor:"#FAA61A"}}>
              <img src={arm} style= {{marginLeft : "50px",marginTop:'-10px'}}/>
              </div>}
               >
            <div style ={{marginLeft:'-20px',backgroundColor:"#FFF3D4"}}>
            {equipData.machines.map((barang ) => (
                <Item arrow="none"  id ={barang.machine_id} style ={{marginLeft:'15px'}} >
                    <Flex justify="center">
                    <div class="parttext" style={{width: '90px'}}>{barang.name}</div>
                    <div style={{ width: '5px'}}></div>
                    
                    
                    {barang.waiting_ppl <= 5 ? (
                      <div class="circleEquipStat " style ={{ backgroundColor: "#57FF89" } }></div>
                    ) :(
                      <div class="circleEquipStat " style ={{ backgroundColor: "#FF6164" } }></div>
                    )}
                    <div style={{ width: '5px'}}></div>
                    
                    <Button onClick={() => this.add_people(barang.machine_id)} style={{ width: '80px'}}><div class="title">+</div></Button>
                    <div class="subtitle" style={{ width: '100px' , height: '20px'}}>{barang.waiting_ppl}</div>ppl
                    <div style={{ width: '10px'}}></div>
                    <Button onClick={() => this.subtract_people(barang.machine_id)} style={{ width: '80px'}}><div class="title">-</div></Button>    
                    </Flex>     
                </Item>
            ))}
            </div>
            </Accordion.Panel>
            </Accordion>




            : equipData.category == 'back'&& equipData.machines ?
            <Accordion  defaultActiveKey="1" className="my-accordion" onChange={this.onChange}  >
            <Accordion.Panel header= {
              <div style ={{marginLeft:'-20px',width: '100%' ,backgroundColor:"#F5DE9B"}}>
              <img src={back} style= {{marginLeft : "50px",marginTop:'-10px'}}/>
              </div>
            }>
              <div style ={{marginLeft:'-20px',backgroundColor:"#FFF3D4"}}>
            {equipData.machines.map((barang ) => (
                <Item arrow="none"  id ={barang.machine_id} style ={{marginLeft:'15px'}} >
                    <Flex justify="center">
                    <div class="parttext" style={{width: '90px'}}>{barang.name}</div>
                    <div style={{ width: '5px'}}></div>
                    
                    
                    {barang.waiting_ppl <= 5 ? (
                      <div class="circleEquipStat " style ={{ backgroundColor: "#57FF89" } }></div>
                    ) :(
                      <div class="circleEquipStat " style ={{ backgroundColor: "#FF6164" } }></div>
                    )}
                    <div style={{ width: '5px'}}></div>
                    
                    <Button onClick={() => this.add_people(barang.machine_id)} style={{ width: '80px'}}><div class="title">+</div></Button>
                    <div class="subtitle" style={{ width: '100px' , height: '20px'}}>{barang.waiting_ppl}</div>ppl
                    <div style={{ width: '10px'}}></div>
                    <Button onClick={() => this.subtract_people(barang.machine_id)} style={{ width: '80px'}}><div class="title">-</div></Button>    
                    </Flex>     
                </Item>
            ))}
            </div>
            </Accordion.Panel>
            </Accordion>

            : equipData.category == 'cardio'&& equipData.machines ?
            <Accordion  defaultActiveKey="1" className="my-accordion" onChange={this.onChange}  >
            <Accordion.Panel header= {
              <div style ={{marginLeft:'-20px',width: '100%' ,backgroundColor:"#DE5D4D"}}>
              <img src={cardio} style= {{marginLeft : "50px",marginTop:'-10px'}}/>
              </div>
            }>
              <div style ={{marginLeft:'-20px',backgroundColor:"#FFF3D4"}}>
            {equipData.machines.map((barang ) => (
                <Item arrow="none"  id ={barang.machine_id} style ={{marginLeft:'15px'}} >
                    <Flex justify="center">
                    <div class="parttext" style={{width: '90px'}}>{barang.name}</div>
                    <div style={{ width: '5px'}}></div>
                    
                    
                    {barang.waiting_ppl <= 5 ? (
                      <div class="circleEquipStat " style ={{ backgroundColor: "#57FF89" } }></div>
                    ) :(
                      <div class="circleEquipStat " style ={{ backgroundColor: "#FF6164" } }></div>
                    )}
                    <div style={{ width: '5px'}}></div>
                    
                    <Button onClick={() => this.add_people(barang.machine_id)} style={{ width: '80px'}}><div class="title">+</div></Button>
                    <div class="subtitle" style={{ width: '100px' , height: '20px'}}>{barang.waiting_ppl}</div>ppl
                    <div style={{ width: '10px'}}></div>
                    <Button onClick={() => this.subtract_people(barang.machine_id)} style={{ width: '80px'}}><div class="title">-</div></Button>    
                    </Flex>     
                </Item>
            ))}
            </div>
            </Accordion.Panel>
            </Accordion>


            : equipData.category == "chest" && equipData.machines?
            <Accordion  defaultActiveKey="1" className="my-accordion" onChange={this.onChange}  >
            <Accordion.Panel header= {
              <div style ={{marginLeft:'-20px',width: '100%' ,backgroundColor:"#3B5998"}}>
              <img src={chest} style= {{marginLeft : "50px",marginTop:'-10px'}}/>
              </div>
            }>
              <div style ={{marginLeft:'-20px',backgroundColor:"#FFF3D4"}}>
            {equipData.machines.map((barang ) => (
                <Item arrow="none"  id ={barang.machine_id} style ={{marginLeft:'15px'}} >
                    <Flex justify="center">
                    <div class="parttext" style={{width: '90px'}}>{barang.name}</div>
                    <div style={{ width: '5px'}}></div>
                    
                    
                    {barang.waiting_ppl <= 5 ? (
                      <div class="circleEquipStat " style ={{ backgroundColor: "#57FF89" } }></div>
                    ) :(
                      <div class="circleEquipStat " style ={{ backgroundColor: "#FF6164" } }></div>
                    )}
                    <div style={{ width: '5px'}}></div>
                    
                    <Button onClick={() => this.add_people(barang.machine_id)} style={{ width: '80px'}}><div class="title">+</div></Button>
                    <div class="subtitle" style={{ width: '100px' , height: '20px'}}>{barang.waiting_ppl}</div>ppl
                    <div style={{ width: '10px'}}></div>
                    <Button onClick={() => this.subtract_people(barang.machine_id)} style={{ width: '80px'}}><div class="title">-</div></Button>    
                    </Flex>     
                </Item>
            ))}
            </div>
            </Accordion.Panel>
            </Accordion>


          : equipData.category == "hips" && equipData.machines?
          <Accordion  defaultActiveKey="1" className="my-accordion" onChange={this.onChange}  >
          <Accordion.Panel header= {
            <div style ={{marginLeft:'-20px',width: '100%' ,backgroundColor:"#ADADAD"}}>
            <img src={hips} style= {{marginLeft : "50px",marginTop:'-10px'}}/>
            </div>
          }>
            <div style ={{marginLeft:'-20px',backgroundColor:"#FFF3D4"}}>
            {equipData.machines.map((barang ) => (
                <Item arrow="none"  id ={barang.machine_id} style ={{marginLeft:'15px'}} >
                    <Flex justify="center">
                    <div class="parttext" style={{width: '90px'}}>{barang.name}</div>
                    <div style={{ width: '5px'}}></div>
                    
                    
                    {barang.waiting_ppl <= 5 ? (
                      <div class="circleEquipStat " style ={{ backgroundColor: "#57FF89" } }></div>
                    ) :(
                      <div class="circleEquipStat " style ={{ backgroundColor: "#FF6164" } }></div>
                    )}
                    <div style={{ width: '5px'}}></div>
                    
                    <Button onClick={() => this.add_people(barang.machine_id)} style={{ width: '80px'}}><div class="title">+</div></Button>
                    <div class="subtitle" style={{ width: '100px' , height: '20px'}}>{barang.waiting_ppl}</div>ppl
                    <div style={{ width: '10px'}}></div>
                    <Button onClick={() => this.subtract_people(barang.machine_id)} style={{ width: '80px'}}><div class="title">-</div></Button>    
                    </Flex>     
                </Item>
            ))}
            </div>
          </Accordion.Panel>
          </Accordion>


            :equipData.category == "leg" && equipData.machines?
            <Accordion  defaultActiveKey="1" className="my-accordion" onChange={this.onChange}  >
            <Accordion.Panel header= {
              <div style ={{marginLeft:'-20px',width: '100%' ,backgroundColor:"#8E78FF"}}>
              <img src={leg} style= {{marginLeft : "50px",marginTop:'-10px'}}/>
              </div>
            }>
              <div style ={{marginLeft:'-20px',backgroundColor:"#FFF3D4"}}>
            {equipData.machines.map((barang ) => (
                <Item arrow="none"  id ={barang.machine_id} style ={{marginLeft:'15px'}} >
                    <Flex justify="center">
                    <div class="parttext" style={{width: '90px'}}>{barang.name}</div>
                    <div style={{ width: '5px'}}></div>
                    
                    
                    {barang.waiting_ppl <= 5 ? (
                      <div class="circleEquipStat " style ={{ backgroundColor: "#57FF89" } }></div>
                    ) :(
                      <div class="circleEquipStat " style ={{ backgroundColor: "#FF6164" } }></div>
                    )}
                    <div style={{ width: '5px'}}></div>
                    
                    <Button onClick={() => this.add_people(barang.machine_id)} style={{ width: '80px'}}><div class="title">+</div></Button>
                    <div class="subtitle" style={{ width: '100px' , height: '20px'}}>{barang.waiting_ppl}</div>ppl
                    <div style={{ width: '10px'}}></div>
                    <Button onClick={() => this.subtract_people(barang.machine_id)} style={{ width: '80px'}}><div class="title">-</div></Button>    
                    </Flex>     
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
        </div>
      
        );
    }
}
 
export default StaffGymPanel;