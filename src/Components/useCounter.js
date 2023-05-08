import { useState } from "react";

export const useCounter = (initialVal = 0) => {
    const [countNumber, setCountNumber] = useState(initialVal)

    const addNumber = () => {
        setCountNumber(countNumber + 1)
    };

    const subNumber = () => {
        const newCount = countNumber > 0 ? countNumber - 1 : 0;
        setCountNumber(newCount);
    };

    const resetCount = () => {
        setCountNumber(0)
    }

    return [countNumber, addNumber, subNumber, resetCount];
};