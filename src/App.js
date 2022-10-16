import { DataSourceLoader } from "./DataSourceLoader";
import axios from "axios";
import { UserInfo } from "./UserInfo";
const getServiceData = (url) => async () => {
  const response = await axios.get(url);
  return response.data;
};
const getLocalStorageData=key=>()=>{
	return localStorage.getItem(key)
}
const TextComponent=({message})=><h1>{message}</h1>
function App() {
  return (
    <>
      <DataSourceLoader
        getDataFunc={getServiceData("/users/123")}
        resourceName="user"
      >
        <UserInfo />
      </DataSourceLoader>

	  <DataSourceLoader
        getDataFunc={getLocalStorageData("message")}
        resourceName="message"
      >
        <TextComponent />
      </DataSourceLoader>
    </>
  );
}

export default App;
