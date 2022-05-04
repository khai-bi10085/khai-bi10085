import React from "react"
import 'antd/dist/antd.css';
import { Menu, Dropdown } from 'antd';
import { DownOutlined, DragOutlined } from '@ant-design/icons';
import MenuItem from "antd/lib/menu/MenuItem";

function MultiSelect() {
    const menu = (

        <Menu>
            <MenuItem key='0' style={{color:'red', fontSize:20}}>
                haha
            </MenuItem>
            <MenuItem key='1' style={{fontSize:20}}>
                hehe
            </MenuItem>
            <MenuItem key='2' style={{fontSize:20}}>
                hoho
            </MenuItem>
        </Menu>
   
    );

    return (
        <div>  <Dropdown overlay={menu} trigger={['click']}>
            <a className=" dropdown-label" style={{fontSize:20}} onClick={(e) => e.preventDefault()}>
                Click me 
            </a>
        </Dropdown></div>

    )



}



export default MultiSelect;

