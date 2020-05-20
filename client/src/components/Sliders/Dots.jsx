/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const Dot = ({ active, dotIndex }) => (
    <span
        onClick={ () => console.log(dotIndex) }
        css={css`
            padding: 10px;
            margin-right: 5px;
            cursor: pointer;
            border-radius: 50%;
            background: ${ active ? 'black' : 'white' };
        `}
    />
);

const Dots = ({ slides, activeSlide, isClickOnDot }) => (

    <div
        css={css`
            position: absolute;
            bottom: 25px;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
        `}
    >
        { slides.map((slide, i) => (
            <Dot key={ slide } active={ activeSlide === i } dotIndex={ i } />
        )) }
    </div>
);

export default Dots;