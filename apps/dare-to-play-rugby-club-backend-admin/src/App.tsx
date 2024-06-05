import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { MatchList } from "./match/MatchList";
import { MatchCreate } from "./match/MatchCreate";
import { MatchEdit } from "./match/MatchEdit";
import { MatchShow } from "./match/MatchShow";
import { PlayerList } from "./player/PlayerList";
import { PlayerCreate } from "./player/PlayerCreate";
import { PlayerEdit } from "./player/PlayerEdit";
import { PlayerShow } from "./player/PlayerShow";
import { EventList } from "./event/EventList";
import { EventCreate } from "./event/EventCreate";
import { EventEdit } from "./event/EventEdit";
import { EventShow } from "./event/EventShow";
import { SponsorList } from "./sponsor/SponsorList";
import { SponsorCreate } from "./sponsor/SponsorCreate";
import { SponsorEdit } from "./sponsor/SponsorEdit";
import { SponsorShow } from "./sponsor/SponsorShow";
import { VolunteerList } from "./volunteer/VolunteerList";
import { VolunteerCreate } from "./volunteer/VolunteerCreate";
import { VolunteerEdit } from "./volunteer/VolunteerEdit";
import { VolunteerShow } from "./volunteer/VolunteerShow";
import { ArchiveList } from "./archive/ArchiveList";
import { ArchiveCreate } from "./archive/ArchiveCreate";
import { ArchiveEdit } from "./archive/ArchiveEdit";
import { ArchiveShow } from "./archive/ArchiveShow";
import { NewsletterSubscriberList } from "./newsletterSubscriber/NewsletterSubscriberList";
import { NewsletterSubscriberCreate } from "./newsletterSubscriber/NewsletterSubscriberCreate";
import { NewsletterSubscriberEdit } from "./newsletterSubscriber/NewsletterSubscriberEdit";
import { NewsletterSubscriberShow } from "./newsletterSubscriber/NewsletterSubscriberShow";
import { MerchandiseList } from "./merchandise/MerchandiseList";
import { MerchandiseCreate } from "./merchandise/MerchandiseCreate";
import { MerchandiseEdit } from "./merchandise/MerchandiseEdit";
import { MerchandiseShow } from "./merchandise/MerchandiseShow";
import { TrainingList } from "./training/TrainingList";
import { TrainingCreate } from "./training/TrainingCreate";
import { TrainingEdit } from "./training/TrainingEdit";
import { TrainingShow } from "./training/TrainingShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"DARE TO PLAY RUGBY CLUB Backend"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Match"
          list={MatchList}
          edit={MatchEdit}
          create={MatchCreate}
          show={MatchShow}
        />
        <Resource
          name="Player"
          list={PlayerList}
          edit={PlayerEdit}
          create={PlayerCreate}
          show={PlayerShow}
        />
        <Resource
          name="Event"
          list={EventList}
          edit={EventEdit}
          create={EventCreate}
          show={EventShow}
        />
        <Resource
          name="Sponsor"
          list={SponsorList}
          edit={SponsorEdit}
          create={SponsorCreate}
          show={SponsorShow}
        />
        <Resource
          name="Volunteer"
          list={VolunteerList}
          edit={VolunteerEdit}
          create={VolunteerCreate}
          show={VolunteerShow}
        />
        <Resource
          name="Archive"
          list={ArchiveList}
          edit={ArchiveEdit}
          create={ArchiveCreate}
          show={ArchiveShow}
        />
        <Resource
          name="NewsletterSubscriber"
          list={NewsletterSubscriberList}
          edit={NewsletterSubscriberEdit}
          create={NewsletterSubscriberCreate}
          show={NewsletterSubscriberShow}
        />
        <Resource
          name="Merchandise"
          list={MerchandiseList}
          edit={MerchandiseEdit}
          create={MerchandiseCreate}
          show={MerchandiseShow}
        />
        <Resource
          name="Training"
          list={TrainingList}
          edit={TrainingEdit}
          create={TrainingCreate}
          show={TrainingShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
