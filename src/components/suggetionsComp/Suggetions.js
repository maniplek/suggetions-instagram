import React, { useState } from "react";
import Suggetion from "./Suggetion";

const pagecountNumber = 5;
const Suggetions = ({ suggetions }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const calculate = () => {
    let first = (currentPage - 1) * pagecountNumber;
    let last = first + pagecountNumber;
    let filteredItems = suggetions.slice(first, last);
    return filteredItems;
  };

  let totalPages = Math.ceil(suggetions.length / pagecountNumber);

  let hasPreviousPage = currentPage === 1 ? false : true;
  let hasNextPage = currentPage === totalPages ? false : true;

  return (
    <>
      {calculate().map((suggetion) => (
        <Suggetion key={suggetion.userId} suggetion={suggetion} />
      ))}
      <div className="next-prev">
                    <button className="prev"
                            onClick={() => setCurrentPage(currentPage - 1)}
                            disabled={!hasPreviousPage}
                          >
                            PREV
                    </button>
                    <button className="next"
                              onClick={() => setCurrentPage(currentPage + 1)}
                              disabled={!hasNextPage}
                            >
                          NEXT
                    </button>
      </div>
    </>
  );
};

export default Suggetions;
