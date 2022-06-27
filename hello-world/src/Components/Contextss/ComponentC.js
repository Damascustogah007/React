import React, { Component } from 'react'
import { UserConsumer } from './userContext'

export class ComponentC extends Component {
  render() {
    return (
      <div>
        <UserConsumer>
          {(username)=>{
            return <div>Welcome {username} :) </div>
          }}
        </UserConsumer>
      </div>
    )
  }
}

export default ComponentC
