"use client";

import Icon from "@mdi/react";
import {
  mdiStarOutline,
  mdiCheck,
  mdiWindowMinimize,
  mdiDotsVertical,
} from "@mdi/js";
import { Dropdown } from "@/components/custom/Dropdown";

export const userColumns = [
  {
    accessorKey: "fullName",
    header: "Name",
  },
  {
    accessorKey: "id",
    header: "User Id",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "role",
    header: "Role",
  },
  {
    accessorKey: "action",
    header: "Action",
    cell: ({ row, onActionClick, onDeleteUser }) => {
      const actions = [
        {
          label: "Delete",
          content: {
            header: "Are you sure you want to delete selected user?",
            description: "By confirming this user will be deleted.",
            action: () => onDeleteUser(row.original.id),
          },
        },
      ];

      const handleActionClick = (action) => {
        onActionClick(action.content);
      };

      return (
        <section className="flex justify-center">
          <Dropdown
            actions={actions.map((action) => ({
              key: action.label,
              label: action.label,
              onClick: () => handleActionClick(action),
            }))}
            buttonText={<Icon path={mdiDotsVertical} size={1} />}
            className="w-[180px]"
          />
        </section>
      );
    },
  },
];
