import React from 'react';
import { connect } from 'react-redux';
import { SETTINGS } from '../settings';
import { getPopularMovies } from '../redux/moviesReducer';
import styled from 'styled-components';
import MovieItem from '../components/MovieItem';
import Container from '../components/Container';

const MoviesWrapper = styled.div`
    width: 100%;
    margin-top: 2rem;
`;

const MoviesContainer = styled(Container)`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    & > * {
        margin: 1rem 0;
    }
`;

class Movies extends React.Component {

    componentDidMount() {
        this.props.getPopularMovies();
    }

    render() {
        return (
            <MoviesWrapper>
                <MoviesContainer>
                    {this.props.popularMovies.map((movie, index) => <MovieItem 
                        key={index}
                        width={300}
                        height={550}
                        movie={movie} 
                    />)}
                </MoviesContainer>
            </MoviesWrapper>
        )
    }
}

const mapStateToProps = (state) => ({
    popularMovies: state.movies.popularMovies
});

export default connect(mapStateToProps, {
    getPopularMovies
})(Movies);
