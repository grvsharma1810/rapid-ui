
import {showToast} from '../../../../rapid-ui'
import CodeHighlighter from '../code-highlighter/code-highlighter';
import toastCode from './code-snippets/toast'

function Toast(){
    return (
        <div>
            <h2 className="text-heding-bold text-size-3 mb-1">Toast</h2>
            <h3 className="text-heding-medium text-size-2 mb-1 mt-3">Success And Error Toast</h3> 
            <div className="bg-grey-200 p-2">                            
                <div className="flex flex-row space-even v-center">
                <button className="btn-solid bg-success" onClick={() => showToast("toast-success")}>Show Success Toast</button> 
                <div className="toast" id="toast-success">                
                    <div className="bg-success">I am a success toast</div>
                </div>            

                <button className="btn-solid bg-failure" onClick={() => showToast("toast-failure")}>Show Error Toast</button> 
                <div className="toast" id="toast-failure">                
                    <div className="bg-failure">I am a error toast</div>
                </div>      
                </div>
                <div className="mt-1">
                    <CodeHighlighter codeString={toastCode}/>
                </div>                
            </div>             
        </div>
    )
}

export default Toast