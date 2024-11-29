import React, { useEffect, useState } from "react";
import httpRequest from "../Axios";

const HomePage = () => {
    const [task, setTask] = useState([]);

    const getAllTodos = async () => {
        try {
            const response = await httpRequest.get("/todos");
            const data = await response.data;
            setTask(data);
            console.log(data)
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getAllTodos();
    }, [])


    return (
        <div className="p-6">
            {/* Header */}
            <div className=" mx-auto  rounded-md ">
                <div className="w-full flex justify-center items-center rounded-lg bg-black text-white h-[400px]" >
                    <h1 className="text-[100px] shadow-xl px-10 shadow-gray-800 rounded-lg font-bold flex items-center">
                        <img
                            className="w-28 h-32 rounded-lg shadow-xl shadow-indigo-400 mr-2"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTldSHfSx_0SuJ2ba063dxvktCGYbLM5yd_6g&s"
                            alt="Rocket icon"
                        />
                        My Todo Aplication
                    </h1>

                </div>
                {/* Input Section */}
                <div className="mt-6 flex w-[80%] mx-[10%] items-center space-x-4">
                    <input
                        className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type="text"
                        placeholder="Adicione uma nova tarefa"
                        id="task-input"
                    />
                    <select
                        name="complete"

                        className="block w-full bg-white border border-gray-300 text-gray-700 py-2 px-3 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    >
                        <option value="volvo">Complete</option>
                        <option value="saab">Un Complete</option>
                    </select>
                    <button
                        type="button"
                        id="add-task"
                        className="bg-blue-500 font-bold w-[200px] text-white px-4 py-2 rounded-md flex items-center space-x-2 hover:bg-blue-600"
                    >
                        <span>Add</span>
                        <img
                            className="w-6 text-white p1 h-6"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Plus_sign_font_awesome.svg/512px-Plus_sign_font_awesome.svg.png"
                            alt="Add icon"
                        />
                    </button>
                </div>

            </div>
            <div>
                <div class="inline-flex items-center">
                    <label
                        class="relative flex cursor-pointer items-center rounded-full p-3"
                        for="ripple-on"
                        data-ripple-dark="true"
                    >
                        <input
                            id="ripple-on"
                            type="checkbox"
                            class="peer relative h-5 w-5 cursor-pointer appearance-none rounded border border-slate-300 shadow hover:shadow-md transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-slate-400 before:opacity-0 before:transition-opacity checked:border-slate-800 checked:bg-slate-800 checked:before:bg-slate-400 hover:before:opacity-10"
                        />
                        <span class="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-3.5 w-3.5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                stroke="currentColor"
                                stroke-width="1"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                        </span>
                    </label>
                    <label class="cursor-pointer text-slate-600 text-sm"
                        for="ripple-on"
                    >
                        Ripple Effect On
                    </label>
                </div>



            </div>




        </div>
    );
};

export default HomePage;
