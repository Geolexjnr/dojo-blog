import { useState, useEffect } from "react";
{/**This is a custom hook
for fetching data
------------------
custom hooks must start with the word 'use' for them to work for example 'useFetch'
*/}



const useFetch = (url) =>{

    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    {/**use Effect method/hook to tell the react component that it needs to do the logic in it after the rendering */}
    useEffect(() => {
        const abortCont = new AbortController()
        setTimeout(() =>{
        fetch(url, {signal: abortCont.signal})
        .then(res => {
            {/** Error handling using a custom error message */}
            if(!res.ok){
                throw Error('could not fetch data for the resource');
            }
            return res.json();
        })
        .then(data => {
            console.log(data);
            setData(data);
            setIsPending(false);
            {/**ensuring that the thrown error message does not show even when data has been fetched */}
            setError(null);
        })

        .catch(err => {
            {
                /**catching errors thrown */
                if(err.name === 'AbortError'){
                    console.log('fetch aborted');
                }else{

                        {/**ensuring that the loading message does not show when there's an error */}
                        setIsPending(false)
                        {/**outputting the error */}
                        setError(err.message)

                }
            }
           
        })
    }, 1000);
    
    return () => abortCont.abort();

}, [url]);


    return {data, isPending, error}
}

export default useFetch;