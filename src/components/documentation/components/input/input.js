
import CodeEditor from '../code-editor/code-editor'
import inputCode from './code-snippets/input'

function Input(){
    return (<div>
        <h2 className="text-heading-bold text-size-3 mb-1">Input</h2>
        <CodeEditor codeString={inputCode} heading="All Form Elements"/>        
    </div>
    )
}


export default Input;