import axios from "axios";
import { useEffect, useState } from "react";


const usePoster = (id) => {
    const [poster, setPoster] = useState([]);
    useEffect(() => {
        axios.get(`https://posterisks.herokuapp.com/posters/${id}`)
            .then(res => {
                setPoster(res.data);
            })
    }, [id]);
    return [poster, setPoster]
};

export default usePoster;