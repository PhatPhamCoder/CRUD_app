import { useReducer } from "react";
import { MdUpdate } from "react-icons/md";
import Bug from "./bug";
import Success from "./success";

const formReducer = (state, event) => {
  return {
    ...state,
    [event.target.name]: event.target.value,
  };
};

export default function UpdateUserForm() {
  const [formData, setFormData] = useReducer(formReducer, {});

  const handleSubit = (e) => {
    e.preventDefault();
    if (Object.keys(formData).length === 0)
      return console.log("Don't have Form Data");
  };

  if (Object.keys(formData).length > 0)
    return <Success message={"Add Success"}></Success>;

  return (
    <form className="grid lg:grid-cols-2 w-4/6 gap-4" onSubmit={handleSubit}>
      <div className="input-type">
        <input
          type="text"
          onChange={setFormData}
          name="firstname"
          className="border w-full px-5 py-3 my-2 focus:outline-none"
          placeholder="First Name"
        />
      </div>
      <div className="input-type">
        <input
          type="text"
          name="lastname"
          onChange={setFormData}
          className="border w-full px-5 py-3 my-2 focus:outline-none"
          placeholder="Last Name"
        />
      </div>
      <div className="input-type">
        <input
          type="text"
          name="email"
          onChange={setFormData}
          className="border w-full px-5 py-3 my-2 focus:outline-none"
          placeholder="Email"
        />
      </div>
      <div className="input-type">
        <input
          type="text"
          name="salary"
          onChange={setFormData}
          className="border w-full px-5 py-3 my-2 focus:outline-none"
          placeholder="Salary"
        />
      </div>
      <div className="input-type">
        <input
          type="date"
          name="birthday"
          onChange={setFormData}
          className="border px-5 py-3 focus:outline-none rounded-md"
          placeholder="Birthday"
        />
      </div>
      <div className="flex items-center gap-5">
        <div className="form-check">
          <input
            type="radio"
            name="status"
            value="Active"
            onChange={setFormData}
            id="radioDefault1"
            className="form-check-input appearance-none rounded-full h-4 w-4 border boder-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          />
          <label htmlFor="radioDefault1" className="inline-block text-gray-800">
            Active
          </label>
        </div>
        <div className="form-check">
          <input
            type="radio"
            name="status"
            onChange={setFormData}
            value="Inactive"
            id="radioDefault2"
            className="form-check-input appearance-none rounded-full h-4 w-4 border boder-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          />
          <label htmlFor="radioDefault2" className="inline-block text-gray-800">
            Inactive
          </label>
        </div>
      </div>
      <button className="flex justify-center text-md w-2/6 bg-yellow-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:text-green-500">
        Update
        <span className="ml-2">
          <MdUpdate size={24} />
        </span>
      </button>
    </form>
  );
}
