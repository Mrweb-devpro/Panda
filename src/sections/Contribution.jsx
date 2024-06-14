import { CiCreditCard1 } from "react-icons/ci";
import { SlArrowRight } from "react-icons/sl";
import styled from "styled-components";

const StyledSection = styled.section`
  min-height: 100svh;
  padding: 5rem 4rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8rem;

  @media (max-width: 1000px) {
    text-align: center;
  }

  & h2 {
    font-size: 2rem;
    color: var(--brand-color);
  }
  & main {
    width: 100%;
    @media (max-width: 1000px) {
      /* background-color: red; */
      flex-direction: column;
    }
    display: flex;
    justify-content: center;
    gap: 10rem;
    align-items: center;

    /* background-color: blue; */

    & div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border: 1.5px solid #e1e3dd;
      background-color: #d1e6cf;
      border-radius: var(--brd);
      padding: 5rem 3rem;
      gap: 2rem;

      & h3 {
        font-size: 2rem;
      }
      & button.pay,
      & textarea {
        width: 30rem;
        border: none;
        border-radius: var(--brd);
        background-color: #fbfbfb;
        display: flex;
        justify-content: space-between;
        padding: 0.7rem 1rem;
        align-items: center;
        gap: 1.5rem;
        color: #777;
        resize: none;
        & span {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        & svg {
          font-size: 1.5rem;
          &.card {
            font-size: 2.4rem;
          }
        }
      }

      & textarea {
        height: 16rem;
      }
    }
    & picture {
      & img {
        @media (max-width: 1000px) {
          width: 100%;
        }
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

function Contribution() {
  return (
    <StyledSection>
      <h2>Contribute to save the panda’s</h2>
      <main>
        <div>
          <h3>Support the panda’s</h3>
          <button className="pay">
            <span>
              <CiCreditCard1 className="card" />
              <p>Select Payment Method</p>
            </span>
            <SlArrowRight />
          </button>
          <span>
            <textarea
              name=""
              id=""
              placeholder="Leave a message for the panda’s"
            ></textarea>
          </span>
          <Button>send</Button>
        </div>
        <picture>
          <img src="contributionImage.svg" alt="" />
        </picture>
      </main>
    </StyledSection>
  );
}

export default Contribution;
