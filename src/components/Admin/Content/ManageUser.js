import ModalCreateUser from "./ModalCreateUser";
import "./ManageUser.scss";
import { AiFillPlusCircle } from "react-icons/ai";
import { useEffect, useState } from "react";
import { getAllUser } from "../../../services/apiService";
import TableUser from "./TableUser";
import ModalUpdateUser from "./ModalUpdateUser";
import ModalDeleteUser from "./ModalDeleteUser";

const ManageUser = (props) => {
  const [showModalCreateUser, setShowModalCreateUser] = useState(false);
  const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
  const [showModalDeleteUser, setShowModalDeleteUser] = useState(false);
  const [dataUpdate, setDataUpdate] = useState([]);
  const [dataDelete, setDataDelete] = useState([]);
  const [listUsers, setListUsers] = useState([]);

  const getListUser = async () => {
    let data = await getAllUser();
    if (data.EC === 0) {
      setListUsers(data.DT);
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
    getListUser();
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
            <TableUser
              handleClickBtnUpdate={handleClickBtnUpdate}
              handleClickBtnDelete={handleClickBtnDelete}
              listUsers={listUsers}
            />
          </div>
        </div>
        <ModalCreateUser
          show={showModalCreateUser}
          setShow={setShowModalCreateUser}
          getListUser={getListUser}
        />
        <ModalUpdateUser
          setShow={setShowModalUpdateUser}
          show={showModalUpdateUser}
          dataUpdate={dataUpdate}
          getListUser={getListUser}
          resetUpdateDate={resetUpdateDate}
        />
        <ModalDeleteUser
          setShow={setShowModalDeleteUser}
          show={showModalDeleteUser}
          dataDelete={dataDelete}
          getListUser={getListUser}
        />
      </div>
    </div>
  );
};

export default ManageUser;
