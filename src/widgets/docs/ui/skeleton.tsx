import React from 'react';

export const Skeleton = () => {
    return (
        <div
            className={'w-[10rem] h-[10rem] p-5 animate-pulse flex flex-col gap-y-5 xl:w-full md:w-full mx-[1rem] my-[1rem] border-solid rounded-2xl border-gray-500 bg-customlightgray'}
        >
        </div>
    );
};

