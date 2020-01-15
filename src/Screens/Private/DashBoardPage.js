import React from "react";
import { connect } from "react-redux";
import AdvancedTable from "../../Components/Common/AdvancedTable";
import { bindActionCreators } from "redux";
import { getUserList } from "../../redux/user/userAction";

class DashBoardPage extends React.Component {
  tableHeader = [
    { id: "id", label: "User Id", minWidth: 10 },
    {
      id: "avatar",
      label: "Avatar",
      minWidth: 60,
      type: "image",
      align: "center"
    },
    { id: "email", label: "Email", minWidth: 170 },
    { id: "first_name", label: "First Name", minWidth: 120 },
    { id: "last_name", label: "Last Name", minWidth: 120 }
  ];

  componentDidMount() {
    const { getUserList } = this.props;
    getUserList();
  }

  handlePageChange = pageNumber => {
    const { getUserList } = this.props;
    getUserList(pageNumber);
  };

  handleClick = id => {
    this.props.history.push(`/users/${id}`);
  };

  render() {
    const { userListInfo } = this.props;
    return (
      <AdvancedTable
        columns={this.tableHeader}
        rows={userListInfo.data}
        userListInfo={userListInfo}
        handlePageChange={this.handlePageChange}
        onClick={this.handleClick}
      />
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getUserList }, dispatch);
};

const mapStateToProps = state => {
  return {
    userListInfo: state.userReducer.userListInfo
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashBoardPage);
