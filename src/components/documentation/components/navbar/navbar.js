
import navbarCode from './code-snippets/navbar.js'
import CodeEditor from '../code-editor/code-editor';

function Navbar(){    
    return (     
        <>  
            <h2 className="text-heding-bold text-size-3 mb-1">Navbars</h2> 
            <CodeEditor codeString={navbarCode} heading=""/>            
        </>                
    )
}

export default Navbar;