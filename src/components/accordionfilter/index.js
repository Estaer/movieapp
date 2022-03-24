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
            <TitleCont onClick={() => setIsOpen(!isOpen)}>
                <Title fontSize="16px" >
                    {isOpen? <StyledIcon src={MinusIcon} alt="minus" width = "10px"/> : <StyledIcon src={PlusIcon} alt="plus" width="15px" height="15px"/> }
                    {" "} Select {title}
                </Title>
            </TitleCont>

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
  margin: 10px 0;
`;

const StyledIcon = styled.img`
  width: ${props=>props.width};
  height: ${props=>props.height};
  src:${props=>props.src};
`

const Wrapper = styled.div`
    width: 100%;
`;

const TitleCont = styled.div`
  display: inline-flex;
  align-items: center;
`
