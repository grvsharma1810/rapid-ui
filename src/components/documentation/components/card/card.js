
import CodeEditor from '../code-editor/code-editor';
import cardWithImageAndTextCode from './code-snippets/card-with-image-and-text'
import textCardCode from './code-snippets/text-card'
import cardWithShadowCode from './code-snippets/card-with-shadow'
import cardWithTextOverlay from './code-snippets/card-with-text-overlay';
import horizontalCard from './code-snippets/horizontal-card';

function Card() {
    return (
        <div>
            <h2 className="text-heding-bold text-size-3 mb-1">Cards</h2>
            <CodeEditor codeString={cardWithImageAndTextCode} heading="Card With Image And Text" />
            <CodeEditor codeString={textCardCode} heading="Text Card" />
            <CodeEditor codeString={cardWithShadowCode} heading="Card With Shadow" />
            <CodeEditor codeString={cardWithTextOverlay} heading="Card With Text Overlay" />
            <CodeEditor codeString={horizontalCard} heading="Horizontal Card" />
        </div>
    )
}

export default Card;