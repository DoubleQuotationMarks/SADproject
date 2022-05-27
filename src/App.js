import React from 'react'
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom'//导入的方式跟之前有点变化
// import Bundle from './components/Bundle'
import { observable } from 'mobx';
import { Provider } from 'mobx-react';
import Loadable from 'react-loadable'
import Navigation from './functions/NavBar/Navigation'


import './App.less'

function Loading(props) {
  if (props.error) {
    return <div>Error!</div>;
  } else if (props.pastDelay) {
    return <div>Loading...</div>;
  } else {
    return null;
  }
}


const LoadableLRPage= Loadable({
  loader: () => import('./functions/LR/LRPage/LRPage'),
    loading: Loading,
    delay: 0
});

const LoadableHomePage= Loadable({
    loader: () => import('./functions/UserHome/userHome'),
      loading: Loading,
      delay: 0
  });

  const LoadableUserGymList= Loadable({
    loader: () => import('./functions/GymList/index'),
      loading: Loading,
      delay: 0
  });

  const LoadableUserGymEquip= Loadable({
    loader: () => import('./functions/GymEqp/CustEqp'),
      loading: Loading,
      delay: 0
  });
  const LoadableUserStat= Loadable({
    loader: () => import('./functions/userStatistic/userStat'),
      loading: Loading,
      delay: 0
  });
  const LoadableSetting= Loadable({
    loader: () => import('./functions/SettingPage/setting'),
      loading: Loading,
      delay: 0
  });
  const LoadableProfile= Loadable({
    loader: () => import('./functions/ProfilePage/profile'),
      loading: Loading,
      delay: 0
  });
  const LoadableStaffHome= Loadable({
    loader: () => import('./functions/StaffHome/StaffHome'),
      loading: Loading,
      delay: 0
  });

  const LoadableStaffStatus= Loadable({
    loader: () => import('./functions/StaffStatus/StaffStatus'),
      loading: Loading,
      delay: 0
  });

  const LoadableStaffStatic= Loadable({
    loader: () => import('./functions/StaffStatic/StaffStatic'),
      loading: Loading,
      delay: 0
  });

  const LoadableStaffGymPanel= Loadable({
    loader: () => import('./functions/StaffGymPanel/StaffGymPanel'),
      loading: Loading,
      delay: 0
  });

  const LoadableMyProgram= Loadable({
    loader: () => import('./functions/MyProgram/MyProgram'),
      loading: Loading,
      delay: 0
  });

  const LoadableReserve = Loadable({
    loader: () => import("./functions/Reservation/index"),
    loading: Loading,
    delay: 0,
  });
  

const RouterList = () => (
	<Router>
					<Switch> 
                        <Route exact path="/" component={LoadableLRPage}/>
                        <Route exact path="/staff" component={LoadableStaffHome}/>
                        <Route exact path="/staff/status" component={LoadableStaffStatus}/>
                        <Route exact path="/staff/static" component={LoadableStaffStatic}/>
                        <Route exact path="/staff/gympanel/:id" component={LoadableStaffGymPanel}/>
                        <Route exact path="/reservation/:user" component={LoadableReserve} />
                        
                        <Route exact path="/setting/:user" component={LoadableSetting}/>
                        <Route exact path="/profile/:user" component={LoadableProfile}/>
                        <div>
                        {/* <Navigation /> */}
                        <Route exact path="/home/:user" component={LoadableHomePage}/>
                        <Route exact path="/userstat/:user" component={LoadableUserStat}/>
                        <Route exact path="/gym/:user" component={LoadableUserGymList}/>
                        <Route exact path="/gym/gymstate/:branch_id" component={LoadableUserGymEquip}/>
                        <Route exact path="/myprogram/:user" component={LoadableMyProgram}/>

                        </div>        
					</Switch>
	</Router>
)


const App = () => (
    <Provider >
        <RouterList />
    </Provider>
)

export default App
