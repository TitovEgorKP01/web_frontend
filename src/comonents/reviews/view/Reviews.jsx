import React, { useState, useEffect } from "react";
import { Form, Button, Card, Input, Row, Col, Table } from 'antd';
import { getReviews } from './ReviewsService';
import './Reviews.scss';

const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'Rating',
      dataIndex: 'rating',
      key: 'rating',
    },
  ];
  
const Reviews = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getReviews().then(setItems);
  }, [])


  return(
    <Card className="reviews-card">
      <Table columns={columns} dataSource={items} />
  </Card>
  )     
}

export default Reviews;