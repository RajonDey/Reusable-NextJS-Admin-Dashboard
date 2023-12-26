'use client';

import Icon from '@mdi/react';
import { mdiDotsVertical } from '@mdi/js';
import { Button } from '@/components/ui/button';
import { Dropdown } from '@/components/custom/Dropdown';
import moment from 'moment';

const handleDelete = () => {
  console.log('deleted');
};

const handleFeature = () => {
  console.log('feature');
};

export const capacityRequestColumns = [
  {
    accessorKey: 'dc_capacity_title',
    header: 'Title',
  },
  {
    accessorKey: '_id',
    header: 'Capacity ID',
  },
  {
    accessorKey: 'createdAt',
    header: 'Date',
    cell: ({ row }) => {
      const createdAt = row.getValue('createdAt');

      return moment(createdAt).format('MM/DD/YYYY');
    },
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      return (
        <div>
          <Button className="status-btn review-btn">Under Review</Button>
        </div>
      );
    },
  },
  {
    accessorKey: 'action',
    header: 'Action',
    cell: ({ row, handleCapacityStatusUpdate, onActionClick }) => {
      const actions = [
        {
          label: 'Approve',
          content: {
            header: 'Approve this capacity?',
            description:
              'By confirming this capacity, it will be live on the platform.',
            action: () =>
              handleCapacityStatusUpdate(row.getValue('_id'), 'LIVE'),
          },
        },
        {
          label: 'Decline',
          content: {
            header: 'Decline this capacity?',
            description: 'By declining this capacity, it will be rejected.',
            action: () =>
              handleCapacityStatusUpdate(row.getValue('_id'), 'REJECTED'),
          },
        },
        {
          label: 'Contact',
          content: {
            header: 'Name',
            description: (
              <div className="flex flex-col gap-4">
                <div className="flex justify-between">
                  <div className="flex space-x-2">
                    <p className="font-bold">Name:</p>
                    <p>{row.original.userID.fullName} </p>
                  </div>
                  <button
                    onClick={() =>
                      navigator.clipboard.writeText(
                        row.original.userID.fullName
                      )
                    }
                  >
                    Copy
                  </button>
                </div>
                <div className="flex justify-between">
                  <div className="flex space-x-2">
                    <p className="font-bold">Email: </p>
                    <p>{row.original.userID.email}</p>
                  </div>
                  <button
                    onClick={() =>
                      navigator.clipboard.writeText(row.original.userID.email)
                    }
                  >
                    Copy
                  </button>
                </div>
              </div>
            ),
          },
        },
        {
          label: 'Archive capacity',
          content: {
            header: 'Archive this capacity?',
            description: 'By confirming this capacity, it will be archived.',
            action: () =>
              handleCapacityStatusUpdate(row.getValue('_id'), 'ARCHIVED'),
          },
        },
        {
          label: 'Delete',
          content: {
            header: 'Are you sure you want to delete it?',
            description: 'By confirming this capacity, it will be deleted.',
            action: () =>
              handleCapacityStatusUpdate(row.getValue('_id'), 'DELETED'),
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
