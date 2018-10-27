import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchUsers } from '../../actions/index';

class DisplayUsers extends Component {
constructor(props) {
  super(props)
}

componentDidMount() {
this.props.fetchUsers();
};

  render() {
    const {
      users
    } =this.props
    return (
<div>
  { this.props.users[0]? this.props.users[0].users.data.map((user) => {
    console.log('Inside map', user ? user : null)
  }) : null }
<h1>is it working?</h1>
</div>
    );
  }
}

DisplayUsers.propTypes = {
  users: PropTypes.any,
  fetchUsers: PropTypes.func
}

const mapStateToProps = (state) =>  {
  return {users: state}
}

const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers())
})

export default connect(mapStateToProps,mapDispatchToProps,)(DisplayUsers);