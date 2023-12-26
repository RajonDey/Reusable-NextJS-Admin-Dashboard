'use client'

import SearchField from '@/components/ui/search';
import React, { useEffect, useMemo, useState } from 'react';
import { UserDataTable } from './data-table';
import { userColumns } from './columns';
import { ADMIN_DELETE_USER_SLUG, ADMIN_GET_SEARCH_QUERY_USERS_SLUG, ADMIN_GET_USERS_SLUG } from '@/constants/apiConstants';
import { axiosSecureInstance } from '@/utils/axios';
import { Skeleton } from '@/components/ui/skeleton';
import CustomDialog from '@/components/custom/CustomDialog';
import { toast } from 'react-toastify';

export function getUserMockData() {
    // Fetch data from your API here.
    return [
      {
        name: "User name",
        userId: "1235870",
        email: "test@gmail.com",
        role: "Owner",
      },
      {
        name: "User name",
        userId: "1235870",
        email: "test@gmail.com",
        role: "Owner",
      },
      {
        name: "User name",
        userId: "1235870",
        email: "test@gmail.com",
        role: "Owner",
      },
    ];
  }

const UsersListComponent = () => {
    const [userData, setUserData] = useState([]);
    const [isUserDataLoading, setIsUserDataLoading] = useState(true);
    const [dialog, setDialog] = useState({ open: false, content: null });
    const [isMakingAPIRequest, setIsMakingAPIRequest] = useState(false);
    const [paginationData, setPaginationData] = useState({});

      // static variables
  const defaultPageLimit = 2;

    useEffect(() => {
      getUserData(1, defaultPageLimit);
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
      console.log("🚀 ~ file: users-list-component.jsx:59 ~ handleSearchQueryChange ~ value:", value);
      if(value) {
        getSearchQueryUsersData(value);
      } else {
        getUserData(1, defaultPageLimit);
      }
    };

    const onPageChange = (page) => {
      getUserData(page, defaultPageLimit);
    };

    // ---------- API CALLS ----------
    const getUserData = async (page, limit) => {
        try {
            setIsUserDataLoading(true);
            const result = await axiosSecureInstance.get(
                ADMIN_GET_USERS_SLUG(page, limit)
            );

            if (result.data.success) {
                setUserData(result.data.users);
                setPaginationData(result?.data?.pagination);
            }
        } catch (error) {
            console.log(
                "🚀 ~ file: users-list-component.jsx:71 ~ getUserData ~ error:",
                error
            );
        } finally {
            setIsUserDataLoading(false);
        }
    };

    const getSearchQueryUsersData = async (searchQuery) => {
      // Regular expression to check if searchQuery is an email
      const emailRegex = /\S+@\S+\.\S+/;

      let fullName = emailRegex.test(searchQuery) ? null : searchQuery;
      let email = emailRegex.test(searchQuery) ? searchQuery : null;

      try {
          setIsMakingAPIRequest(true);
          const result = await axiosSecureInstance.get(
            ADMIN_GET_SEARCH_QUERY_USERS_SLUG(
              fullName,
              email
              )
          );

          if (result.data.success) {
              setUserData(result.data.users);
              setPaginationData(result?.data?.pagination);
          }
      } catch (error) {
          console.log(
              "🚀 ~ file: capacity-request-component.jsx:72 ~ getCapacityRequestData ~ error:",
              error
          );
      } finally {
         setIsMakingAPIRequest(false);
      }
  };

  const handleDeleteUserAction = async (userId) => {
    // return console.log("🚀 ~ file: capacity-request-component.jsx:99 ~ handleCapacityStatusUpdate ~ id:", status, id);

    try {
        setIsMakingAPIRequest(true);
    
        const result = await axiosSecureInstance.delete(
            ADMIN_DELETE_USER_SLUG(userId)
        );

        if (result.status === 204) {
            toast.success("Success! User deleted.");
            handleCloseDialog();
            // update table
            getUserData(paginationData?.currentPage || 1, defaultPageLimit);
        } else {
            toast.error(result?.data?.message || "Something went wrong!");
            handleCloseDialog();
        }
    } catch (error) {
        console.log("🚀 ~ file: users-list-component.jsx:143 ~ handleDeleteUserAction ~ error:", error)
        
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
      isUserDataLoading || isMakingAPIRequest
          ? userColumns.map((column) => ({
              ...column,
              cell: () => (
                <Skeleton className="w-[100px] h-[20px] rounded-full bg-slate-200" />
              ),
            }))
          : userColumns,
      [isUserDataLoading, userColumns, isMakingAPIRequest]
    );

  return (
      <>
          <SearchField
              onChange={handleSearchQueryChange}
              placeholder="Search users"
          />
          <div className="pt-5">
              <h3 className="headline-small">Users</h3>
          </div>
          <div className="mt-5">
              <UserDataTable
                  columns={columnsMemo}
                  loading={isUserDataLoading}
                  onActionClick={handleActionClick}
                  onDeleteUser={handleDeleteUserAction}
                  data={userData}
                  onPageChange={onPageChange}
                  pagination={paginationData}
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
}

export default UsersListComponent