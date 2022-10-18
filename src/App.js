import { printProps } from "./PrintProps";
import { UserInfo } from "./UserInfo";
import { withUser } from "./withUser";
import { UserInfoForm } from "./UserInfoForm";
import { ResourceInfoForm } from "./ResourceInfoForm";

const UserInfoWrapped = printProps(UserInfo);
const UserInfoWithLoader=withUser(UserInfo, "234")
function App() {
  return (<>
  <h2>UserInfoWrapped</h2>
   <UserInfoWrapped a={1} b="Hello" c={{ name: "John" }} />

   <h2>UserInfoWithLoader</h2>
    <UserInfoWithLoader />

    <h2>UserWithEditableData</h2>
    <UserInfoForm/>
    <h2>MOre generalize with ResourceInfoForm</h2>
    <ResourceInfoForm/>
    </>
   
  );
}

export default App;
