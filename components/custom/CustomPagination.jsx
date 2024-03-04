import React from "react";

const CustomPagination = ({ pagination, onPageChange }) => {
    if (!pagination?.currentPage || pagination.totalPages <= 1) return null;

    const handlePageChange = (page) => {
        if (page === pagination.currentPage) return;
        onPageChange(page);
    };

    const pageNumbers = [];
    for (let i = 1; i <= pagination.totalPages; i++) {
        if (
            i === 1 ||
            i === pagination.totalPages ||
            (i >= pagination.currentPage - 2 && i <= pagination.currentPage + 2)
        ) {
            pageNumbers.push(i);
        } else if (i === 2 && pagination.currentPage - 2 > 2) {
            pageNumbers.push("...");
        } else if (
            i === pagination.totalPages - 1 &&
            pagination.currentPage + 2 < pagination.totalPages - 1
        ) {
            pageNumbers.push("...");
        }
    } 

    return (
        <nav className="flex items-center gap-x-1 w-full justify-center my-10">
            <button
                type="button"
                className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
                disabled={pagination.currentPage === 1}
                onClick={() => handlePageChange(pagination.currentPage - 1)}
            >
                <svg
                    className="flex-shrink-0 w-3.5 h-3.5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="m15 18-6-6 6-6" />
                </svg>
                {/* <span>Previous</span> */}
            </button>
            {pageNumbers.map((num, index) => (
                <button
                    key={index}
                    type="button"
                    className={`min-h-[38px] min-w-[38px] flex justify-center items-center ${
                        pagination.currentPage === num
                            ? "bg-[#B62325]  text-white"
                            : "text-[#857371] hover:bg-gray-100"
                    } py-2 px-3 text-sm border border-[#D8C2BF] rounded-full focus:outline-none focus:bg-gray-300 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-600 dark:text-white dark:focus:bg-gray-500`}
                    aria-current={
                        pagination.currentPage === num ? "page" : undefined
                    }
                    onClick={() => num !== "..." && handlePageChange(num)}
                >
                    {num}
                </button>
            ))}
            <button
                type="button"
                className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
                disabled={pagination.currentPage === pagination.totalPages} // Adjust the total number of pages accordingly
                onClick={() => handlePageChange(pagination.currentPage + 1)}
            >
                {/* <span>Next</span> */}
                <svg
                    className="flex-shrink-0 w-3.5 h-3.5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="m9 18 6-6-6-6" />
                </svg>
            </button>
        </nav>
    );
};

export default CustomPagination;
