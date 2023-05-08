import { useCounter } from "./useCounter"

function DisplayCounter() {

    const [countNumber, addNumber, subNumber, resetCount] = useCounter()
    // const [countNumber, setCountNumber] = useState(0)

    // const addNumber = () => {
    //     setCountNumber(countNumber + 1)
    // };

    // const subNumber = () => {
    //     const newCount = countNumber > 0 ? countNumber - 1 : 0;
    //     setCountNumber(newCount);
    // };      
    
    return (
        <div>
            <h1> {countNumber} </h1>
            <button onClick={addNumber}>+</button>
            <button onClick={subNumber}>-</button>
            <button onClick={resetCount}>Reset</button>
        </div>
    );
};

export default DisplayCounter;