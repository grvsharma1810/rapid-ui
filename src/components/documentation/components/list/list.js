
import CodeEditor from '../code-editor/code-editor'
import listCode from './code-snippets/list'

function List(){
    return (        
        <div>
            <h2 className="text-heding-bold text-size-3 mb-1">List</h2>
            <CodeEditor codeString={listCode} heading="Stacked List" />            
        </div>
    )
}

export default List;