/**  @jsx jsx */
import { css, jsx } from "@emotion/core";
import leftArrow from "../../assets/img/arrow/left-arrow.svg";
import rightArrow from "../../assets/img/arrow/right-arrow.svg"

const Arrow = ({ direction, handleClick }) => (
    <div
        onClick={ handleClick }
        css={css`
            display: flex;
            position:absolute;
            top: 50%;
            ${ direction === 'right' ? `right: 25px` : `left: 25px` };
            height: 50px;
            width: 50px;
            justify-content: center;
            background: white;
            border-radius: 50%;
            cursor: pointer;
            align-items: center;
            transition: transform ease-in 0.1s;
            
            &:hover {
                transform: scale(1.1);
            }
            img {
                transform: translateX(${ direction === 'left' ? '-2' : '2' }px);
                &focus {
                    outline: 0;
                }
            }
        `}
    >
        { direction === 'right' ? <img src={ rightArrow } alt="rightArrow"  /> : <img src={ leftArrow } alt="leftArrow" /> }
    </div>
);

export default Arrow;