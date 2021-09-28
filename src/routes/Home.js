import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import Movie from '../components/Movie';
import styled from 'styled-components';

const GET_MOVIES = gql`
    {
        movies {
            id
            medium_cover_image
        }
    }
`;

const Container =styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

const Header =styled.div`
    background-image: linear-gradient(-45deg, #d754ab, #fd723a);
    height: 45vh;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

const Title =styled.div`
    font-size: 60px;
    font-weight: 600;
    margin-bottom: 20px;
`;

const Subtitle =styled.div`
    font-size: 35px;
`;

const Loading = styled.div`
    font-size: 18px;
    opacity: 0.5;
    font-weight: 500;
    margin-top: 10px;
`;

const Movies = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 25px;
    width: 60%;
    position: relative;
    top: -50px;
`;

const Home = () => {
    const { loading, error, data } = useQuery(GET_MOVIES);
    console.log('loading', loading, error, data);

    return (
        <Container>
            <Header>
                <Title>Apollo 2020</Title>
                <Subtitle>I love Graph</Subtitle>
            </Header>
            {loading && <Loading>Loading...</Loading>}
            {!loading && data.movies &&
                <Movies>
                    {data.movies.map(m => <Movie key={m.id} id={m.id} bg={m.medium_cover_image} />)}
                </Movies>
            }
        </Container>
    );
};

export default Home;

