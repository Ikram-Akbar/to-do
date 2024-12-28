import { useState } from "react";

const BatchUpdate = () => {
  const [count, setCount] = useState<number>(0);
  const [pending,setPending] = useState<number>(0)

  const  handleCount = async() => {
    setCount((prevCount) => prevCount + 1);
    setTimeout(()=>{
        setPending((pre)=> pre + 1);
        setCount((pre)=> pre - 1);
    },3000);
  };

  return (
    <div className="flex m-5 p-5">
      <p className="m-5">Count  : {count}</p>
      <p className="m-5">Solve : {pending}</p>
      <button
        onClick={handleCount}
        type="button"
        className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        +1
      </button>
    </div>
  );
};

export default BatchUpdate;
