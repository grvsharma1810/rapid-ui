
import CodeEditor from '../code-editor/code-editor'
import imageCode from './code-snippets/image'

function Image() {
    return (
        <div>
            <h2 className="text-heding-bold text-size-3 mb-1">Image</h2>
            <CodeEditor codeString={imageCode} heading="Responsive Image" />
        </div>
    )
}

export default Image;