import React from 'react'
import PropTypes from 'prop-types'
import { GifGridItem } from './GifGridItem'
import { useFetchGifs } from '../hooks/useFetchGifs'

export const GifGrid = ({category}) => {
    
const {data:images, loading} = useFetchGifs(category);
    
    return (
        <>
            {loading && <p>...cargando</p>}
            <h3>{category}</h3>
            <div className={'card-grid'}>
                {
                    images.map(( img ) => (
                        <GifGridItem key={img.id} { ...img } />
                    ))
                }
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}