import React, { Component} from 'react';
import { List } from 'antd-mobile'

import {  WhiteSpace, WingBlank  } from 'antd-mobile';

const Item = List.Item;
const Brief = Item.Brief;

class GymStatus extends Component {
    state = { 
        GymName :  "Daan",
        address : "qewefwef42e"
             }
    render() { 

        return (
    <div>
    <WingBlank size="sm">
    <WhiteSpace size="sm" />
    
        <Item arrow="horizontal" multipleLine onClick={() => {}} extra={"comfort"}>
           {this.state.GymName}  
          <Brief>{this.state.address}</Brief>
        </Item>
       
    <WhiteSpace size="sm" />
  </WingBlank>

     
  </div>
        );
    }
}
 
export default GymStatus;