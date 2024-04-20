// import { useEffect, useRef, useState } from "react";
// import { getAllUser } from "../../../services/apiService";

const TableUser = (props) => {
  const { listUsers } = props;

  return (
    <>
      table users
      <table className="table table-hover table-bordered">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {listUsers &&
            listUsers.length > 0 &&
            listUsers.map((item, index) => {
              return (
                <tr key={`table-users-${index}`}>
                  <td>{index + 1}</td>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  <td>{item.role}</td>
                  <td>
                    <button
                      className="btn btn-warning mx-2"
                      onClick={() => props.handleClickBtnUpdate(item)}
                    >
                      Update
                    </button>
                    <button
                      onClick={() => props.handleClickBtnDelete(item)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          {listUsers && listUsers.length === 0 && (
            <tr>
              <td colSpan={"4"}>Not Found Data</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default TableUser;
