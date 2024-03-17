import {useCallback, useLayoutEffect, useRef} from 'react'; 

const useEvent = ( 
    handler
) => {
    const handlerRef = useRef(handler); 

    useLayoutEffect(() => {
        handlerRef.current = handler;
    });


    return useCallback((...args) => { 
        const fn = handlerRef.current; 
        return fn(...args); 
    }, []); 
};

export default useEvent; 