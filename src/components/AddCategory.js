import React, { useState } from 'react'
import PropTypes from 'prop-types';


export const AddCategory = ({ setCategories }) => {
    const [value, setValue] = useState('')

    const handleInputValue = (e) => setValue(e.target.value)
    const handleSubmit = (e) => {
        e.preventDefault();
        if (value.length > 2 ) {
            setCategories( (categories) => [ value, ...categories]);
            setValue('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={value}
                onChange={handleInputValue}
            />
            <button 
                type="submit"
                onSubmit={handleSubmit}
            >
                Agregar
            </button>
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}