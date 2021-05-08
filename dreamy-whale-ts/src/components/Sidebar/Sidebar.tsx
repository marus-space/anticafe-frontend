import React from 'react';
import { Layout, Menu } from 'antd';
import {
  UserOutlined,
  CalendarOutlined,
  SolutionOutlined,  
  CalculatorOutlined,
  ScanOutlined,
  DollarOutlined,
} from '@ant-design/icons';
import Logo from '../Logo';

import classes from './Sidebar.module.scss';

const { Sider } = Layout;
const { SubMenu } = Menu;

class Sidebar extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed: boolean) => {
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;
    return (
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse} className={classes.component}>
            <Logo collapsed={this.state.collapsed}/>
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <SubMenu key="sub1" icon={<UserOutlined />} title="Клиенты">
                <Menu.Item key="1">Клиенты</Menu.Item>
                <Menu.Item key="2">Карты</Menu.Item>
                <Menu.Item key="3">Посещения</Menu.Item>
                <Menu.Item key="4">Абонементы</Menu.Item>
                <Menu.Item key="5">Расходы</Menu.Item>
                <Menu.Item key="6">Проводки</Menu.Item>
            </SubMenu>
            <Menu.Item key="7" icon={<CalendarOutlined />}>
                Брони и аренды
            </Menu.Item>
            <Menu.Item key="8" icon={<SolutionOutlined />}>
                Анкеты
            </Menu.Item>
            <Menu.Item key="9" icon={<ScanOutlined />}>
                Записи со сканера
            </Menu.Item>
            <Menu.Item key="10" icon={<CalculatorOutlined />}>
                Калькулятор
            </Menu.Item>
            <SubMenu key="sub2" icon={<DollarOutlined />} title="Тарифы">
                <Menu.Item key="11">Посещение</Menu.Item>
                <Menu.Item key="12">Абонемент</Menu.Item>
                <Menu.Item key="13">Бронь и аренда</Menu.Item>
            </SubMenu>
            </Menu>
        </Sider>
    );
  }
}

export default Sidebar;
