import React, { useState, useEffect } from 'react';
import './TextWriter.css';

export default function TextWriter() {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(100);

    const textArray = ['Welcome Here!', 'I am a Data Analyst.', 'Fell Free to navigate.'];
    const typingDelay = 5000;

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setIsDeleting(true);
        }, typingDelay);

        return () => {
            clearTimeout(timeoutId);
        };
    }, [currentIndex, isDeleting, typingDelay]);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            const currentText = textArray[currentIndex];
            if (isDeleting) {
                setText(currentText.substring(0, text.length - 1));
                setTypingSpeed(50);
            } else {
                setText(currentText.substring(0, text.length + 1));
                setTypingSpeed(150);
            }
        }, typingSpeed);

        return () => {
            clearTimeout(timeoutId);
        };
    }, [currentIndex, isDeleting, text, textArray, typingSpeed]);

    useEffect(() => {
        if (!isDeleting && text === textArray[currentIndex]) {
            const timeoutId = setTimeout(() => {
                setIsDeleting(true);
            }, typingDelay);
            return () => {
                clearTimeout(timeoutId);
            };
        }
    }, [isDeleting, text, textArray, currentIndex, typingDelay]);

    useEffect(() => {
        if (isDeleting && text === '') {
            setCurrentIndex((prevIndex) => (prevIndex === textArray.length - 1 ? 0 : prevIndex + 1));
            setIsDeleting(false);
        }
    }, [isDeleting, text, textArray]);

    return (
        <div className="text-writer">
            <h1>{text}</h1>
        </div>
    );
}
