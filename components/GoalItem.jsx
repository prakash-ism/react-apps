import React, {Component} from 'react';
import  { connect } from 'react-redux';
import { completeGoalRef,goalRef } from '../firebase';

class GoalItem extends Component{

  completeGoal(){
    //add to complete goals on the database
    //remove this goal from the goals reference
      const {email} = this.props.user;
      const {title,serverKey} = this.props.goal;
      goalRef.child(serverKey).remove();
      completeGoalRef.push({email,title});
  }

  render(){
    const { email,title } = this.props.goal;
    return(
      <div style={{margin: '5px'}}>
      <strong>{title}</strong>
      <span style={{margin: '5px'}}>Submitted by <em>{email}</em></span>
      <button
        className="btn btn-sm btn-primary"
        onClick = {() => this.completeGoal()}
      >complete
      </button>
      </div>
    )
  }
}

function mapStateToProps(state){
  return state;
}

export default connect(mapStateToProps,null)(GoalItem);
