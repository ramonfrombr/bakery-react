import React from 'react';

import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

import {
    RodapeContainer,
    RodapeWrap,
    MidiaSocial,
    MidiaSocialWrap,
    SocialLogo,
    SocialIcones,
    SocialIconeLink,
} from './RodapeElementos';

const Rodape = () => {
    return (
        <RodapeContainer>
            <RodapeWrap>
                <MidiaSocial>
                    <MidiaSocialWrap>

                        <SocialLogo to='/'>Pão</SocialLogo>

                        <SocialIcones>

                            <SocialIconeLink
                                href='/'
                                target='_blank'
                                aria-label='Facebook'
                                rel='noopener noreferrer'
                            >
                                <FaFacebook />
                            </SocialIconeLink>

                            <SocialIconeLink
                                href='/'
                                target='_blank'
                                aria-label='Instagram'
                                rel='noopener noreferrer'
                            >
                                <FaInstagram />
                            </SocialIconeLink>

                            <SocialIconeLink
                                href='/'
                                target='_blank'
                                aria-label='Youtube'
                                rel='noopener noreferrer'
                            >
                                <FaYoutube />
                            </SocialIconeLink>



                        </SocialIcones>

                    </MidiaSocialWrap>
                </MidiaSocial>
            </RodapeWrap>
        </RodapeContainer>
    )
}

export default Rodape
