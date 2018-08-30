import React, { Component } from 'react'
import { DatePicker, Input, Button, Form } from 'antd'
import { connect } from 'react-redux'
import { formatAction, FIXTEXT, CHANGEDIARY } from '../../Action'
import moment from 'moment'

const { TextArea } = Input
const FormItem = Form.Item

class DiaryEditForm extends Component{
    constructor(props) {
        super(props)
        this.state = {
            text: this.props.diary.text,
            date: this.props.diary.date,
        }
    }

    handleTextChange = event => {
        const text = event.target.value
        if (text !== null) {
            this.setState({
                text: text
            })
        }
    };

    render() {
        const formItemLayout = {
            labelCol: {
                xs: { span: 4 },
                sm: { span: 4 },
            },
            wrapperCol: {
                xs: { span: 20 },
                sm: { span: 20 },
            },
        }

        return (
            <Form>
                <FormItem
                    {...formItemLayout}
                    label="日期"
                >
                        
                    <DatePicker defaultValue={moment(this.state.date)} allowClear={false} onChange={(date, dateString) => {
                        this.setState({date:dateString})
                    }}/>
                        
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="总结内容"
                >
                    <TextArea rows={5} value={this.state.text} onChange={this.handleTextChange} />                        
                </FormItem>
                <div className="practise-diary-operation-button-group">
                    <Button type="primary" size="small" ghost className="button-note" onClick={() => {
                        this.props.fixText(this.state.text, this.state.date, this.props.index)
                    }}>提交</Button>
                    <Button size="small" className='button-note button-distance' onClick={() => {
                        this.props.changeDiary(this.props.index)
                        this.setState({
                            text: this.props.diary.text
                        })
                    }}>取消</Button>
                </div>
            </Form>
        )
    }
}

const mapPropsToDispatch = () => ({})
const mapDispatchToState = dispatch => ({
    fixText: (text, date, index) => {
        let data = { text, date, index }
        dispatch(formatAction(FIXTEXT, data))
    },

    changeDiary: (index) => {
        dispatch(formatAction(CHANGEDIARY, index))
    }
})

export default connect(mapPropsToDispatch,mapDispatchToState)(DiaryEditForm)