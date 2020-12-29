import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {
    

    const { data:images, loading } = useFetchGifs( category );



    return (
        <>
        <h3 className="animate_animated animated_fadeIn">{category}</h3>  
        { loading && <p className="animate_animated animated_flash">loaging</p>  }
        <div className="card-grid">
            {
                images.map( img => (
                    <GifGridItem 
                        key={ img.id } 
                        { ...img }   
                    />
                ))
            }
        </div>
        </>
    )
}
