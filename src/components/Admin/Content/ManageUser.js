import ModalCreateUser from "./ModalCreateUser";
import "./ManageUser.scss";
import { AiFillPlusCircle } from "react-icons/ai";
import { useState } from "react";
import TableUser from "./TableUser";

const ManageUser = (props) => {
  const [showModalCreateUser, setShowModalCreateUser] = useState(false);
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
            <TableUser />
          </div>
        </div>
        <ModalCreateUser
          show={showModalCreateUser}
          setShow={setShowModalCreateUser}
        />
      </div>
    </div>
  );
};

export default ManageUser;
