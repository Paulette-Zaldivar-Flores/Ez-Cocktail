import styled from 'styled-components/macro';
import Media from '../../styles/Media';

export const HeaderWrapper = styled.header`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;

  .back-cta {
    visibility: ${(props) => (props.notRoot ? 'visible' : 'hidden')};
    text-decoration: none;
    position: absolute;
    left: 0;
    width: 160px;
    text-align: center;
    color: yellow;
    border: 2px solid yellow;
    padding: 10px;


    ${Media.upToTablet`
      width: 90px;
    `}

    ${Media.upToPhone`
      width: auto;
    `}
  }

  .back-cta:hover
  {
    background: #282828;
  }

  .logo img {
    margin-bottom: 0px;
    width: 151px;
    height: 141px;
  }

  h1 {
    margin-top: 0px;
    font-size: 70px;
    margin-bottom: 20px;
    color: var(--primary-color);
    font-family: 'Oswald', sans-serif;

    ${Media.upToTablet`
      font-size: 50px;
      margin-bottom: 1rem;
    `}
  }
`;
