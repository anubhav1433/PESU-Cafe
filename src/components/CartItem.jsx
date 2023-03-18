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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20 12H4"
                  />
                </svg>
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </button>
            </div>
            <div className="flex text-sm">
              <button
                onClick={removeItem}
                type="button"
                className="flex items-center pl-0 space-x-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-4 h-4 fill-current"
                >
                  <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                  <rect width="32" height="200" x="168" y="216"></rect>
                  <rect width="32" height="200" x="240" y="216"></rect>
                  <rect width="32" height="200" x="312" y="216"></rect>
                  <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}
