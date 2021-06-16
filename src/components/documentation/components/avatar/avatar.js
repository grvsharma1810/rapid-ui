import imageAvatarCode from './code-snippets/image-avatar'
import imageAvatarWithBadgeCode from './code-snippets/image-avater-with-badge'
import CodeEditor from '../code-editor/code-editor';

function Avatar() {
    return (
        <div>
            <h2 className="text-heding-bold text-size-3 mb-1">Avatars</h2>            
            <CodeEditor codeString={imageAvatarCode} heading="Image Avatar" />            
            <CodeEditor codeString={imageAvatarWithBadgeCode} heading="Image Avatar With Badge" />                         
        </div>
    )
}

export default Avatar;