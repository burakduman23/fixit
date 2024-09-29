import { FaMapMarker } from "react-icons/fa";
import { Link } from "react-router-dom";

const ContractorCard = (props: any) => {
  const contractor = props.contractor;
  return (
    <div className="m-3 bg-white rounded-xl shadow-xl relative">
      <div className="p-4">
        <div className="mb-6 ">
          <div className="text-gray-600 my-2">{contractor.profession}</div>
          <h3 className="text-l font-bold text-center">{contractor.name}</h3>
          <img
            className="object-contain max-w-48  min-w-0 drop-shadow-md rounded-md justify-center mx-auto"
            src={`./src/contractor_images/${contractor.id}.jpeg`}
            alt=""
          />
        </div>
        <h1 className="font-bold">Description:</h1>
        <div className="mb-5">{contractor.certifications}</div>

        <div className="border border-gray-100 mb-5"></div>

        <div className="flex flex-col lg:flex-row justify-between mb-3 h-full">
          <div className="text-orange-700 mb-5 -top">
            <FaMapMarker className="inline text-lg mb-1 mr-1" />
            {contractor.contact_details.address}
          </div>
        </div>
        <div className="flex flex-col items-center p-3">
          <Link
            to={`/job-details/${contractor.id}`}
            className=" absolute center bottom-1 w-auto pb-2 font-mono bg-transparent dark:bg-emerald-200 font-semibold hover:bg-emerald-600 hover:text-white py-2 px-4 border border-emerald-800 hover:border-transparent active:border-cyan-950"
          >
            GO TO PROJECT DETAILS
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ContractorCard;
