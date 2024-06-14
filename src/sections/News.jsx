import styled from "styled-components";

const StyledSection = styled.section`
  max-height: 100svh;
  padding: 2rem 4rem;
  padding-bottom: 4rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  background-color: #e2efe2;
  @media (max-width: 1000px) {
    text-align: center;
  }

  & h2 {
    font-size: 2rem;
    color: var(--brand-color);
  }
  & p {
    font-size: 1.4rem;
  }
  & picture {
    display: flex;
    justify-content: center;
    & img {
      width: 80%;
      height: auto;
    }
  }
`;

function News() {
  return (
    <StyledSection>
      <h2>News about the panda’s</h2>
      <p>You can get all the news you need about our panda’s</p>

      <picture>
        <img src="newsImage.svg" alt="" />
      </picture>
    </StyledSection>
  );
}

export default News;
