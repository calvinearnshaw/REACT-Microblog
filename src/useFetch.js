import {useEffect, useState} from "react";

const useFetch = function(url) {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(function() {
        const abortCtrl = new AbortController();

        fetch(url, { signal: abortCtrl.signal })
            .then(res => {
                if (!res.ok) {
                    throw Error('Could not fetch data for resource.')
                } else {
                    return res.json();
                }
            })
            .then(data => {
                setIsPending(false);
                setError(null);
                setData(data);
            })
            .catch(err => {
                if (err.name === 'AbortError') {
                    console.log('Fetch Aborted.');
                } else {
                    setError(err.message);
                    setIsPending(false);
                }
            })

        return () => abortCtrl.abort();
    }, [url]);

    return {data, isPending, error}
}

export default useFetch;