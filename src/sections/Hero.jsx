/* eslint-disable react/no-unescaped-entities */
import styled from "styled-components";
import Logo from "../components/Logo";

const StyledSection = styled.section`
  min-height: 100svh;
  overflow: hidden;
  padding: 2rem 4rem;
  padding-bottom: 4rem;

  display: flex;
  flex-direction: column;
  gap: 4rem;
  @media (max-width: 1000px) {
      gap: 10rem;
    justify-content: space-between;
    text-align: center;
  }

  & > main {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    @media (max-width: 1000px) {
      /* background-color: red; */
      flex-direction: column;
    }
    & > div {
      display: flex;
      flex-direction: column;
      gap: 4rem;
      @media (max-width: 1000px) {
        align-items: center;
      }
      h1 {
        font-size: 4rem;
      }
      p {
        font-size: 1.6rem;
        line-height: 1.8;
      }
    }

    & picture {
      width: 90%;
      /* background-color: blue; */
      display: flex;
      justify-content: flex-end;
      @media (max-width: 1000px) {
        justify-content: center;
      }
      & img {
        width: 80%;
      }
    }
  }
`;

const Button = styled.button`
  color: #eee;
  padding: 1rem 2rem;
  border: none;
  border-radius: var(--brd);
  width: fit-content;
  background-color: var(--brand-color);
`;

function Hero() {
  return (
    <StyledSection id="home">
      <Logo />
      <main>
        <div>
          <h1>Save the pandas</h1>
          <p>
            Welcome to Pandas, a dedicated platform committed to the
            preservation and protection of the giant panda. Our mission is to
            raise awareness, support conservation efforts, and engage
            communities in protecting this beloved species from extinction.
          </p>
          <Button>Contribute</Button>
        </div>

        <picture>
          <img src="heroImage.svg" alt="" />
        </picture>
      </main>
    </StyledSection>
  );
}

export default Hero;
