import React from 'react';

const Loading = () => {
    return (
        <div className="flex items-center justify-center space-x-2">
            <div className="spinner-border animate-spin inline-block w-12 h-12 border-4 rounded-full text-green-600" role="status">
                <span className="visually-hidden">Load...</span>
            </div>
            <div className="spinner-grow inline-block w-12 h-12 bg-current rounded-full text-green-600 opacity-0" role="status">
                <span className="visually-hidden">Load...</span>
            </div>
        </div>
    );
};

export default Loading;