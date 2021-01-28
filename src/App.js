import { Route, Switch } from "react-router";
import "./App.css";
import CreateQuestion from "./component/create-question/create-question.component";
import SideNav from "./component/side-nav/side-nav.component";
import CreateQuestionComponent from "./pages/create-question/create-question.component";
import GroupPage from "./pages/group-page/group.component";
import NumberPage from "./pages/number-page/numberpage.component";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={SideNav} />
        <Route exact path="/grade" component={CreateQuestionComponent} />
        <Route exact path="/grade/:questionID" component={CreateQuestion} />
        <Route exact path="/:id" component={NumberPage} />
        <Route exact path="/:id/:group" component={GroupPage} />
      </Switch>
    </div>
  );
}

export default App;
