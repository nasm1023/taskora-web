import { Menu, MenuButton, MenuItems, Transition } from "@headlessui/react";
import {
  EllipsisHorizontalIcon,
  DocumentTextIcon,
  ClockIcon,
  CheckCircleIcon,
  PauseCircleIcon,
  ExclamationTriangleIcon
} from "@heroicons/react/24/outline";
import { StarIcon as StarSolid } from "@heroicons/react/24/solid";
import { Fragment } from "react";
import { Button } from "../../components/ui/Button";
import { MenuActionItem } from "./MenuActionItem";
import { useProjectFilters } from "../../hooks/useProjectFilter";

interface ActionMenuProps {
  projectId: string;
}

export const ActionMenu = ({ projectId }: ActionMenuProps) => {
  const { openModal } = useProjectFilters();

  return (
    <Menu as="div" className="relative inline-block text-left">
      <MenuButton as={Button} variant="ghost" size="icon" className="text-slate-400">
        <EllipsisHorizontalIcon className="w-6 h-6" />
      </MenuButton>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <MenuItems
          anchor="bottom end"
          className="z-50 mt-2 w-60 origin-top-right rounded-xl bg-white shadow-xl ring-1 ring-black/5 focus:outline-none overflow-hidden"
        >
          <div className="px-4 py-2.5 text-sm font-bold text-slate-900">
            Project Actions
          </div>

          <div className="p-1 space-y-0.5">
            <MenuActionItem
              icon={DocumentTextIcon}
              label="View Details"
              onClick={() => openModal(projectId)}
            />
            <MenuActionItem icon={ClockIcon} label="View Timeline" />
            <MenuActionItem icon={StarSolid} label="Remove Star" iconClassName="text-yellow-500" />
          </div>

          <div className="h-px bg-slate-100 my-1 mx-1" />

          <div className="p-1 space-y-0.5">
            <MenuActionItem icon={ClockIcon} label="Change Status" />
            <MenuActionItem icon={CheckCircleIcon} label="Mark as Completed" />
            <MenuActionItem icon={PauseCircleIcon} label="Put on Hold" />
          </div>

          <div className="h-px bg-slate-100 my-1 mx-1" />

          <div className="p-1">
            <MenuActionItem
              icon={ExclamationTriangleIcon}
              label="Archive Project"
              variant="danger"
            />
          </div>
        </MenuItems>
      </Transition>
    </Menu>
  );
};