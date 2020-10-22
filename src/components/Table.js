import React, { Component } from "react";
import { usersJSON } from "../data";

export default class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: usersJSON,
    };
  }

  componentWillReceiveProps(props) {
    let users;

    switch (props.sortBy) {
      case "name":
        users = [...this.state.users];
        users.sort(this.compareByName);
        this.setState({ users });
        break;
      case "age":
        users = [...this.state.users];
        users.sort(this.compareByAge);
        this.setState({ users });
        break;
      case "points":
        users = [...this.state.users];
        users.sort(this.compareByPoints);
        this.setState({ users });
        break;
      case "rank":
        users = [...this.state.users];
        users.sort(this.compareByRank);
        this.setState({ users });
        break;
    }
  }

  // complete the comparators
  compareByAge(a, b) {
    if (a.age < b.age) {
      return -1;
    }
    if (a.age > b.age) {
      return 1;
    }
    return 0;
  }

  compareByName(a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  }

  compareByPoints(a, b) {
    if (a.points < b.points) {
      return -1;
    }
    if (a.points > b.points) {
      return 1;
    }
    return 0;
  }

  compareByRank(a, b) {
    if (a.rank < b.rank) {
      return -1;
    }
    if (a.rank > b.rank) {
      return 1;
    }
    return 0;
  }

  render() {
    return (
      <div>
        <table className="table table-striped">
          <thead>
            <tr key="head">
              <th>Age</th>
              <th>Name</th>
              <th>Points</th>
              <th>Rank</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((user) => (
              <tr>
                <td> {user.age}</td>
                <td> {user.name}</td>
                <td> {user.points}</td>
                <td> {user.rank}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
