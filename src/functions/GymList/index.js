import React, { Component} from 'react';
import { List } from 'antd-mobile'
import {  WhiteSpace, WingBlank,Badge  ,Button} from 'antd-mobile';
import './gymList.less'
import axios from 'axios'



const api = axios.create({
    baseURL:'https://628205b3ed9edf7bd87d009e.mockapi.io/gymlist'
  })



const Item = List.Item;
const Brief = Item.Brief;

class GymList extends Component {

    
    state = {
        Gym:[]
      }

     constructor(){
       super();
       api.get('/').then(res =>{
         console.log(res.data)
         this.setState({Gym :res.data})
       })
     }



    // state = { 
                    // "Gym":  [{id : 1 ,
                    //         "GymName" :  "Gongguan",
                    //         "address" :"erw3rwrwrwr",
                    //         "capacity" : 24
                    //     },
    //                     {   id : 2 ,
    //                         GymName :  "Daan",
    //                         address :"erw3rwrwrwr",
    //                         capacity : 24
    //                     },
    //                     {   id : 3 ,
    //                         GymName :  "xinyi",
    //                         address :"erw3rwrwrwr",
    //                         capacity : 24
    //                     },
    //                     {       id : 4 ,
    //                             GymName :  "waimai",
    //                             address :"erw3rwrwrwr",
    //                             capacity : 24
    //                     },
    //                     {       id : 5 ,
    //                             GymName :  "liulian",
    //                             address :"erw3rwrwrwr",
    //                             capacity : 24
    //                     },
    //                      {      id : 6 ,
    //                             GymName :  "wu",
    //                             address :"erw3rwrwrwr",
    //                             capacity : 24
    //                     },
                        
     //               ]
                        

                    
                
                    
//} ;

    render() { 
       


        
        return (
             
            <div class ="shapeGymList">
                <h1 class ="GymTitle"> Gym List</h1>
                {this.state.Gym.map((GymData) => (
                                <div>
                                <WhiteSpace size="sm" />
                                
                                    {/* <Item href={"gymequip"+GymData.GymName} className="am-list-itemGymList" arrow="horizontal"  onClick={() => {}} extra={"comfort"} id ={GymData.id} am-list-content >
                                        
                                        {GymData.GymName}  
                                    <Brief>{GymData.address}</Brief>
                                    </Item> */}

                                        <Button  className = "UserLink"  href={"gymequip/"+GymData.GymName}    arrow="horizontal" extra={<Badge  dot   style={{ marginLeft: 30, marginTop :10 ,backgroundColor: '#21b68a', borderRadius: 40 }}>20</Badge>}  >
                                        {GymData.capacity <= 20 ?
                                        (  <div class="circleStat " style ={{ backgroundColor: "green"} }></div>) 
                                        :( <div class="circleStat " style ={{ backgroundColor: "red"} }></div> )}

                                        {GymData.capacity <= 20 ?
                                        (  <p class ="buttontext2  "style ={{ color: "green"} }>comfort </p>) 
                                        :( <p class ="buttontext2 " style ={{ color:"red"} }>crowded </p> )}   

                                        <p class = "buttontext">{GymData.GymName}
                                  
                                        <p class="buttonDescription"  >address</p> </p>

                                  
                    
                                        </Button>
                                        <WhiteSpace size="xl" />
                                    
                                <WhiteSpace size="sm" />
                                </div>

                )
                    
                    
                    
                )}
                
            </div>
            
        );
    }
   
}
 
export default GymList;