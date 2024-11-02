import React from 'react';
import { usePokemonModal } from '../context/PokemonModalProvider';
import { getTypeIconSrc } from '../utils/pokemon-helper';

const PokemonCard = ({ pokemon, pokemon: { paddedId, name, types, imgSrc } }) => {
    const { openModal } = usePokemonModal();

    return (
        <div
            onClick={ () => openModal(pokemon) }
            className={ `pokemon-card ${ types[0].name }` }
        >
            <div>
                <span className='id-number'>{ '#' + paddedId }</span>
                <span className='pokemon-name'>{ name }</span>

                <div className='types'>
                    {
                        types.map(({ name }) => {
                            const typeImg = getTypeIconSrc(name);
                            
                            return (
                                <div key={ name } className={ name }>
                                    <img src={ typeImg } alt={ name } />
                                    <span className='type-name'>{ name }</span>
                                </div>
                            );
                        })
                    }
                </div>
            </div>

            <div className='pokeball-bg'></div>
            <img className='pokemon-image' src={ imgSrc } alt='pokemon-image' />
        </div>
    );
};

export default PokemonCard;


//The PokemonCard component displays individual Pokémon details in a card format. It takes a pokemon object as a prop, extracting properties like paddedId, name, types, and imgSrc. When clicked, it uses the openModal function from the PokemonModalProvider context to open a detailed modal for the selected Pokémon.
// The types array is mapped to display each type with an icon (using getTypeIconSrc to retrieve the type icon source) and name, while paddedId and name are shown as text. Additional styling is applied to the card using CSS classes based on the primary Pokémon type.