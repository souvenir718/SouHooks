import { useEffect, useRef, useState } from 'react';
import { useClick } from './useClick';
import { useConfirm } from './useConfirm';
import { useInput } from './useInput';
import { usePreventLeave } from './usePreventLeave';
import { useTabs } from './useTabs';
import { useTitle } from './useTitle';

const content = [
    {
        tab: 'Section 1',
        content: "I'm the content of the Section 1",
    },
    {
        tab: 'Section 2',
        content: "I'm the content of the Section 2",
    },
];

const App = () => {
    const maxLen = (value) => value.length < 10;
    const name = useInput('', maxLen);
    const { currentItem, changeItem } = useTabs(0, content);
    const titleUpdater = useTitle('Loading....');
    setTimeout(() => titleUpdater('Home'), 5000);

    const sayHello = () => console.log('say Hello');

    const title = useClick(sayHello);
    const deleteWord = () => console.log('Delete');
    const abort = () => console.log('reject');
    const confirmDelete = useConfirm('Are you sure', deleteWord, abort);

    const { enablePrevent, disablePrevent } = usePreventLeave();
    return (
        <div className="App">
            <h2>name : {name.value}</h2>
            <input placeholder="Name" {...name} />

            <div>
                {content.map((section, index) => (
                    <button onClick={() => changeItem(index)}>{section.tab}</button>
                ))}
            </div>
            <div>{currentItem.content}</div>
            <div>
                <h1 ref={title}>Hi</h1>
            </div>
            <div>
                <button onClick={confirmDelete}>Delete the word</button>
            </div>

            <div>
                <button onClick={enablePrevent}>Protect</button>
                <button onClick={disablePrevent}>Unprotect</button>
            </div>
        </div>
    );
};
export default App;
