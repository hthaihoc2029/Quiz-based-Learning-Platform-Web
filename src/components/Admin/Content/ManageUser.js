import ModalCreateUser from "./ModalCreateUser";
import "./ManageUser.scss";
import { AiFillPlusCircle } from "react-icons/ai";
import { useEffect, useState } from "react";
import { getAllUser } from "../../../services/apiService";
import TableUser from "./TableUser";

const ManageUser = (props) => {
  const [showModalCreateUser, setShowModalCreateUser] = useState(false);
  const [listUsers, setListUsers] = useState([]);
  const getListUser = async () => {
    let data = await getAllUser();
    if (data.EC === 0) {
      setListUsers(data.DT);
    }
  };

  //   component DID mount
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
            <TableUser listUsers={listUsers} />
          </div>
        </div>
        <ModalCreateUser
          show={showModalCreateUser}
          setShow={setShowModalCreateUser}
          getListUser={getListUser}
        />
      </div>
    </div>
  );
};

export default ManageUser;
