import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";
import Header from "../components/Header";
import { Radio } from "@material-tailwind/react";

function LoginRegisterPage() {
  const navigate = useNavigate();
  const [logSelection, setSelection] = useState("");

  useEffect(() => {
    console.log("in Login");
    window.sessionStorage.removeItem("username");
  }, [window.sessionStorage.getItem("username")]);
  const [username, setUser] = useState("");

  const handleLogin = (e: Event) => {
    e.preventDefault();
    if (validateLogin()) {
      fetch(`http://localhost:8080/${logSelection}/${username}`)
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("Could not find user");
        })
        .then((responseJson) => {
          console.log(responseJson);
          window.sessionStorage.setItem("username", responseJson.user_username);

          navigate("/", { state: { key: logSelection } });
        })
        .catch((error) => {
          alert(error);
        });
    }
  };

  const onOptionChange = (e: Event) => {
    setSelection(e.target.value);
    console.log(logSelection);
  };

  const validateLogin = () => {
    if (username === null) {
      toast.error("Error: Username is null.");
      return false;
    } else {
      if (username === "") {
        toast.error("Error: Username is empty.");
        return false;
      } else {
        if (logSelection === "") {
          toast.error("Error: Log selection is empty.");
          return false;
        }
      }
    }
    // If all validations pass
    return true;
  };

  return (
    <>
      <Toaster />
      <Header />
      <div className="pt-14 flex flex-row flex-nowrap justify-center h-auto w-auto rounded-xl">
        <div className=" h-auto w-auto border-r-4 border-black">
          <strong className="font-mono text-xl">LOGIN</strong>
          <div className="flex flex-row h-auto justify-evenly items-center">
            <Radio
              name="selection"
              value="users"
              defaultChecked
              label="as User"
              checked={logSelection === "users"}
              onClick={onOptionChange}
            />
            <Radio
              name="selection"
              value="contractors"
              label="as Contractor"
              checked={logSelection === "contractors"}
              onClick={onOptionChange}
            />
          </div>
          <form onSubmit={handleLogin} className="flex flex-col flex-nowrap">
            <label className="font-mono">
              username:
              <input
                type="text"
                value={username}
                onChange={(e) => setUser(e.target.value)}
                className="rounded-lg border-2 border-black "
              />
            </label>
            <input className="mx-20 mt-3 border-2 border-black" type="submit" />
          </form>
        </div>
        <div className="rounded-xl h-auto w-auto">
          <strong className="font-mono text-xl">REGISTER</strong>
          <form onSubmit={handleLogin} className="flex flex-col">
            <label className="font-mono">
              Name:
              <input
                type="text"
                className="rounded-lg border-2 border-black "
              />
            </label>
            <input className="mx-20 mt-3 border-2 border-black" type="submit" />
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginRegisterPage;
