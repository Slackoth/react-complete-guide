import {useEffect, useState} from 'react';

const useCounter = (forward = true) => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter((prevCounter) => {
                return forward ? prevCounter + 1 : prevCounter - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [forward]);

    return counter;
};

export default useCounter;