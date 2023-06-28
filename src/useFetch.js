import {useEffect, useState} from "react";

const useFetch = function(url) {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(function() {
        fetch(url)
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
                setError(err.message);
                setIsPending(false);
            })
    }, [url]);

    return {data, isPending, error}
}

export default useFetch;