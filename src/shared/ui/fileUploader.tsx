import React from 'react';
import {Input} from "@/shared/ui/input.tsx";
import {Label} from "@/shared/ui/label.tsx";

export const FileUploader = () => {
    return (
        <div className="w-[80%] flex flex-col items-center gap-1.5 lg:w-[90%]">
            <Label className={'self-start text-center'} htmlFor="picture">Загрузите фотографию архива</Label>
            <Input id="picture" className={'w-full bg-customlightgray border border-gray-500 border-dashed border-spacing-16 h-[10rem]'}
                   type="file" onChange={(event) => {
                console.log(event.target.files);
            }}/>
        </div>
    );
};

