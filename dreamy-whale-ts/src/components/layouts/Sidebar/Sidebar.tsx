import React from 'react';
import { Link } from 'react-router-dom';
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

type SidebarProps = {
  collapsed: boolean,
  onCollapse: (collapsed: boolean) => void,
};


const Sidebar: React.FC<SidebarProps> = (props) => {
  const { collapsed, onCollapse } = props;
    return (
      <div className={classes.component}>
        <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={onCollapse}
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
        }}>
            <Logo collapsed={collapsed}/>
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <SubMenu key="sub1" icon={<UserOutlined />} title="Клиенты">
                <Menu.Item key="1">
                  <Link to={{ pathname: '/' }}>Клиенты</Link>
                </Menu.Item>
                <Menu.Item key="2">
                  <Link to={{ pathname: '/cards' }}>Карты</Link>
                </Menu.Item>
                <Menu.Item key="3">
                  <Link to={{ pathname: '/visits' }}>Посещения</Link></Menu.Item>
                <Menu.Item key="4">
                  <Link to={{ pathname: '/subscriptions' }}>Абонементы</Link>
                </Menu.Item>
                <Menu.Item key="5">
                  <Link to={{ pathname: '/costs' }}>Расходы</Link>
                </Menu.Item>
                <Menu.Item key="6">
                  <Link to={{ pathname: '/accounting_entries' }}>Проводки</Link>
                </Menu.Item>
            </SubMenu>
            <Menu.Item key="7" icon={<CalendarOutlined />}>
              <Link to={{ pathname: '/reservations' }}>Брони и аренды</Link>
            </Menu.Item>
            <Menu.Item key="8" icon={<SolutionOutlined />}>
              <Link to={{ pathname: '/questionnaires' }}>Анкеты</Link>
            </Menu.Item>
            <Menu.Item key="9" icon={<ScanOutlined />}>
              <Link to={{ pathname: '/scanner' }}>Записи со сканера</Link>
            </Menu.Item>
            <Menu.Item key="10" icon={<CalculatorOutlined />}>
              <Link to={{ pathname: '/calculator' }}>Калькулятор</Link>
            </Menu.Item>
            <SubMenu key="sub2" icon={<DollarOutlined />} title="Тарифы">
                <Menu.Item key="11">
                <Link to={{ pathname: '/tariff/visit' }}>Посещение</Link>
                </Menu.Item>
                <Menu.Item key="12">
                <Link to={{ pathname: '/tariff/subscription' }}>Абонемент</Link>
                </Menu.Item>
                <Menu.Item key="13">
                <Link to={{ pathname: '/tariff/reservation' }}>Бронь и аренда</Link>
                </Menu.Item>
            </SubMenu>
            </Menu>
        </Sider>
      </div>
    );
};

export default Sidebar;
