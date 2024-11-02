import React from 'react';
import useTypes from '../hooks/useTypes.js';
import { getTypeIconSrc } from '../utils/pokemon-helper';

const TypesBar = ({ toggleType }) => {
    const types = useTypes();

    return (
        <nav className='types-bar'>
            {
                types.map(({ name }) => {
                    const typeImg = getTypeIconSrc(name);

                    return (
                        <a
                            key={ name }
                            className={ name }
                            onClick={ () => toggleType(name) }
                        >
                            <img src={ typeImg } alt={ name } />
                        </a>
                    );
                })
            }
        </nav>
    );
};

export default TypesBar;

//The TypesBar component displays a navigation bar with icons for each Pokémon type, allowing users to filter Pokémon by type. 
//It uses the useTypes hook to fetch available Pokémon types and getTypeIconSrc to get the icon source for each type. Each type is rendered as a clickable <a> element with an image. 
//When clicked, it triggers the toggleType function (passed as a prop) with the selected type’s name to update the displayed Pokémon accordingly.