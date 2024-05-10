import React from "react";

const ListTodo = () => {

    return (
        <div className="mt-10 bg-cyan-500 p-1 rounded-[3rem] mx-[10rem] text-center">
            <div className="inline-block text-[1.5rem] text-cyan-800 bg-cyan-400 m-10 p-8 rounded-lg shadow-xl">
                <div className="flex">
                    <div className="px-[8rem]">Description</div>
                    <div className="px-[8rem]">Edit</div>
                    <div className="px-[8rem]">Delete</div>
                </div>
            </div>
        </div>
    )

}

export default ListTodo