import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { IoCloudUpload } from "react-icons/io5";
import { toast } from "react-toastify";
import { putUpdateUser } from "../../../services/apiService";
import _ from "lodash";

const ModalUpdateUser = (props) => {
  const { show, setShow, dataUpdate } = props;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("USER");
  const [image, setImage] = useState("");
  const [previewImg, setPreviewImg] = useState("");

  useEffect(() => {
    if (!_.isEmpty(dataUpdate)) {
      setEmail(dataUpdate.email);
      //   setPassword(dataUpdate.password);
      setUsername(dataUpdate.username);
      setRole(dataUpdate.role);
      if (dataUpdate.image)
        setPreviewImg(`data:image/png;base64,${dataUpdate.image}`);
      setImage("");
    }

    console.log("run useeffect");
  }, [dataUpdate]);

  const handleSubmitUpdateUser = async () => {
    let data = await putUpdateUser(dataUpdate.id, username, role, image);

    if (data && data.EC === 0) {
      toast.success(data.EM);
      handleClose();
      await props.getListUser();
    }

    if (data && data.EC !== 0) {
      toast.error(data.EM);
    }
  };
  const handleClose = () => {
    setShow(false);
    setEmail("");
    setPassword("");
    setUsername("");
    setRole("USER");
    setImage("");
    setPreviewImg("");
    props.resetUpdateDate();
  };
  //   const handleShow = () => setShow(true);
  const handleUploadImage = (event) => {
    if (event.target && event.target.files && event.target.files[0]) {
      setPreviewImg(URL.createObjectURL(event.target.files[0]));
      setImage(event.target.files[0]);
    }
  };

  return (
    <>
      <Modal
        className="modal-add-user"
        backdrop="static"
        size="xl"
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update a user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Email</label>
              <input
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
                type="email"
                disabled
                className="form-control"
                value={email}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Password</label>
              <input
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
                disabled
                type="password"
                className="form-control"
                value={password}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Username</label>
              <input
                onChange={(event) => {
                  setUsername(event.target.value);
                }}
                type="text"
                className="form-control"
                value={username}
              />
            </div>
            <div className="col-md-4">
              <label className="form-label">Role</label>
              <select
                onChange={(event) => {
                  setRole(event.target.value);
                }}
                id="inputRole"
                className="form-select"
              >
                <option value="USER">USER</option>
                <option value="ADMIN">ADMIN</option>
              </select>
            </div>
            <div className="col-md-12">
              <label htmlFor="labelUpload" className="form-label label-upload">
                <IoCloudUpload />
                Upload Avatar
              </label>
              <input
                onChange={(event) => handleUploadImage(event)}
                id="labelUpload"
                type="file"
                hidden
              />
            </div>
            <div className="col-md-12 img-preview">
              {/* <span>Preview image</span> */}
              {previewImg ? (
                <img src={previewImg} alt="" />
              ) : (
                <span>Preview image</span>
              )}
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleSubmitUpdateUser()}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalUpdateUser;
