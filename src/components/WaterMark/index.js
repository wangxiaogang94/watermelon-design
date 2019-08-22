import React from 'react';
import ReactDOM from 'react-dom';

class WaterMark extends React.PureComponent {
    static defaultProps = {
        text: '请设置水印文字',
        isWatermark: false,
        angle: -30,
    };

    el = document.createElement('div');

    state = {
        image: '',
    };

    componentDidMount() {
        document.body.appendChild(this.el);
        const { text } = this.props;
        this.setWatermark(text);
    }

    componentDidUpdate() {
        const { text } = this.props;
        this.setWatermark(text);
    }

    componentWillUnmount() {
        document.body.removeChild(this.el);
    }

    getLength =(str)=> {  
        // const str = new String(val);  
        let bytesCount = 0;  
        for (let i = 0 ,n = str.length; i < n; i++) {  
            let c = str.charCodeAt(i);  
            if ((c >= 0x0001 && c <= 0x007e) || (0xff60<=c && c<=0xff9f)) {  
                bytesCount += 1;  
            } else {  
                bytesCount += 2;  
            }  
        }  
        return bytesCount;  
    }  

    setWatermark = text => {
        const { angle } = this.props;
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const leng = Math.sqrt((32 * this.getLength(text)) ** 2, 32 ** 2) + 32 * 4;
        canvas.width = leng;
        canvas.height = leng / 2 + 32 * 2;
        ctx.translate(leng / 2, leng / 4);
        ctx.rotate((angle * Math.PI) / 180);
        ctx.font = '32px Arial';
        ctx.fillStyle = 'rgba(127, 127, 127, .3)';
        ctx.fillText(text, -leng / 2 + 32 * 2, 0);
        const image = canvas.toDataURL('image/png', 1);
        this.setState({
            image,
        });
    };

    render() {
        const { isWatermark } = this.props;
        const { image } = this.state;
        if (isWatermark) {
            return ReactDOM.createPortal(
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        zIndex: 99999,
                        pointerEvents: 'none',
                        width: '100vw',
                        height: '100vh',
                        backgroundImage: `url(${image})`,
                    }}
                />,
                this.el,
            );
        }
        return null;
    }
}

const watermark = new WaterMark();
window.watermark = watermark;

export default WaterMark;
