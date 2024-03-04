"use client";

import { useEffect, useMemo, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import SearchField from "@/components/ui/search";
import { toast } from "react-toastify";
import CustomDialog from "@/components/custom/CustomDialog";
import { capacityRequestColumns } from "./columns";
import { CapacityRequestDataTable } from "./data-table";
import { axiosSecureInstance } from "@/utils/axios";

// ----------- API SLUGS ----------
import {
    ADMIN_GET_REQUEST_CAPACITIES_SLUG,
    ADMIN_GET_SEARCH_QUERY_CAPACITIES_SLUG,
    ADMIN_PATCH_MARK_FEATURED_CAPACITIES_SLUG,
    ADMIN_UPDATE_CAPACITY_STATUS_SLUG,
} from "@/constants/apiConstants";

const CapacityRequestComponent = () => {
    const [capacityRequestData, setCapacityRequestData] = useState([]);
    const [isCapacityDataLoading, setIsCapacityDataLoading] = useState(true);
    const [dialog, setDialog] = useState({ open: false, content: null });
    const [isMakingAPIRequest, setIsMakingAPIRequest] = useState(false);
    const [paginationData, setPaginationData] = useState({});

    // static variables
    const defaultPageLimit = 2;

    // [TODO] : remove after api calls
    useEffect(() => {
        getCapacityRequestData(1, defaultPageLimit);
        console.log("mount");
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
            "🚀 ~ file: capacity-request-component.jsx:59 ~ handleSearchQueryChange ~ value:",
            value
        );
        if (value) {
            getSearchQueryCapacityRequestData(value);
        } else {
            getCapacityRequestData(1, defaultPageLimit);
        }
    };

    const onPageChange = (page) => {
        getCapacityRequestData(page, defaultPageLimit);
    };

    // ---------- API CALLS ----------
    const getCapacityRequestData = async (page, limit) => {
        try {
            setIsCapacityDataLoading(true);
            const result = await axiosSecureInstance.get(
                ADMIN_GET_REQUEST_CAPACITIES_SLUG(page, limit)
            );

            if (result.data.success) {
                setCapacityRequestData(result.data.capacity);
                setPaginationData(result?.data?.pagination);
            }
        } catch (error) {
            console.log(
                "🚀 ~ file: capacity-request-component.jsx:72 ~ getCapacityRequestData ~ error:",
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
                ADMIN_GET_SEARCH_QUERY_CAPACITIES_SLUG(
                    searchQuery,
                    "UNDER_REVIEW"
                )
            );

            if (result.data.success) {
                setCapacityRequestData(result.data.capacity);
                setPaginationData(result?.data?.pagination);
            }
        } catch (error) {
            console.log(
                "🚀 ~ file: capacity-request-component.jsx:72 ~ getCapacityRequestData ~ error:",
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
                // update table
                getCapacityRequestData(
                    paginationData?.currentPage || 1,
                    defaultPageLimit
                );
            } else {
                toast.error(result?.data?.message || "Something went wrong!");
                handleCloseDialog();
            }
        } catch (error) {
            console.log(
                "🚀 ~ file: capacity-request-component.jsx:121 ~ handleCapacityStatusUpdate ~ error:",
                error
            );

            toast.error(
                error?.response?.data?.message ||
                    error?.message ||
                    "Something went wrong! Please try later."
            );
        } finally {
            setIsMakingAPIRequest(false);
        }
    };

    const columnsMemo = useMemo(
        () =>
            isCapacityDataLoading || isMakingAPIRequest
                ? capacityRequestColumns.map((column) => ({
                      ...column,
                      cell: () => (
                          <Skeleton className="w-[100px] h-[20px] rounded-full bg-slate-200" />
                      ),
                  }))
                : capacityRequestColumns,
        [isCapacityDataLoading, capacityRequestColumns, isMakingAPIRequest]
    );

    return (
        <>
            <SearchField
                onChange={handleSearchQueryChange}
                placeholder="Search"
            />
            <div className="pt-5">
                <h3 className="headline-small">New Capacity Requests</h3>
            </div>
            <div className="mt-5">
                <CapacityRequestDataTable
                    columns={columnsMemo}
                    loading={isCapacityDataLoading}
                    onActionClick={handleActionClick}
                    data={capacityRequestData}
                    pagination={paginationData}
                    handleCapacityStatusUpdate={handleCapacityStatusUpdate}
                    onPageChange={onPageChange}
                />

                <CustomDialog
                    isOpen={dialog.open}
                    header={dialog?.content?.header}
                    content={dialog?.content?.description}
                    onClose={handleCloseDialog}
                    onConfirm={dialog.content?.action}
                    loading={isMakingAPIRequest}
                />
            </div>
        </>
    );
};

export default CapacityRequestComponent;
