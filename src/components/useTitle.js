import { useEffect, useState } from 'react';

export const useTitle = (initialTitle) => {
    const [title, setTitle] = useState(initialTitle);
    const updateTItle = () => {
        const htmlTItle = document.querySelector('title');
        htmlTItle.innerText = title;
    };
    useEffect(updateTItle, [title]);
    return setTitle;
};
