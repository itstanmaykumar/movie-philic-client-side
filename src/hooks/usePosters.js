import React, { useEffect, useState } from 'react';

const usePosters = () => {
    const [posters, setPosters] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/posters')
            .then(res => res.json())
            .then(data => setPosters(data))
    }, []);
    return [posters, setPosters];
};

export default usePosters;