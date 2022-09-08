import React from "react";
import styled from "styled-components";
import { useQuery } from "react-query";
import { getMovies, IGetMoviesResult } from "../api";
import { makeImagePath } from "../utils";

const Wrapper = styled.div`
  background: black;
`;

const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Banner = styled.div<{ bgPhoto: string }>`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
    url(${(props) => props.bgPhoto});
  background-size: cover;
`;
const Title = styled.h2`
  font-size: 48px;
  margin-bottom: 24px;
  color: white;
`;
const Overview = styled.p`
  color: white;
`;
function Home() {
  const { data, isLoading } = useQuery<IGetMoviesResult>(
    ["movies", "nowPlaying"],
    getMovies
  );
  return (
    <Wrapper>
      (isLoading ? (<Loader> Loading... </Loader>) : (
      <>
        <Banner bgPhoto={makeImagePath(data?.results[0].backdrop_path || "")}>
          <Overview>
            <Title>{data?.results[0].title}</Title>
          </Overview>
        </Banner>
      </>
      ))
    </Wrapper>
  );
}

export default Home;
