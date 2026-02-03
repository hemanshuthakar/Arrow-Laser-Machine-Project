import React from 'react';

const Skeleton = ({ className }) => {
    return (
        <div className={`animate-pulse bg-dark-700/50 rounded-sm ${className}`}></div>
    );
};

export default Skeleton;
