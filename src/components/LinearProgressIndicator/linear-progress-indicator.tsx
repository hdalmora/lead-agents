import React from 'react';
import { Container } from './styles';
import Emoji from '../Emoji/emoji';

export const LinearProgressIndicator = () => {

    return (
        <Container>
            <span>0%</span>
            <div>
                <div style={{ width: '83%' }} />

                <Emoji symbol="😍" label="smiley-face" />
                <span className="current-experience" style={{ left: '81%' }}>85%</span>
            </div>
            <span>100%</span>
        </Container>
    );
}
  
export default LinearProgressIndicator;