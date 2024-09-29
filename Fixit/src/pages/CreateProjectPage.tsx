import React, { useState } from "react";
import Header from "../components/Header";
function CreateProjectPage() {
  const [titleCount, setTCount] = useState(25);
  const [descCount, setDCount] = useState(650);

  let project = {
    proj_id: null,
    owner_id: null,
    creation_date: null,
    title: null,
    status: null,
    description: null,
    proj_location: null,
  };

  return (
    <>
      <Header />
      <div className="flex mt-10 place-content-center">
        <strong>Create Project</strong>
      </div>

      <div className="bg-slate-200 mt-6 flex place-content-start w-full">
        <form action="">
          <div className="grid grid-cols-2 gap-4 w-full flex-nowrap">
            <label className="font-mono">Title:</label>
            <div className="grid grid-cols-1">
              <input
                required
                type="text"
                maxLength={25}
                placeholder="Descripted Title"
                className="rounded-lg border-2 border-black w-auto"
              />
              <label className="text-amber-600">25 Chars max</label>
            </div>

            <label className="font-mono">Description:</label>
            <div className="grid grid-cols-1">
              <input
                required
                type="text"
                maxLength={650}
                placeholder="Describe your project in detail"
                className="rounded-lg border-2 border-black w-64 h-32"
              />
              <label className="text-amber-600">650 Chars max</label>
            </div>
            <label className="font-mono">Location:</label>
            <div className="grid grid-cols-1">
              <input
                required
                type="text"
                maxLength={25}
                placeholder="Descripted Title"
                className="rounded-lg border-2 border-black w-auto h-16"
              />
              <label className="text-amber-600">25 Chars max</label>
            </div>
            <div className="flex justify-center bg-slate-600">
              <button className="text-center">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default CreateProjectPage;
