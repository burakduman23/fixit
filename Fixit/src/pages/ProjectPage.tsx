import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaMapMarker } from "react-icons/fa";
import Header from "../components/Header";
import toast, { Toaster } from "react-hot-toast";

function ProjectPage() {
  const { id } = useParams();
  const [job, setJob] = useState({});
  const [contractors_needed, setContractors] = useState([{}]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobData = async () => {
      try {
        await fetch(`http://localhost:8080/projects/${id}`)
          .then((response) => {
            return response.json();
          })
          .then((resp) => {
            setJob(resp);
          });
      } catch (error) {
        console.error(error);
      }
    };
    const fetchContrData = async () => {
      try {
        await fetch(`http://localhost:8080/projects_needs_contractors/${id}`)
          .then((response) => {
            return response.json();
          })
          .then((resp) => {
            setContractors(resp);
          });
      } catch (error) {
        console.error(error);
      }
    };
    fetchJobData();
    fetchContrData();
    setLoading(false);
  }, []);

  const deleteProject = async () => {
    try {
      await fetch(`http://localhost:8080/projects/${id}`, { method: "DELETE" })
        .then((response) => {
          return response.json();
        })
        .then((resp) => {
          setContractors(resp);
        });
    } catch (error) {
      console.error(error);
    }
  };

  console.log(job);
  console.log(contractors_needed);
  return loading ? (
    <>
      <Header />
      <h1 className="pt-20">LOADING</h1>
    </>
  ) : (
    <>
      <Toaster />
      <Header />
      <div className="mt-10 flex flex-col border-4 border-emerald-500 rounded-xl">
        {window.sessionStorage.getItem("username") === job.owner_username ? (
          <div className="border-2 flex place-self-end text-white bg-red-700 rounded-xl my-1 py-1 hover:bg-red-500 hover:border-black">
            <button
              className="flex mr-2"
              onClick={() => {
                toast(
                  (t) => (
                    <span>
                      <div className="flex flex-col">
                        Are you sure you want to delete this project?
                        <div className="flex flex-row justify-evenly">
                          <button
                            className="px-2 flex border-2 boder-black w-fit h-fit place-self-center"
                            onClick={() => toast.dismiss(t.id)}
                          >
                            Cancel
                          </button>
                          <button
                            className="px-2 text-white bg-red-500 flex border-2 boder-black w-fit h-fit place-self-center"
                            onClick={() => deleteProject()}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </span>
                  ),
                  {
                    duration: Infinity,
                  }
                );
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 ml-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                />
              </svg>
              Delete Project
            </button>
          </div>
        ) : (
          []
        )}
        <div className="justify-center">
          <p className="text-2xl bg-slate-400 self-center">{job.title}</p>
        </div>
        <img
          className=" pt-4 size-3/6 self-center"
          src={`/src/project_images/${job.proj_id}.jpeg`}
          alt=""
        />
        <div>{}</div>
        <div className="text-orange-700 mb-5 pt-4">
          <FaMapMarker className="inline text-lg mb-1 mr-1" />
          {job.proj_location}
        </div>
        <h1 className="text-left pl-3 font-bold">Description:</h1>
        <h1 className="text-left pt-3 pl-10">{job.description}</h1>

        <h1 className="text-left pl-3 font-bold pt-5">Contractors Needed:</h1>
        {contractors_needed.map((contractors: any) => {
          return (
            <>
              <div className="text-left pl-10 flex justify-between">
                <div className="">
                  <li>Position: {contractors.profession}</li>
                </div>
                <div className="pr-20">
                  <h1>Number of Openings: {contractors.quantity}</h1>
                </div>
              </div>
              <button className="self-start ml-16 mb-2 border-2 border-black rounded-md text-black font-bold h-auto w-16 bg-green-400 hover:bg-green-700 hover:text-white">
                Apply!
              </button>
            </>
          );
        })}
      </div>
    </>
  );
}

export default ProjectPage;
