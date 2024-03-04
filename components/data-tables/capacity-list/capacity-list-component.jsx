'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { CapacitiesDataTable } from './data-table';
import { capacityListColumns } from './columns';
import { axiosSecureInstance } from '@/utils/axios';
import SearchField from '@/components/ui/search';
import {
  ADMIN_GET_ALL_CAPACITIES_SLUG,
  ADMIN_GET_SEARCH_QUERY_CAPACITIES_SLUG,
  ADMIN_PATCH_MARK_FEATURED_CAPACITIES_SLUG,
  ADMIN_UPDATE_CAPACITY_STATUS_SLUG,
} from '@/constants/apiConstants';
import CustomDialog from '@/components/custom/CustomDialog';
import { Skeleton } from '@/components/ui/skeleton';
import { toast } from 'react-toastify';

const CapacityListComponent = () => {
  const [capacityData, setCapacityData] = useState([]);
  const [isCapacityDataLoading, setIsCapacityDataLoading] = useState(true);
  const [dialog, setDialog] = useState({ open: false, content: null });
  const [isMakingAPIRequest, setIsMakingAPIRequest] = useState(false);
  const [paginationData, setPaginationData] = useState({});

  // static variables
  const defaultPageLimit = 2;

  useEffect(() => {
    getCapacityData(1, defaultPageLimit);
    console.log('mount');
  }, []);

  // ---------- LOCAL FUNCTIONS ----------
  const handleActionClick = (content) => {
    setDialog({ open: true, content });
  };

  const handleCloseDialog = () => {
    setDialog({ open: false, content: null });
  };

  const handleSearchQueryChange = (value) => {
    console.log(
      '🚀 ~ file: capacity-request-component.jsx:59 ~ handleSearchQueryChange ~ value:',
      value
    );
    if (value) {
      getSearchQueryCapacityRequestData(value);
    } else {
      getCapacityData(1, defaultPageLimit);
    }
  };

  const onPageChange = (page) => {
    getCapacityData(page, defaultPageLimit);
  };

  // ---------- API CALLS ----------
  const getCapacityData = async (page, limit) => {
    try {
      setIsCapacityDataLoading(true);
      const result = await axiosSecureInstance.get(
        ADMIN_GET_ALL_CAPACITIES_SLUG(page, limit)
      );

      if (result.data.success) {
        setCapacityData(result.data.capacity);
        setPaginationData(result?.data?.pagination);
      }
    } catch (error) {
      console.log(
        '🚀 ~ file: capacity-list-component.jsx:63 ~ getCapacityData ~ error:',
        error
      );
    } finally {
      setIsCapacityDataLoading(false);
    }
  };

  const getSearchQueryCapacityRequestData = async (searchQuery) => {
    try {
      setIsCapacityDataLoading(true);
      const result = await axiosSecureInstance.get(
        ADMIN_GET_SEARCH_QUERY_CAPACITIES_SLUG(searchQuery, 'UNDER_REVIEW')
      );

      if (result.data.success) {
        setCapacityData(result.data.capacity);
        setPaginationData(result?.data?.pagination);
      }
    } catch (error) {
      console.log(
        '🚀 ~ file: capacity-request-component.jsx:72 ~ getCapacityRequestData ~ error:',
        error
      );
    } finally {
      setIsCapacityDataLoading(false);
    }
  };

  const handleCapacityStatusUpdate = async (id, status) => {
    // return console.log("🚀 ~ file: capacity-request-component.jsx:99 ~ handleCapacityStatusUpdate ~ id:", status, id);

    try {
      setIsMakingAPIRequest(true);
      const reqBody = {
        id,
        status,
      };
      const result = await axiosSecureInstance.patch(
        ADMIN_UPDATE_CAPACITY_STATUS_SLUG,
        reqBody
      );

      if (result.data.success) {
        toast.success(result.data.message);
        handleCloseDialog();
      } else {
        toast.error(result?.data?.message || 'Something went wrong!');
        handleCloseDialog();
      }
    } catch (error) {
      console.log(
        '🚀 ~ file: capacity-request-component.jsx:121 ~ handleCapacityStatusUpdate ~ error:',
        error
      );

      toast.error(
        error?.response?.data?.message ||
          error?.message ||
          'Something went wrong! Please try later.'
      );
    } finally {
      setIsMakingAPIRequest(false);
    }
  };

  const handleMarkAsFeaturedCapacity = async (id, status) => {
    try {
      setIsMakingAPIRequest(true);
      const result = await axiosSecureInstance.patch(
        ADMIN_PATCH_MARK_FEATURED_CAPACITIES_SLUG(id, status)
      );

      if (result.data.success) {
        toast.success(result.data.message);
        handleCloseDialog();
        // update table
        getCapacityData(paginationData?.currentPage || 1, defaultPageLimit);
      } else {
        toast.error(result?.data?.message || 'Something went wrong!');
        handleCloseDialog();
      }
    } catch (error) {
      console.log(
        '🚀 ~ file: capacity-list-component.jsx:149 ~ handleMarkAsFeaturedCapacity ~ error:',
        error
      );

      toast.error(
        error?.response?.data?.message ||
          error?.message ||
          'Something went wrong! Please try later.'
      );
    } finally {
      setIsMakingAPIRequest(false);
    }
  };

  const columnsMemo = useMemo(
    () =>
      isCapacityDataLoading || isMakingAPIRequest
        ? capacityListColumns.map((column) => ({
            ...column,
            cell: () => (
              <Skeleton className="w-[100px] h-[20px] rounded-full bg-slate-200" />
            ),
          }))
        : capacityListColumns,
    [isCapacityDataLoading, capacityListColumns, isMakingAPIRequest]
  );

  return (
    <>
      <SearchField
        onChange={handleSearchQueryChange}
        placeholder="Search any capacities"
      />
      <div className="pt-5 flex items-center justify-between">
        <h3 className="headline-small">All Capacities</h3>
        <button className="main-btn">Import capacity</button>
      </div>
      <div className="mt-5">
        <CapacitiesDataTable
          columns={columnsMemo}
          loading={isCapacityDataLoading}
          onActionClick={handleActionClick}
          data={capacityData}
          pagination={paginationData}
          onPageChange={onPageChange}
          handleMarkAsFeaturedCapacity={handleMarkAsFeaturedCapacity}
          handleCapacityStatusUpdate={handleCapacityStatusUpdate}
        />
      </div>
      {/* ---------- Reusable Dialog for Delete + Mark/Unmark Featured Actions */}
      <CustomDialog
        isOpen={dialog.open}
        header={dialog?.content?.header}
        content={dialog?.content?.description}
        onClose={handleCloseDialog}
        onConfirm={dialog.content?.action}
        loading={isMakingAPIRequest}
      />
    </>
  );
};

export default CapacityListComponent;
