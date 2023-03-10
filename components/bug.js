import { RiErrorWarningLine } from "react-icons/ri";

export default function Bug({ message }) {
  return (
    <div className="success conatiner mx-auto">
      <div className="flex justify-center mx-auto border gap-2 border-red-200 bg-red-400 w-3/6 text-gray-900 text-md my-4 py-2 text-center bg-opacity-5">
        {message}
        <RiErrorWarningLine size={25} color={"rgb(248 113 113)"} />
      </div>
    </div>
  );
}
