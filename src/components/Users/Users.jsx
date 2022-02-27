import React from 'react'
import { connect } from 'react-redux'
import { getUsers, setCurrentPage, followUser, unFollowUser } from '../../redux/users_reducer'
import User from './User'
import Paginator from "../../common/Paginator/Paginator"
import { userProfileThunk } from "../../redux/profile_reducer"
import SearchForm from '../../common/SearchForm/SearchForm'
import c from "./Users.module.css"

class UsersContainer extends React.Component {

   onPageChange = (pageNumber) => {
      this.props.setCurrentPage(pageNumber)
      this.props.getUsers(pageNumber, this.props.pageSize, this.props.formValue)
   }


   componentDidMount() {
      this.props.getUsers(this.props.currentPage, this.props.pageSize, 'a')
   }
   render() {
      return (
         <div>
            <div className={c.searchArea}>
               <div className={c.searchForm}>
                  <SearchForm currentPage={this.props.currentPage} pageSize={this.props.pageSize} getUsers={this.props.getUsers} />
               </div>
               <div className={c.paginator}>
                  <Paginator totalUsersCount={this.props.totalUsersCount}
                     pageSize={this.props.pageSize}
                     onPageChange={this.onPageChange}
                     currentPage={this.props.currentPage} />
               </div>
            </div>
            <div className={c.users}>{this.props.users.map(user => <User
               key={user.id}
               unFollowUser={this.props.unFollowUser}
               followUser={this.props.followUser}
               name={user.name}
               smallAvatar={user.photos.small}
               followed={user.followed}
               user={user}
               userProfileThunk={this.props.userProfileThunk}
            />)} </div>
         </div>
      )
   }
}

const mapStateToProps = (state) => {
   return {
      users: state.users.users,
      totalUsersCount: state.users.totalUsersCount,
      currentPage: state.users.currentPage,
      pageSize: state.users.pageSize,
      formValue: state.users.formValue,
   }
}



export default connect(mapStateToProps, { getUsers, setCurrentPage, followUser, unFollowUser, userProfileThunk })(UsersContainer)