import React, { useContext } from "react";
import { Form, Button, Card, Input, Row, Col, notification } from 'antd'
import './EditReview.scss';

const EditReview = () => {
    return(
        <Form>
            <Card className="edit-reviews-card">
                <Row gutter={12}>
                    <Col span={24}>
                        <Form.Item label="Name" name="name">
                            <Input/>
                        </Form.Item>
                    </Col> 
                    <Col span={12}>
                        <Form.Item label="Description" name="description">
                            <Input/>
                        </Form.Item>
                    </Col> 
                    <Col span={12}>
                        <Form.Item label="Type" name="type">
                            <Input/>
                        </Form.Item>
                    </Col> 
                </Row>
            </Card>
        </Form>   
    )
}

export default EditReview;