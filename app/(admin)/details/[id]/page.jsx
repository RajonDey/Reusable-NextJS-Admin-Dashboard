'use client';
import React, { useEffect, useState } from 'react';
import { Label } from '@radix-ui/react-label';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { axiosSecureInstance } from '@/utils/axios';
import Loading from '@/components/custom/Loading';
import dataset from '@/constants/capacity_details_questions';
import { DETAILS_SLUG } from '@/constants/apiConstants';

const page = ({ params: { id } }) => {
  const [details, setDetails] = useState();
  const [loading, setLoading] = useState(true);
  const getDetails = async () => {
    try {
      const data = await axiosSecureInstance.get(DETAILS_SLUG(id));

      if (data && data.data) {
        if (typeof data.data.capacity[0] === 'object') {
          setDetails(Object.values(data.data.capacity[0]).flat());
          console.log(Object.values(data.data.capacity[0]).flat());
        }
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDetails();
  }, []);

  return (
    <div className="mt-[40px] mb-[40px]">
      <div className=" flex flex-col justify-between h-[calc(100vh-160px)]">
        <h2 className="headline-small mb-[8px]"> Capacity Details </h2>
        {loading ? (
          <Loading />
        ) : (
          details?.length &&
          details?.map((response) => {
            const foundQuestion = dataset.find(
              (question) => question.Variable === response.questionVariable
            );

            return (
              <div
                className="border-input-details mb-[16px]"
                key={response.questionVariable}
              >
                <Label className="label-large" htmlFor="email">
                  {foundQuestion ? foundQuestion.Question : ''}
                </Label>

                {/* Other JSX elements */}

                <div className="body-medium pt-[7px] pb-[8px] ">
                  {typeof response?.answer === 'string' ? (
                    response.questionVariable === 'dc_capacity_msa_form' ||
                    response.questionVariable ===
                      'dc_capacity_workorder_form' ? (
                      <a
                        className="border border-2 px-2 py-1 rounded"
                        target="_blank"
                        download="file.pdf"
                        href={`https://racksubapi.managedcoder.com/${response.answer}`}
                      >
                        View File
                      </a>
                    ) : (
                      <p className="body-medium text-[#534342]">
                        {response.answer}
                      </p>
                    )
                  ) : (
                    'N/A'
                  )}
                </div>
              </div>
            );
          })
        )}

        <div className="flex justify-end gap-3 mt-[60px] ">
          <Link href="/owner">
            <Button className="transparent-btn">Go back</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
