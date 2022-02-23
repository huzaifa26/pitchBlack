import Layout from "./components/Layout/Layout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import CompanyInfo from "./components/CompanyInfo/CompanyInfo";
import Team from "./components/Team/Team";
import Captable from "./components/Captable/Captable"
import DocumentLibrary from "./components/DocumentLibrary/DocumentLibrary"
import Fundraising from "./components/Fundraising/Fundraising"
import BankAccount from "./components/BankAccount/BankAccount"
import Setting from "./components/Setting/Setting"
import Alerts from "./components/Alerts/Alerts"
import PushMessage from "./components/PushMessage/PushMessage"



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
            path="/documentLibrary"
            element={<Layout body={<DocumentLibrary />} />}
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
            path="/alerts"
            element={<Layout body={<Alerts />} />}
          />

          <Route
            path="/pushMessage"
            element={<Layout body={<PushMessage />} />}
          />          
        </Routes>
    </Router>
  );
}

export default App;