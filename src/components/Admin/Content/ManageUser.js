import ModalCreateUser from "./ModalCreateUser";
import "./ManageUser.scss";
import { AiFillPlusCircle } from "react-icons/ai";
import { useEffect, useState } from "react";
import { getAllUser } from "../../../services/apiService";
import TableUser from "./TableUser";
import ModalUpdateUser from "./ModalUpdateUser";

const ManageUser = (props) => {
  const [showModalCreateUser, setShowModalCreateUser] = useState(false);
  const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
  const [dataUpdate, setDataUpdate] = useState([]);
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
    console.log(user);
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
        />
      </div>
    </div>
  );
};

export default ManageUser;
