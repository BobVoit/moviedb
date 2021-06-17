import React from 'react';
import styled from 'styled-components';
import { SETTINGS } from '../settings';


const MovieItemWrapper = styled.div`
    width: ${props => props.sizeWidth || 'auto'};
    height: ${props => props.sizeHeight || 'auto'};
    padding: 1.5rem 2.5rem;
    position: relative;

    border: 2px solid ${SETTINGS.style.colors.primary};
    border-radius: 4px;
`;

const Title = styled.h3`
    margin-top: 1rem;

    text-align: center;
    font-size: 2.2rem;
    line-height: 2.8rem;
    color: ${SETTINGS.style.colors.primary};
`;

const Poster = styled.img`
    width: ${props => props.width || '25rem' };

    border-radius: 4px;
`;

const Average = styled.div`
    position: absolute;
    bottom: 1.5rem;
    left: 2.5rem;

    color: ${SETTINGS.style.colors.secondary};
    font-size: 2.2rem;
    line-height: 2.8rem;
`;

const MovieItem = ({ width, height, movie }) => {
    return (
        <MovieItemWrapper 
            sizeWidth={width ? width + 'px' : ''} 
            sizeHeight={height ? height + 'px' : ''}
        >
            <Poster 
                src={SETTINGS.imageURL + movie.poster_path} 
                alt={movie.original_title}
            />
            <Title>{movie.original_title}</Title>
            <Average>Average: {movie.vote_average}</Average>
        </MovieItemWrapper>
    )
}

export default MovieItem;