import { elementType } from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import { useBeforeLeave } from './useBeforeLeave';
import { useClick } from './useClick';
import { useConfirm } from './useConfirm';
import { useFadeIn } from './useFadeIn';
import { useFullScreen } from './useFullScreen';
import { useInput } from './useInput';
import { useNetwork } from './useNetwork';
import { usePreventLeave } from './usePreventLeave';
import { useScroll } from './useScroll';
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

    const begForLife = () => console.log('please dont leave');
    useBeforeLeave(begForLife);

    const fadeInH1 = useFadeIn(1, 2);
    const fadeInP = useFadeIn(5, 10);

    const handleNeworkChange = (online) => {
        console.log(online ? 'Online' : 'Offline');
    };
    const onLine = useNetwork(handleNeworkChange);

    const { y } = useScroll();

    const onFullS = (isFull) => {
        console.log(isFull ? 'Full' : 'Small');
    };
    const { element, triggerFull, exitFull } = useFullScreen(onFullS);
    return (
        <div className="App" style={{ height: '1000vh' }}>
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

            <div>
                <h1 {...fadeInH1}>Hello</h1>
                <p {...fadeInP}>lorem adfdaf ad</p>
            </div>
            <div>
                <h1>{onLine ? 'OnLine' : 'OffLine'}</h1>
            </div>

            <h1 style={{ color: y > 100 ? 'red' : 'blue' }}>Hi</h1>

            <div ref={element}>
                <img src="data:image/jpeg;base64,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" />
                <button onClick={exitFull}>Exit Fullscreen</button>
            </div>
            <button onClick={triggerFull}>Make Fullscreen</button>
        </div>
    );
};
export default App;
