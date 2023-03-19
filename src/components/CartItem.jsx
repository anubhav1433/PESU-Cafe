import react from "react";
import { useState } from "react";

export default function CartItem(props) {
  const [itemCount, setItemCount] = useState(props.itemCount);
  function removeItem() {
    props.onRemoveItem(props.itemName);
  }
  return (
    <li className="flex flex-col py-4 sm:flex-row sm:justify-between">
      <div className="flex w-full space-x-2 sm:space-x-4">
        <img
          className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-18 sm:h-18 dark:bg-gray-500"
          src={props.itemImage}
          alt={props.itemName}
        />
        <div className="flex flex-col justify-between w-full pb-4">
          <div className="flex justify-between w-full pb-2 space-x-2">
            <div className="space-y-1">
              <h3 className="text-md leading-snug sm:pr-8">{props.itemName}</h3>
            </div>
            <div className="text-right">
              <p className="text-lg font-semibold">
                Rs. {props.itemPrice * itemCount}
              </p>
            </div>
          </div>
          <div className="flex justify-between w-full align-middle">
            <div className="flex items-center mt-2">
              <button
                onClick={() => {
                  if (itemCount > 0) {
                    setItemCount((prevState) => prevState - 1);
                  }
                }}
                className="bg-white rounded-l border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200"
              >
                <i class="uil uil-minus"></i>
              </button>
              <div className="bg-gray-100 border-t border-b border-gray-100 text-gray-600 hover:bg-gray-100 inline-flex items-center px-4 py-1 select-none">
                {itemCount}
              </div>
              <button
                onClick={(e) => {
                  if (itemCount <= props.itemQuantity) {
                    setItemCount((prevcount) => prevcount + 1);
                  }
                }}
                className="bg-white rounded-r border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200"
              >
                <i class="uil uil-plus"></i>
              </button>
            </div>
            <div className="flex text-sm">
              <button
                onClick={removeItem}
                type="button"
                className="flex items-center pl-0 space-x-1"
              >
                <i class="uil uil-trash-alt text-xl bg-white rounded-lg text-blue-800 p-2 hover:text-blue-700"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}
