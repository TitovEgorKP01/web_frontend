import React, { useState, useEffect } from "react";
import { Form, Button, Card, Input, Row, Col, notification, Table } from 'antd'
import { getUsers } from './UsersService';
import './Users.scss';

const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'createDate',
      dataIndex: 'createDate',
      key: 'createDate',
    },
  ];

const Users = () => {
    // return(
    //     <Row>
    //         <Col>
    //             <Card>
    //                 Users
    //             </Card>
    //         </Col>
    //     </Row>   
    // )
    const [items, setItems] = useState([]);

    useEffect(() => {
        getUsers().then(setItems);
    }, [])


    return(
        <Card className="users-card">
        <Table columns={columns} dataSource={items} />
    </Card>
    ) 
}

export default Users;