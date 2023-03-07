import CodeMirror from '@uiw/react-codemirror';
import { python } from '@codemirror/lang-python';
import React from 'react'
import './CodeMiror.css'
import { androidstudio } from '@uiw/codemirror-theme-androidstudio'



export default function CodeMiror({code}) {
    const onChange = React.useCallback((value, viewUpdate) => {
        console.log('value:', value);
    }, []);

    return (
        <div className="code-miror">
            <CodeMirror
                value={code}
                // height="200px"
                theme={androidstudio}
                extensions={[python({ jsx: true })]}
                onChange={onChange}
                readOnly={true}
                
            />
        </div>
    )
}
