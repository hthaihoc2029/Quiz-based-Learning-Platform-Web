import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { IoCloudUpload } from "react-icons/io5";

const ModalCreateUser = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("USER");
  const [image, setImage] = useState("");
  const [previewImg, setPreviewImg] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleUploadImage = (event) => {
    if (event.target && event.target.files && event.target.files[0]) {
      setPreviewImg(URL.createObjectURL(event.target.files[0]));
      setImage(event.target.files[0]);
    }
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal
        className="modal-add-user"
        backdrop="static"
        size="xl"
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add new user</Modal.Title>
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
          <Button variant="primary" onClick={handleClose}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalCreateUser;
