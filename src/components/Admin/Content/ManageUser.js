import ModalCreateUser from "./ModalCreateUser";
import "./ManageUser.scss";
import { AiFillPlusCircle } from "react-icons/ai";
import { useEffect, useState } from "react";
import {
  getAllUser,
  getAllUserWithPaginate,
} from "../../../services/apiService";
import TableUser from "./TableUser";
import ModalUpdateUser from "./ModalUpdateUser";
import ModalDeleteUser from "./ModalDeleteUser";
import TableUserPaginate from "./TableUserPaginate";

const ManageUser = (props) => {
  const LIMIT_USER = 3;
  const [showModalCreateUser, setShowModalCreateUser] = useState(false);
  const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
  const [showModalDeleteUser, setShowModalDeleteUser] = useState(false);
  const [dataUpdate, setDataUpdate] = useState([]);
  const [dataDelete, setDataDelete] = useState([]);
  const [listUsers, setListUsers] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const getListUser = async () => {
    let data = await getAllUser();
    if (data.EC === 0) {
      setListUsers(data.DT);
    }
  };
  const getListUserWithPaginate = async (page) => {
    let res = await getAllUserWithPaginate(page, LIMIT_USER);
    if (res.EC === 0) {
      console.log(res.DT);
      setListUsers(res.DT.users);
      setPageCount(res.DT.totalPages);
    }
  };

  const handleClickBtnUpdate = (user) => {
    setShowModalUpdateUser(true);
    setDataUpdate(user);
  };
  const handleClickBtnDelete = (user) => {
    setShowModalDeleteUser(true);
    setDataDelete(user);
  };

  const resetUpdateDate = () => {
    setDataUpdate({});
  };

  useEffect(() => {
    // getListUser();
    getListUserWithPaginate(1);
  }, []);

  return (
    <div>
      <div className="manage-user-container">
        <div className="title">Manage Users</div>
        <div className="users-content">
          <div className="btn-add-new">
            <button
              onClick={() => setShowModalCreateUser(true)}
              className="btn btn-primary"
            >
              <AiFillPlusCircle /> Add new users
            </button>
          </div>
          <div className="table-users-container">
            {" "}
            <TableUserPaginate
              handleClickBtnUpdate={handleClickBtnUpdate}
              handleClickBtnDelete={handleClickBtnDelete}
              listUsers={listUsers}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              getListUserWithPaginate={getListUserWithPaginate}
              pageCount={pageCount}
            />
          </div>
        </div>
        <ModalCreateUser
          show={showModalCreateUser}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          setShow={setShowModalCreateUser}
          getListUserWithPaginate={getListUserWithPaginate}
        />
        <ModalUpdateUser
          setShow={setShowModalUpdateUser}
          show={showModalUpdateUser}
          dataUpdate={dataUpdate}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          getListUserWithPaginate={getListUserWithPaginate}
          resetUpdateDate={resetUpdateDate}
        />
        <ModalDeleteUser
          setShow={setShowModalDeleteUser}
          show={showModalDeleteUser}
          dataDelete={dataDelete}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          getListUserWithPaginate={getListUserWithPaginate}
        />
      </div>
    </div>
  );
};

export default ManageUser;
