
import CodeEditor from '../code-editor/code-editor';
import spinnerCode from './code-snippets/spinner'

function Spinner() {
    return (
        <>
            <h2 className="text-heding-bold text-size-3 mb-1">Spinner</h2>
            <CodeEditor codeString={spinnerCode} />
        </>
    )
}

export default Spinner;