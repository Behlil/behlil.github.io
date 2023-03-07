import React from 'react';
import ReactMarkdown from 'react-markdown';

export default function Markdown({ source }) {
    return (
        <ReactMarkdown >{source}</ReactMarkdown>
    );
}
