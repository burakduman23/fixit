import { useEffect, useState } from "react";
import Header from "../components/Header";
import ProjectCard from "../components/ProjectCard";
import { Link } from "react-router-dom";

function MyJobsPage() {
  interface Projects {
    proj_id: number;
    owner_id: number;
    creation_date: Date;
    title: string;
    status: string;
    description: string;
    proj_location: string;
  }
  const [jobs, setJobs] = useState<Projects[]>([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        await fetch(
          `http://localhost:8080/my-jobs/${sessionStorage.getItem("username")}`
        )
          .then((response) => {
            return response.json();
          })
          .then((resp) => {
            console.log(
              `http://localhost:8080/my-jobs/${sessionStorage.getItem(
                "username"
              )}`
            );
            setJobs(resp);
          });
      } catch (error) {
        console.error(error);
      }
    };
    fetchJobs();
  }, []);
  return (
    <>
      <Header />
      <div className="flex place-content-center">
        <Link
          to="/create-project"
          className="text-black flex mt-10 text-center w-max bg-slate-200"
        >
          Create new Project
        </Link>
      </div>

      <div className="bg-slate-200 rounded-lg mt-5 grid grid-cols-2 gap-3">
        {jobs.map((job) => {
          return <ProjectCard key={job.proj_id} job={job} />;
        })}
      </div>
    </>
  );
}

export default MyJobsPage;
