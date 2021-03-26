
import CodeEditor from '../code-editor/code-editor';
import badgeCode from './code-snippets/badge'

function Badge(){
    return (
        <div>
            <h2 className="text-heding-bold text-size-3 mb-1">Badges</h2>
            <CodeEditor codeString={badgeCode} heading=""/>                                        
        </div>
    )
}

export default Badge;