import React from "react";
import images from '../Exports/images'
import '../App.css'
import {motion} from 'framer-motion'


const Slider = () => {
    return(
        <motion.div className="slider-container">
            <motion.div className="slider" drag='x' dragConstraints={{right:700, left:-700}}>
            {images.map(image => (
                <motion.div className="item">
                    <img src={image} alt="" />
                </motion.div>
            ))}
            </motion.div>
        </motion.div>
    )
}

export default Slider