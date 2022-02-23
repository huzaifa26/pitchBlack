import Layout from "./components/Layout/Layout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import CompanyInfo from "./components/CompanyInfo/CompanyInfo";
import Team from "./components/Team/Team";
import Captable from "./components/Captable/Captable"
import DocumentLocker from "./components/DocumentLocker/DocumentLocker"
import Fundraising from "./components/Fundraising/Fundraising"
import BankAccount from "./components/BankAccount/BankAccount"
import Setting from "./components/Setting/Setting"
import UserProfile from "./components/UserProfile/UserProfile";



function App() {
  
  return (
    <Router>
      <Routes>
          <Route
            index
            path="/"
            element={<Layout body={<Dashboard />} />}
          />

          <Route
            path="/companyinfo"
            element={<Layout body={<CompanyInfo />} />}
          />

          <Route
            path="/team"
            element={<Layout body={<Team />} />}
          />

          <Route
            path="/captable"
            element={<Layout body={<Captable />} />}
          />

          <Route
            path="/documentLocker"
            element={<Layout body={<DocumentLocker />} />}
          />

          <Route
            path="/fundraising"
            element={<Layout body={<Fundraising />} />}
          />

          <Route
            path="/bankAccount"
            element={<Layout body={<BankAccount />} />}
          />

          <Route
            path="/setting"
            element={<Layout body={<Setting />} />}
          />
          <Route
            path="/userProfile"
            element={<Layout body={<UserProfile />} />}
          />          
        </Routes>
    </Router>
  );
}

export default App;