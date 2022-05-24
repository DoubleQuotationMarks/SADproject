import React, { Component} from 'react';
import { List } from 'antd-mobile'
import {  WhiteSpace, WingBlank,Badge  ,Button, NoticeBar} from 'antd-mobile';
import './gymList.less'
import axios from 'axios'



// const api = axios.create({
//     baseURL:'https://sadbackend-cyt.herokuapp.com/api/v1/gym/list'
//   })



const Item = List.Item;
const Brief = Item.Brief;

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
                   
                <Button href="/" inline style={{ marginLeft: '40px',marginTop:"50px", backgroundColor:'#FFF3D4' }}>Back</Button>
                <h1 class ="GymTitle"> Gym List</h1>
                {this.state.Gym.map((GymData) => (
                   
                        <div>
                        <WhiteSpace size="sm" />
                        
                            {/* <Item href={"gymequip"+GymData.GymName} className="am-list-itemGymList" arrow="horizontal"  onClick={() => {}} extra={"comfort"} id ={GymData.id} am-list-content >
                                
                                {GymData.GymName}  
                            <Brief>{GymData.address}</Brief>
                            </Item> */}

                                <Button  className = "UserLink"  href={"gymequip/"+GymData.name}  >
                                {GymData.status == 'uncrowded' ?
                                (  <div class="circleStat " style ={{ backgroundColor: "#57FF89"} }></div>) 
                                :( <div class="circleStat " style ={{ backgroundColor: "#FF6164"} }></div> )}

                                {GymData.status == "uncrowded" ?
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
                
            </div>
            
        );
    }
   
}
 
export default GymList;