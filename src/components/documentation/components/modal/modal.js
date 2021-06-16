
import {openModal, closeModal} from '../../../../rapid-ui'
import CodeHighlighter from '../code-highlighter/code-highlighter';
import modalCode from './code-snippets/modal';

function Modal(){
    return (
            <div>
                <h2 className="text-heading-bold text-size-3 mb-1">Modal</h2>

                {/* <CodeEditor codeString={modalCode} heading=""/> */}
                <div className="bg-grey-200 p-2">     
                    <div className="modal-bg" id="modal1">
                        <div className="modal">                                             
                            <div className="flex flex-column flex-gap-1">
                                <h3 className="text-size-2">Modal Title</h3>
                                <p>Hey I am a modal. You see me. Look closely. I am perfect</p>
                                <div className="align-self-end">
                                    <button onClick={() => closeModal('modal1')} className="btn-solid primary mr-sm">Accept</button>
                                    <button onClick={() => closeModal('modal1')} className="btn-solid secondary">Close</button>
                                </div>                                
                            </div>  
                        </div>
                    </div>
                    <button onClick={() => openModal('modal1')} modal-id='modal1' className="btn-solid primary">Live Demo Modal</button>     
                    <div className="mt-1">
                        <CodeHighlighter codeString={modalCode}/>
                    </div>
                </div>                
            </div>
    )
}

export default Modal;