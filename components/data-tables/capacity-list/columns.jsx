'use client';
import Icon from '@mdi/react';
import { mdiDotsVertical } from '@mdi/js';
import { Button } from '@/components/ui/button';
import { Dropdown } from '@/components/custom/Dropdown';
import { mdiStarOutline, mdiStar } from '@mdi/js';
import moment from 'moment';

export const capacityListColumns = [
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
    accessorKey: 'isFeatured',
    header: 'Featured',
    cell: ({ row }) => {
      return (
        <div className="flex ps-2 items-center">
          <Icon
            className={
              row.getValue('isFeatured') ? 'text-orange-400' : 'text-gray-600'
            }
            path={row.getValue('isFeatured') ? mdiStar : mdiStarOutline}
            size={1}
          />
        </div>
      );
    },
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      const status = row.getValue('status');

      // Assuming you have a Button component that you can import and use
      const approvedButton = <Button className="status-btn">Approved</Button>;
      const archivedButton = <Button className="archived-btn">Archived</Button>;
      const reviewButton = (
        <Button className="status-btn review-btn">Under Review</Button>
      );
      const featuredButton = () => (
        <Button className="featured-btn">{status}</Button>
      );

      let button;
      if (status === 'LIVE') {
        button = approvedButton;
      } else if (status === 'ARCHIVED') {
        button = archivedButton;
      } else if (status === 'UNDER_REVIEW') {
        button = reviewButton;
      } else {
        button = featuredButton;
      }

      return <div>{button}</div>;
    },
  },
  {
    accessorKey: 'action',
    header: 'Action',
    cell: ({
      row,
      onActionClick,
      handleMarkAsFeaturedCapacity,
      handleCapacityStatusUpdate,
    }) => {
      const actions = [
        {
          label: 'Mark as Featured',
          content: {
            header: 'Mark as Featured?',
            description: 'By confirming, this capacity will be featured.',
            action: () =>
              handleMarkAsFeaturedCapacity(row.getValue('_id'), true),
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
                    <p className="font-bold">name :</p>
                    <p>{row.original.userID?.fullName}</p>
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
                    <p>{row.original.userID?.email}</p>
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
