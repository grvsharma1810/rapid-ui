
import CodeEditor from '../code-editor/code-editor';
import solidButtonsCode from './code-snippets/solid-buttons'
import ghostButtonsCode from './code-snippets/ghost-buttons'
import linkButtonsCode from './code-snippets/link-buttons'
import floatingActionButton from './code-snippets/floating-action-button'
import buttonWithBadgeCode from './code-snippets/button-with-badge'

function Button() {
    return (
        <div>
            <h2 className="text-heding-bold text-size-3 mb-1">Buttons</h2>

            <CodeEditor codeString={solidButtonsCode} heading="Solid Buttons" />
            <CodeEditor codeString={ghostButtonsCode} heading="Ghost Buttons" />
            <CodeEditor codeString={linkButtonsCode} heading="Link Buttons" />
            <CodeEditor codeString={buttonWithBadgeCode} heading="Button with badge" />
            <CodeEditor codeString={floatingActionButton} heading="Floating Action Buttons" />
        </div>
    )
}

export default Button;
