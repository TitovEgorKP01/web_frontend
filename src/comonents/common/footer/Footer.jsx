import React from "react"
import { Layout } from "antd";

const { Footer } = Layout;


const FooterComponent = (props) => (
    <Footer
        style={{
            textAlign: 'center'
        }}>
        (c) 2023 Created by me
    </Footer>
);

export default FooterComponent;