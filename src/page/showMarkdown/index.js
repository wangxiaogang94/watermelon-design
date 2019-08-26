import React from 'react';
import marked from 'marked';
import hljs from 'highlight.js';
// import log from './log.md';
// console.log('log====', exist.get(log));

class demo extends React.Component {
    state = { text: '' };
    componentWillMount() {
        // marked相关配置
        marked.setOptions({
            renderer: new marked.Renderer(),
            gfm: true,
            tables: true,
            breaks: true,
            pedantic: false,
            sanitize: true,
            smartLists: true,
            smartypants: false,
            highlight: function(code) {
                return hljs.highlightAuto(code).value;
            },
        });
        fetch(this.props.log)
            .then(res => res.text())
            .then(text => {
                this.setState({ text });
            });
    }
    render() {
        return (
            <div>
                <div
                    className="article-detail"
                    dangerouslySetInnerHTML={{
                        __html: marked(this.state.text),
                    }}
                />
            </div>
        );
    }
}

export default demo;
