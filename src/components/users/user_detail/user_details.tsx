import React from "react";
import { UserModel } from "../../../core/models/user_model";
import "./user_details.css";

interface UserDetailsProps {
  user: UserModel;
}

const UserDetails: React.FC<UserDetailsProps> = ({ user }) => {
  return (
    <div className="user-details">
      <img src={user.urlPhoto} alt={`Foto de ${user.name}`} />
      <h3>{user.name}</h3>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Teléfono:</strong> {user.phone}
      </p>
      <p>
        <strong>Dirección:</strong> {user.address}
      </p>
    </div>
  );
};

export default UserDetails;