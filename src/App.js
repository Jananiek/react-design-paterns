import { UserLoader } from "./UserLoader";
import { UserInfo } from "./UserInfo";
import { ProductInfo } from "./ProductInfo";
import {ResourceLoader} from './ResourceLoader'
function App() {
  return (
    <>
	<h3>==================specific Loader=====================</h3>
      <UserLoader userId="234">
        <UserInfo />
      </UserLoader>

      <UserLoader userId="345">
        <UserInfo />
      </UserLoader>
	  <h3>==================any Loader from Resource Loader=====================</h3>
	  <ResourceLoader resourceUrl="/users/345" resourceName="user">
	  <UserInfo />
	  </ResourceLoader>

	  <ResourceLoader resourceUrl="/products/1234" resourceName="product">
	  <ProductInfo />
	  </ResourceLoader>
    </>
  );
}

export default App;
