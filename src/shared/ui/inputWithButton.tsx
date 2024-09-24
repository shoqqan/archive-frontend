import {Input} from "@/shared/ui/input.tsx";
import {Button} from "@/shared/ui/button.tsx";

export function InputWithButton() {
    return (
        <div className="flex w-full max-w-sm items-center space-x-2">
            <Input type="text"
                   className={'bg-[#393937] focus-visible:border-[#009FBD] focus-visible:border focus-visible:border-solid'}
                   placeholder="Введите ключевое слово"/>
            <Button type="submit" className={'bg-customblue hover:bg-white hover:text-customblue'}>Искать по
                документам</Button>
        </div>
    )
}
