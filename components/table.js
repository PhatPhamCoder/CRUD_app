import { BiEdit, BiTrashAlt } from "react-icons/bi";
import data from "../database/data.json";

export default function Table() {
  return (
    <table className="min-w-full table-auto">
      <thead>
        <tr className="bg-gray-800">
          <th className="px-16 py-2">
            <span className="text-gray-200">Name</span>
          </th>
          <th className="px-16 py-2">
            <span className="text-gray-200">Email</span>
          </th>
          <th className="px-16 py-2">
            <span className="text-gray-200">Salary</span>
          </th>
          <th className="px-16 py-2">
            <span className="text-gray-200">Birthday</span>
          </th>
          <th className="px-16 py-2">
            <span className="text-gray-200">Status</span>
          </th>
          <th className="px-16 py-2">
            <span className="text-gray-200">Action</span>
          </th>
        </tr>
      </thead>
      <tbody className="bg-gray-200">
        {data.map((obj, index) => (
          <Tr {...obj} key={index} />
        ))}
      </tbody>
    </table>
  );
}

function Tr({ name, avatar, email, salary, date, status }) {
  return (
    <tr className="bg-gray-50 text-center">
      <td className="px-16 py-3 flex flex-row items-center">
        <img src={avatar || "#"} alt="" />
        <span className="text-center ml-2 font-semibold">
          {name || "Unknow"}
        </span>
      </td>
      <td className="px-16 py-2">
        <span>{email || "Unknow"}</span>
      </td>
      <td className="px-16 py-2">
        <span>{salary || "Unknow"}</span>
      </td>
      <td className="px-16 py-2">
        <span>{date || "Unknow"}</span>
      </td>
      <td className="px-16 py-2">
        <button className="cursor">
          <span className="bg-green-500 text-white p-2 rounded-2xl">
            {status || "Unknow"}
          </span>
        </button>
      </td>
      <td className="px-16 py-2 flex justify-center gap-2">
        <button>
          <BiEdit size={25} color={"rgb(34,197,94)"} />
        </button>
        <button>
          <BiTrashAlt size={25} color={"rgb(244,63,94)"} />
        </button>
      </td>
    </tr>
  );
}
