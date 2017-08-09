import React from 'react'
import Sidebar from './sidebar/Sidebar'
import { Route, Switch } from 'react-router-dom'

import Schools from './schools/Schools'
// import NewSchool from './schools/NewSchool'
import HotSchools from './schools/HotSchools'
import StarSchools from './schools/StarSchools'
import School from './school/School'
import CourseCats from './cats/CourseCats'
import './dashboard.css'

import Courses from './courses/Courses'
import HotCourses from './courses/HotCourses'
import Course from './course/Course'

import Advices from './advices/Advices'
import Advice from './advices/Advice'

import Shops from './shops/Shops'
import Shop from './shop/Shop'
import HotGoods from './goods/HotGoods'
import StarGoods from './goods/StarGoods'
import SingleGoods from './goods/SingleGoods'
import GoodsCats from './cats/GoodsCats'

import Activities from './activities/Activities'
import SchoolAccount from './accounts/SchoolAccount'
import ShopAccount from './accounts/ShopAccount'
import Account from './account/Account'
import UpdateAccount from './account/UpdateAccount'
import NewAccount from './account/NewAccount'

const Dashboard = ({match, history}) => (
  <div className='dashboard'>
    <Sidebar selectedIndex={history.location.pathname}/>
    <div className='main'>
      <div className='top-header'></div>
      <div className='content'>
        <Switch>
          <Route exact path={`${match.url}`} component={Schools} />
          <Route path={`${match.url}/schools/hot`} component={HotSchools} />
          <Route path={`${match.url}/schools/star`} component={StarSchools} />
          <Route path={`${match.url}/schools/:schoolId`} component={School} />

          <Route exact path={`${match.url}/courses`} component={Courses} />
          <Route path={`${match.url}/courses/hot`} component={HotCourses} />
          <Route path={`${match.url}/courses/cats`} component={CourseCats} />
          <Route path={`${match.url}/courses/:courseId`} component={Course} />

          <Route exact path={`${match.url}/advices`} component={Advices} />
          <Route path={`${match.url}/advices/:adviceId`} component={Advice} />

          <Route exact path={`${match.url}/shops`} component={Shops} />
          <Route path={`${match.url}/shops/:shopId`} component={Shop} />

          <Route path={`${match.url}/goods/hot`} component={HotGoods} />
          <Route path={`${match.url}/goods/star`} component={StarGoods} />
          <Route path={`${match.url}/goods/cats`} component={GoodsCats} />
          <Route path={`${match.url}/goods/:goodsId`} component={SingleGoods} />

          <Route exact path={`${match.url}/activities`} component={Activities} />

          <Route path={`${match.url}/accounts/new`} component={NewAccount} />
          <Route path={`${match.url}/accounts/school`} component={SchoolAccount} />
          <Route path={`${match.url}/accounts/shop`} component={ShopAccount} />
          <Route path={`${match.url}/accounts/update/:accountId`} component={UpdateAccount} />
          <Route path={`${match.url}/accounts/:accountId`} component={Account} />
        </Switch>
      </div>
    </div>
  </div>
)

export default Dashboard
