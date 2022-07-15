import { Audio } from "react-loader-spinner";
function Loader() {
  console.log("isLoading");
  return <Audio height="100" width="100" color="grey" ariaLabel="loading" />;
}
export default Loader;
