import React from 'react';
import Emoji from '../Emoji/emoji';
import { Container } from './styles';


export const CustomPercentageInfo = () => {

    return (
        <Container>
            <div>
                <span>5</span>
                <span>6</span>
            </div>
            <span>%</span>
        </Container>

    );
}
  
export default CustomPercentageInfo;