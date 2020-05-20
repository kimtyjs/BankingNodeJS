import React from "react";

import Slider from "../../components/Sliders/Slider";
import slideImages from "../../utils/slideImages";

const HomePage = () => {

    return(
        <div>
            <Slider slides={ slideImages } />
        </div>
    );
};

export default HomePage;