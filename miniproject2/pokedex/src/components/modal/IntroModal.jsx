import React from 'react';
import { usePokemonModal } from '../../context/PokemonModalProvider';
import { getTypeIconSrc } from '../../utils/pokemon-helper';

const IntroModal = () => {
    const { currentPokemon, closeModal } = usePokemonModal();

    return (
        <div className='pokemon-intro'>
            <a
                className='arrow-back'
                onClick={ closeModal }
            ></a>

            <div className='current-pokemon'>
                <img src={ currentPokemon.imgSrc } alt='Pokemon-Image' />

                <div>
                    <span className='id-number'>#{ currentPokemon.paddedId }</span>
                    <span className='pokemon-name'>{ currentPokemon.name }</span>

                    <div className='types'>
                        {
                            currentPokemon.types.map(({ name }) => {
                                const typeImg = getTypeIconSrc(name)

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
            </div>
        </div>
    );
};

export default IntroModal;
// The IntroModal component displays a modal with details of the currently selected Pokémon. It uses the usePokemonModal hook to get currentPokemon data and the closeModal function. When rendered, it shows an image of the Pokémon, its ID (paddedId), name, and type icons (fetched via getTypeIconSrc). The Pokémon’s types are displayed with an icon and name for each, and clicking the back arrow (styled as arrow-back) closes the modal by calling closeModal.