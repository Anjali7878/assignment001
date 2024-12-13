import React, { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const Dropdown = ({ listData }) => {
  const [selectedItem, setSelectedItem] = useState(0);

  return (
    <div className="w-full absolute top-[110%] flex flex-col justify-between items-start bg-white pt-10 pb-6 pl-12 pr-6 h-72">
      {listData.map((item, idx) => (
        <div key={idx} className="flex gap-5  w-full">
          <div key={idx} className="flex justify-between gap-5  w-1/3">
            <div
              className="flex gap-5 items-start  hover:text-[#1D4ED8] cursor-pointer w-full"
              onMouseEnter={() => setSelectedItem(idx)}
              onMouseLeave={() => setSelectedItem(null)}
            >
              <span className="flex items-center justify-end gap-2">
                {item.title} <MdKeyboardArrowRight />
              </span>
            </div>
          </div>{" "}
        </div>
      ))}
      {selectedItem === idx &&
        item.lists &&
        item.lists.map((list, index) => (
          <div key={index} className="flex flex-col w-4/6">
            {list.map((subList, id) => (
              <div key={id} className="px-4 py-2 hover:bg-gray-100">
                {subList}
              </div>
            ))}
          </div>
        ))}
    </div>
  );
};

export default Dropdown;
