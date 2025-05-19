import { useState, useEffect } from 'react';

function useDebounce(value, deplay) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handleer = setTimeout(() => setDebouncedValue(value), deplay);

        return () => clearTimeout(handleer);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    return debouncedValue;
}

export default useDebounce;
