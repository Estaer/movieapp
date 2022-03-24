import React, { useState } from "react";
import styled from 'styled-components';

import Checkbox from "../checkbox";

import MinusIcon from '../../images/minus-icon.png';
import PlusIcon from '../../images/plus-icon.png';

export default function AccordionFilter (props) {
    const [isOpen, setIsOpen] = useState(false);
    const {title, itemsList} = props;

    return(
        <Wrapper>
            <div onClick={() => setIsOpen(!isOpen)}>
                <Title fontSize="18px" >
                    {isOpen? <img src={MinusIcon} alt="minus" /> : <img src={PlusIcon} alt="plus" /> }
                    {" "} Select {title}
                </Title>
            </div>

            {isOpen && itemsList.map(item =>(
                <Checkbox key={item.id} id={item.id} name={item.name} label={item.name}/>
            ))}
        </Wrapper>
    )
}

const Title = styled.p`
  font-size: ${props => props.fontSize};
  cursor: pointer;
  margin-left: 5px;
  font-weight: 450;
`;

const Wrapper = styled.div`
    width: 100%;
`;
