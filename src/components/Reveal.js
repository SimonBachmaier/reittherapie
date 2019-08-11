import React, { useState } from "react";
import { Waypoint } from "react-waypoint";

const Reveal = (props) => {
    const [revealClasses, setRevealClasses] = useState(
        ''
        );
    const reveal = () => {
        if (!revealClasses) {
            setRevealClasses(' animated ' + (props.animationType ? props.animationType : 'fadeInUp'));
        }

    };

    return (
        <Waypoint onEnter={reveal}>
            {props.tag === 'section' ? (
                <section className={'element-animate ' + props.className + revealClasses}>
                    { props.children }
                </section>
            ) : (
                <div className={'element-animate ' + props.className + revealClasses}>
                    { props.children }
                </div>
            )}
        </Waypoint>
    );
}

export default Reveal;