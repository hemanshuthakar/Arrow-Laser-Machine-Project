import React from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';

const Counter = ({ value, duration = 2, decimals = 0 }) => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => {
        if (decimals > 0) {
            return latest.toFixed(decimals);
        }
        return Math.round(latest);
    });

    React.useEffect(() => {
        if (isInView) {
            animate(count, value, { duration });
        }
    }, [isInView, value, count, duration]);

    return <motion.span ref={ref}>{rounded}</motion.span>;
};

export default Counter;
