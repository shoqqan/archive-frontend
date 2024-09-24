import React from 'react';
import {Input} from "@/shared/ui/input.tsx";
import {Button} from "@/shared/ui/button.tsx";

export function InputWithButton() {
    return (
        <div className="flex w-full max-w-sm items-center space-x-2">
            <Input type="text"
                   className={'bg-[#393937] focus-visible:border-[#009FBD] focus-visible:border focus-visible:border-solid lg:w-full'}
                   placeholder="Ключевое слово"/>
            <Button type="submit" className={'bg-customblue lg:hidden hover:bg-white hover:text-customblue'}>
                Искать по документам
            </Button>
            <Button type="submit" className='bg-customblue hidden lg:block hover:bg-white hover:text-customblue'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                     className="bi bi-search" viewBox="0 0 16 16">
                    <path
                        d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                </svg>
            </Button>
        </div>
    )
}
