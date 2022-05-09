import React, { useEffect, useState } from 'react';

const usePosters = () => {
    const [posters, setPosters] = useState([]);
    useEffect(() => {
        fetch('posters.json')
            .then(res => res.json())
            .then(data => setPosters(data))
    }, []);
    return [posters, setPosters];
};

export default usePosters;