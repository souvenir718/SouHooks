import { useInput } from './useInput';

const App = () => {
    const maxLen = (value) => value.length < 10;
    const name = useInput('', maxLen);
    return (
        <div className="App">
            <h2>name : {name.value}</h2>
            <input placeholder="Name" {...name} />
        </div>
    );
};
export default App;
