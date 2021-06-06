
import useMarkdown from '../hooks/useMarkdown';
import marked from 'marked';

export const Markdown = () => {

    const [state, handleChange] = useMarkdown();
    const { text } = state;
    const markdown = marked(text, { breaks: true });

    return (
        <div>
            <h1 className="text-center m-5">Markdown</h1>
            <div className="row justify-content-center">
                <div className="col-5">
                    <h4 className="text-center">Ingrese el Markdown</h4>
                    <textarea
                        className="form-control p-2"
                        id="editor"
                        value={text}
                        onChange={handleChange} />
                </div>
                <div className="col-5" id="previewer">
                    <h4 className="text-center">Resultado del Markdown</h4>
                    <div className="preview rounded" id="preview"
                        dangerouslySetInnerHTML={{__html: markdown}}
                    />
                </div>
            </div>
        </div>
    )
}

