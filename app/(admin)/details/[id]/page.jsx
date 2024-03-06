"use client";
import React, { useEffect, useState } from "react";
import { Label } from "@radix-ui/react-label";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { axiosSecureInstance } from "@/utils/axios";
import Loading from "@/components/custom/Loading";
import dataset from "@/constants/capacity_details_questions";
import { ADMIN_DETAILS_SLUG } from "@/constants/apiConstants";

const page = ({ params: { id } }) => {
  const [details, setDetails] = useState();
  const [loading, setLoading] = useState(true);

  const getDetails = async () => {
    try {
      // Assuming the `id` passed corresponds to a user._id in your db.json
      const response = await axiosSecureInstance.get(ADMIN_DETAILS_SLUG(id));

      if (response && response.data) {
        // Since you're getting user details, simply store the user object.
        setDetails(response.data);
        console.log(response.data);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getDetails();
  }, []);

  return (
    <div className="mt-[40px] mb-[40px]">
      <div className=" flex flex-col justify-between h-[calc(100vh-160px)]">
        <h2 className="headline-small mb-[8px]"> User Details </h2>
        {loading ? (
          <Loading />
        ) : (
          details && (
            <div className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800 w-9/12 mx-auto">
              <Label className="label-large">Full Name</Label>
              <p className="body-medium">{details.fullName}</p>

              <Label className="label-large block pt-5">Email</Label>
              <p className="body-medium">{details.email}</p>

              <Label className="label-large block pt-5">User Id</Label>
              <p className="body-medium">{details.id}</p>

              <Label className="label-large block pt-5">
                His Role: {details.role}
              </Label>

              {/* Render other user details similarly */}
            </div>
          )
        )}

        <div className="flex justify-end gap-3 mt-[60px] ">
          <Link href="/">
            <Button className="transparent-btn">Go back</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
