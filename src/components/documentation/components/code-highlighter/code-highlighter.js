import './code-highlighter.css'
// import SyntaxHighlighter from 'react-syntax-highlighter';
import { LightAsync as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vs2015 } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import CopyToClipboard from 'react-copy-to-clipboard';
import { useState } from 'react';

// SyntaxHighlighter.registerLanguage('vs2015', vs2015);

const CodeHighlighter = ({codeString}) => {
    
    const [copyStatus, setCopyStatus] = useState('Copy')

    return (
        <div className="code-box">
            <CopyToClipboard text={codeString} onCopy={
                () => {
                    setCopyStatus(() => 'Copied');
                    setTimeout(() => setCopyStatus(() => 'Copy'),1500);
                }
            }>
                <button className="copy-button btn-solid secondary p-sm">{copyStatus}</button>
            </CopyToClipboard>
            <div>
                <SyntaxHighlighter language="html" style={vs2015}>
                    {codeString}
                </SyntaxHighlighter>
            </div>
        </div>
    );
};

export default CodeHighlighter;