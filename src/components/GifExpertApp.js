import React, {useState} from 'react';
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';


const GifExpertApp = () => {
    // const [state, setstate] = useState('')
    const [categories, setCategories] = useState(['dragon ball'])

    // const handleAdd = () => {
    //     // const newCategories = categories.concat('boruto')
    //     // setCategories(newCategories);
    //     setCategories([...categories, 'boruto']);
    // }

    return (
        <div>
            <h2>Something Beautiful</h2>
            <AddCategory
                setCategories={ setCategories }
            />
            <hr/>
            <ol>
                {categories.map( category => (
                    // <li key={category}>{category}</li>
                    <GifGrid
                        key={category}
                        category={category}
                    />
                ))}
            </ol>
            {/* <div>
                <button
                    onClick={handleAdd}
                >
                    Agregar
                </button>
            </div> */}
        </div>
    );
}

export default GifExpertApp;