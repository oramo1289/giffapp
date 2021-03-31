import { getGifs } from "../helpers/getGifs";
import {useEffect, useState} from 'react';

export const useFetchGifs = (category) => {
    const [state, SetState] = useState({
        data: [],
        loading: true
    })

    useEffect(() => {
        getGifs(category).then(img =>
            SetState({
                data: img,
                loading:false
            })
        )
    }, [category])

    return state;
}