import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchUsers } from "../../actions/index";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper
} from "@material-ui/core";
import "../../styles/DisplayUsers.css";

class DisplayUsers extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    const { users } = this.props;
    return (
      <div>
        <Paper>
          <Table>
            <TableHead>
              <TableRow className="tableRowHeader">
                {Object.entries(
                  this.props.users[0] ? this.props.users[0].users.data[0] : []
                ).map(([key, value]) => {
                  if (key === "address") {
                    {
                      Object.entries(value).map(([key1, value1]) => {
                        if (key1 === "geo") {
                          return null;
                        } else {
                          return <TableCell>{key1}</TableCell>;
                        }
                      });
                    }
                    return (
                      <TableCell className="tableCellHeader">{key}</TableCell>
                    );
                  } else {
                    return (
                      <TableCell className="tableCellHeader">{key}</TableCell>
                    );
                  }
                })}
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.users[0]
                ? this.props.users[0].users.data.map(user => {
                    return (
                      <TableRow className="tableRowBody">
                        {Object.entries(user ? user : {}).map(
                          ([key, value]) => {
                            if (key === "address" || key === "company") {
                              return <TableCell>Object</TableCell>
                            } else {
                              return <TableCell>{value}</TableCell>
                            }
                          }
                        )}
                      </TableRow>
                    );
                  })
                : null}
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}

DisplayUsers.propTypes = {
  users: PropTypes.any,
  fetchUsers: PropTypes.func
};

const mapStateToProps = state => {
  return { users: state };
};

const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DisplayUsers);
