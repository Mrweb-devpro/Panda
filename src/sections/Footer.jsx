/* eslint-disable react/no-unescaped-entities */
import { FaArrowCircleUp, FaInstagram } from "react-icons/fa";
import styled from "styled-components";
import Logo from "../components/Logo";
import { BsTwitterX } from "react-icons/bs";
import { IoLogoFacebook } from "react-icons/io";

const StyledFooter = styled.footer`
  min-height: 100svh;
  padding: 5rem 4rem;
  padding-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  justify-content: space-between;
  background-color: #4a514a;
  color: #ddd;

  & header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;

    & > a {
      display: flex;
      justify-content: flex-end;
      font-size: 3rem;
      color: inherit;

      border: none;
      background-color: transparent;
      align-self: flex-end;
    }
    & div {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 3rem;
      & span {
        display: flex;
        gap: 2rem;
        font-size: 2rem;

        & a {
          color: #ccc;
          &:hover,
          &:active {
            color: var(--brand-color);
          }
        }
      }
    }
  }

  & > main {
    list-style-type: none;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    gap: 4rem;
    font-size: 1.4rem;

    & div {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 3rem;
      & h4 {
        font-size: 1.6rem;
      }
      & ul {
        list-style-type: none;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        text-align: center;

        align-items: center;
        & li {
          max-width: 20rem;
        }
      }
    }
  }
  & > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.2rem;
    flex-wrap: wrap;
    @media (max-width: 1000px) {
      gap: 2rem;
    }

    & > p {
      color: #aaa;
    }
  }
`;

function Footer() {
  return (
    <StyledFooter>
      <header>
        <div>
          <p>You can reach out to us on </p>
          <span>
            <a href="https://x.com/nwokedike_david/" target="_blank">
              <BsTwitterX />
            </a>
            <a href="https://web.facebook.com/thedanecodes/" target="_blank">
              <IoLogoFacebook />
            </a>
            <a href="https://www.instagram.com/mr_web.dev_pro/" target="_blank">
              <FaInstagram />
            </a>
          </span>
        </div>

        <a href="#home">
          <FaArrowCircleUp />
        </a>
      </header>
      <main>
        <div>
          <h4>Contact us</h4>
          <ul>
            <li>+2349041197194</li>
            <li>(218) 287-8443102 3rd St NEDilworth, Minnesota(MN), 56529</li>
          </ul>
        </div>
        <div>
          <h4>Organization</h4>
          <ul>
            <li>Our Team</li>
            <li>For Business</li>
            <li>Careers</li>
          </ul>
        </div>
        <div>
          <h4>About us</h4>
          <ul>
            <li>Api's</li>
            <li>Help Center</li>
            <li>Privacy & terms</li>
          </ul>
        </div>
      </main>
      <div>
        <Logo />
        <p>©copyright by David Nwokedike</p>
      </div>
    </StyledFooter>
  );
}

export default Footer;
