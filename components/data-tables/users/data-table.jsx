'use client';

import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import { Button } from '@/components/ui/button';
import { DataTablePagination } from '@/components/custom/Pagination';
import Link from 'next/link';
import ClientSideRoute from '@/components/ClientSideRoute';
import CustomPagination from '@/components/custom/CustomPagination';
import Loading from '@/components/custom/Loading';

export function UserDataTable({
    columns,
    data,
    pagination,
    onActionClick,
    onDeleteUser,
    loading,
    onPageChange,
}) {
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
    });

    return (
      <>
        <div className="rounded-md">
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    let className = "";
                    if (header.column.columnDef.accessorKey === "featured") {
                      className = "w-[80px]";
                    } else if (
                      header.column.columnDef.accessorKey === "status"
                    ) {
                      className = "w-[150px]";
                    } else if (
                      header.column.columnDef.accessorKey === "action"
                    ) {
                      className = "w-[100px]";
                    }
                    return (
                      <TableHead key={header.id} className={className}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </TableHead>
                    );
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.original.id}
                    data-state={row.getIsSelected() && "selected"}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <ClientSideRoute
                        route={
                          cell.column.id !== "action"
                            ? `details/${row.original.id}`
                            : ""
                        }
                      >
                        <TableCell key={cell.id}>
                          {flexRender(cell.column.columnDef.cell, {
                            ...cell.getContext(),
                            onActionClick,
                            onDeleteUser,
                          })}
                        </TableCell>
                      </ClientSideRoute>
                    ))}
                  </TableRow>
                  //{' '}
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    {loading ? <Loading /> : "No Results."}
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <div className="flex items-center justify-end space-x-2 py-4">
          {/* <DataTablePagination table={table} /> */}
          <CustomPagination
            pagination={pagination}
            onPageChange={onPageChange}
          />
        </div>
      </>
    );
}
