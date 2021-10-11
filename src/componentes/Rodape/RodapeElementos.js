import styled from 'styled-components';


export const RodapeContainer = styled.div`
    background-color: #0d0909;
`;

export const RodapeWrap = styled.div`
    padding: 16px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1300px;
    margin: 0 auto;
`;

export const MidiaSocial = styled.div`
    max-width: 1300px;
    width: 100%;
`;

export const MidiaSocialWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 16px auto 0 auto;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`;

export const SocialLogo = styled.div`
    color: #fff;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    font-weight: bold;
`;

export const SocialIcones = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
`;

export const SocialIconeLink = styled.div`
    color: #fff;
    font-size: 24px;
`;

