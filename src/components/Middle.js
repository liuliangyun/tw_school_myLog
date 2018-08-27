import React from 'react'
import { Layout, Breadcrumb, Input, Button, DatePicker } from 'antd';

const { Content } = Layout;
const { TextArea } = Input;

class Middle extends React.Component {
    render() {
        return (
            <Layout style={{ padding: '0 24px 24px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                  <Breadcrumb.Item>Home</Breadcrumb.Item>
                  <Breadcrumb.Item>List</Breadcrumb.Item>
                  <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                <span>新的日志
                  <br />
                  日期：
                  <DatePicker/>
                  <br />
                  总结内容：
                  <TextArea rows={4} />
                  <Button type="primary">提交</Button>
                  <Button type="primary">取消</Button>
                </span>
                </Content>
              </Layout>
        );
    }
}
export default Middle;