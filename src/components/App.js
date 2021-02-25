import { useEffect, useState } from 'react';
import { useInput } from './useInput';
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
            <div></div>
        </div>
    );
};
export default App;
