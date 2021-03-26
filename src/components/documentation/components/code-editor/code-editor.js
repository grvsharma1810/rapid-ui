import './code-editor.css'

import { useRef, useEffect, useState } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard';

function CodeEditor({ codeString, heading }) {

    const [code, setCode] = useState(codeString);
    const [copyStatus, setCopyStatus] = useState('Copy')
    const textareaRef = useRef(null);

    useEffect(() => {
        textareaRef.current.style.height = "0px";
        const scrollHeight = textareaRef.current.scrollHeight;
        textareaRef.current.style.height = scrollHeight + "px";
    }, [code]);

    return (
        <div className="code-box">
            <h3 className="text-heding-medium text-size-2 mb-1 mt-3">{heading} <span className="text-size-1 text-regular">[Editable Example]</span></h3>
            <div class="bg-grey-200 p-2">
                <div className="flex flex-row v-center flex-gap-1" dangerouslySetInnerHTML={{
                    __html: code
                }}></div>
            </div>
            <div className="code-box">
                <CopyToClipboard text={codeString} onCopy={
                    () => {
                        setCopyStatus(() => 'Copied');
                        setTimeout(() => setCopyStatus(() => 'Copy'), 1500);
                    }
                }>
                    <button className="copy-button btn-solid secondary p-sm">{copyStatus}</button>
                </CopyToClipboard>
                <textarea
                    ref={textareaRef}
                    className="editor"
                    onChange={(e) => setCode(e.target.value)}
                    value={code}
                    spellCheck="false"
                />
            </div>
        </div>
    )
}

export default CodeEditor