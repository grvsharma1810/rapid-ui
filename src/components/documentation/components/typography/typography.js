
import CodeEditor from '../code-editor/code-editor'
import textSizeCode from './code-snippets/text-size'
import fontWeightCode from './code-snippets/font-weight'
import textColorsCode from './code-snippets/text-colors'

function Typography() {
    return (
        <div>
            <h2 className="text-heding-bold text-size-3 mb-1">Typography</h2>
            <CodeEditor codeString={textSizeCode} heading="Font Sizes" />
            <CodeEditor codeString={fontWeightCode} heading="Font Weights" />
            <CodeEditor codeString={textColorsCode} heading="Font Colors" />
        </div>
    )
}

export default Typography;