import { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import db from "../database.json";
import ContractorCard from "../components/ContractorCard";
import { Toaster } from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";
import Header from "../components/Header";

function HomePage() {
  interface Projects {
    proj_id: number;
    owner_id: number;
    creation_date: Date;
    title: string;
    status: string;
    description: string;
    proj_location: string;
  }

  const [projState, ChangeProj] = useState("z-10");
  const [contrState, ChangeContr] = useState("z-10");
  const [jobs, setJobs] = useState<Projects[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetch("http://localhost:8080/projects")
          .then((response) => {
            return response.json();
          })
          .then((resp) => {
            setJobs(resp);
          });
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <Toaster />
      <div className="pt-12">
        {sessionStorage.getItem("username") === "" ||
        sessionStorage.getItem("username") === null ? (
          <strong className="bg-amber-300 rounded-xl h-auto w-auto p-2">
            Please Login First!
          </strong>
        ) : (
          <>
            <h1 className="font-bold p-2">
              Welcome {sessionStorage.getItem("username")}!
            </h1>
            <div>
              <div className="pt-4 mb-3.5 font-mono">
                <button
                  id="projButton"
                  onClick={() => {
                    if (projState === "z-10") {
                      ChangeContr("z-10");
                      ChangeProj("z-30");
                    }
                  }}
                  className={
                    "font-semibold hover:text-white border-emerald-800 relative rounded-l-xl rounded-r-xl rounded-b-none mx-2 dark:bg-emerald-200 size-auto p-2 pb-3 border-t-2 border-l-2 border-r-4 " +
                    projState
                  }
                >
                  Projects
                </button>
                <button
                  id="contractorButton"
                  onClick={() => {
                    if (contrState === "z-10") {
                      ChangeProj("z-10");
                      ChangeContr("z-30");
                    }
                  }}
                  className={
                    "font-semibold hover:text-white border-emerald-800 relative rounded-l-xl rounded-r-xl rounded-b-none mx-2 dark:bg-emerald-200 size-auto p-2 pb-3 border-t-2 border-l-2 border-r-4 " +
                    contrState
                  }
                >
                  Contractors
                </button>
              </div>
              {projState === "z-10" && contrState === "z-10" ? (
                <h1 className=" w-full h-auto bg-emerald-200 rounded-xl p-3 font-extrabold relative">
                  Select Projects or Contractors
                </h1>
              ) : projState === "z-30" ? (
                <>
                  <div className="pt-2 z-20 relative -mt-6 grid grid-cols-2 w-full h-auto rounded-lg dark:bg-emerald-200 border-neutral-800 border-4">
                    {jobs.map((job) => {
                      return <ProjectCard key={job.proj_id} job={job} />;
                    })}
                  </div>
                </>
              ) : (
                <div className="pt-2 z-20 relative -mt-6 grid grid-cols-2 w-full h-auto rounded-lg dark:bg-emerald-200 border-neutral-800 border-4">
                  {db.contractors.map((contractor) => {
                    return (
                      <ContractorCard
                        key={contractor.id}
                        contractor={contractor}
                      />
                    );
                  })}
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default HomePage;
