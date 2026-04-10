import { BellIcon } from "@heroicons/react/24/outline"
import { Button } from "../ui/Button"
import { PlusIcon } from "@heroicons/react/16/solid"
import { Avatar } from "../ui/Avatar"

export const Header = () => {
    return <header className="flex justify-between px-6 py-3 bg-white border-b-2 border-slate-200 items-center">
        <h3 className="text-black font-bold">Projects</h3>
        <div className="flex gap-3 items-center">
            <div className="relative">
                <BellIcon width={20} height={20}/>
                <span className="absolute -top-[5px] -right-[5px] items-center w-2.5 h-2.5 bg-red-600 border-2 border-white rounded-full" />
            </div>
            <Button leftIcon={PlusIcon} className="text-xs">New Project</Button>
            <Avatar src="https://i.pravatar.cc/150?u=1"></Avatar>
        </div>
    </header>
}