import React from "react";
import { FaUser, FaEnvelope, FaChevronRight } from "react-icons/fa";
import { UserModel } from "../../../core/models/user_model";
import "./user_list.css";

interface UserListProps {
  users: UserModel[];
  handleSelectUser: (user: UserModel) => void;
}

const UserList: React.FC<UserListProps> = ({ users, handleSelectUser }) => {
  return (
    <div className="user-list">
      {users.map((user) => (
        <div
          key={user.id}
          className="user-card"
          onClick={() => handleSelectUser(user)}
          role="button"
          tabIndex={0}
          aria-label={`Seleccionar usuario ${user.name}`}
          //Se usa aria-label para asegurar la accesibilidad para personas con discapacidad visual
        >
          <img
            src={user.urlPhoto}
            alt={`Foto de ${user.name}`}
            className="user-photo"
          />
          <div className="user-info">
            <h3 className="user-name">
              <FaUser style={{ marginRight: "8px" }} /> {user.name}
            </h3>
            <p className="user-email">
              <FaEnvelope style={{ marginRight: "8px" }} /> {user.email}
            </p>
          </div>
          <FaChevronRight className="icon-arrow" />
        </div>
      ))}
    </div>
  );
};

export default UserList;
