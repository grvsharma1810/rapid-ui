
import CodeHighlighter from '../code-highlighter/code-highlighter';
import cssCode from './code-snippets/css-link'
import jsCode from './code-snippets/js-link'

function GettingStarted(){
    return (
        <div>
            <h2 className="text-heding-bold text-size-3 mb-1">Getting Started</h2>

            <h3 className="text-heding-medium text-size-2 mb-1 mt-3">CSS</h3>    
            <div className="bg-grey-200 p-2">                                                            
                <CodeHighlighter codeString={cssCode}/>                
            </div>    

            <h3 className="text-heding-medium text-size-2 mb-1 mt-3">JavaScript</h3>    
            <div className="bg-grey-200 p-2">                                                            
                <CodeHighlighter codeString={jsCode}/>                
            </div>    
        </div>
    )
}

export default GettingStarted;