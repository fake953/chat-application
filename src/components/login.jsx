import { GoogleOutlined} from "@ant-design/icons";
import firebase from "firebase/app";
import "firebase/app";
import { auth } from "../firebase";
const Login = () => {
  return (
    <div className="flex justify-center items-center bg-blue-500 h-screen ">
      <div className="px-40 py-24 bg-white rounded-xl flex flex-col ">
        <h1 className="text-3xl font-bold p-5 block ">welcome to Unichat!</h1>
        <div className="block">
          <div
            onClick={() =>
              auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
            }
            className="text-2xl  text-white bg-blue-500 rounded-xl  border-blue-500 hover:bg-white hover:border hover:text-blue-500 min-w-44 min-h-16 block mb-3 cursor-pointer "
          >
            <GoogleOutlined className="mt-5 text-center px-3" />
            <h1 className="inline  ">sign in with Google</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
