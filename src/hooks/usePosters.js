import React, { useEffect, useState } from 'react';

const usePosters = () => {
    const [posters, setPosters] = useState([]);
    useEffect(() => {
        fetch('https://posterisks.herokuapp.com/posters')
            .then(res => res.json())
            .then(data => setPosters(data))
    }, []);
    return [posters, setPosters];
};

export default usePosters;