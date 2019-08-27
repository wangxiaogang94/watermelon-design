import React from 'react';
import ColorPicker from '../../components/ColorPicker';
import Show from '../showMarkdown';
import log from './log.md'

export default class colorpicker extends React.Component {
    state = {
        color: '#F5222D'
    }
    render() {

        return(
            <div>
                <h2>颜色选择器</h2>
                <h1>示例</h1>
                <ColorPicker
                    type="sketch"
                    small
                    color={this.state.color}
                    position="bottom"
                    presetColors={[
                        '#F5222D',
                        '#FA541C',
                        '#FA8C16',
                        '#FAAD14',
                        '#FADB14',
                        '#A0D911',
                        '#52C41A',
                        '#13C2C2',
                        '#1890FF',
                        '#2F54EB',
                        '#722ED1',
                        '#EB2F96',
                    ]}
                    onChangeComplete={(color)=>this.setState({color})}
                />
                <h1>代码</h1>
                <Show log={log} />
            </div>
        );
    }
}
