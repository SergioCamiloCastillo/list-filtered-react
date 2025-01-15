import { useMemo, useState } from "react";
import "./App.css";
import SearchBar from "./components/common/search_common/search_bar";
import UserList from "./components/users/user_list/user_list";
import { filterUsers } from "./core/usecases/filter_users_usecase";
import { UserModel } from "./core/models/user_model";
import UserDetails from "./components/users/user_detail/user_details";

function App() {
  const [searchUser, setSearchUser] = useState("");
  const [selectedUser, setSelectedUser] = useState<UserModel | null>(null);

  const filteredUsers = useMemo(
    () => filterUsers(usersData, searchUser),
    [searchUser]
  );

  return (
    <div className="app-container">
      <div
        className={`content-container ${selectedUser ? "shrinked" : "expanded"}`}
      >
        <SearchBar handleSearch={setSearchUser} />
        {filteredUsers.length === 0 ? (
          <p className="no-users">No se encontraron usuarios</p>
        ) : (
          <UserList users={filteredUsers} handleSelectUser={setSelectedUser} />
        )}
      </div>
      {selectedUser && (
        <div className="details-container">
          <UserDetails user={selectedUser} />
          <button
            className="close-button"
            onClick={() => setSelectedUser(null)}
          >
            Cerrar
          </button>
        </div>
      )}
    </div>
  );
}

const usersData: UserModel[] = [
  {
    id: 1,
    name: "Pibe Valderrama",
    email: "pibevalderrama@gmail.com",
    phone: "(601) 456 333 222",
    address: "Cra 26 sur#67-89",
    urlPhoto: "https://www.ecured.cu/images/0/0f/Pibe_Valderrama.jpg",
  },
  {
    id: 2,
    name: "Rocio Durcal",
    email: "jane@example.com",
    phone: "3132343233",
    address: "Dg 45#67-89",
    urlPhoto:
      "https://hips.hearstapps.com/hmg-prod/images/rocio-durcal-1589297294.jpg?resize=980:*",
  },
  {
    id: 3,
    name: "Amparo Gritales",
    email: "amparo@hotmail.com",
    phone: "3112212222",
    address: "Cra 67#64-45",
    urlPhoto:
      "https://upload.wikimedia.org/wikipedia/commons/5/53/Amparo_Grisales_2023_01.jpg",
  },
  {
    id: 4,
    name: "Rigoberto Uran",
    email: "rigo@outlook.com",
    phone: "3112212222",
    address: "Cra 67#64-45",
    urlPhoto:
      "https://efbt585jris.exactdn.com/wp-content/uploads/2021/07/20210728_022802.jpg?strip=all&lossy=1&sharp=1&ssl=1",
  },
  {
    id: 5,
    name: "Marie Curie",
    email: "mariecurie@gmail.com",
    phone: "(601) 543 45 44",
    address: "Cll 98#5-56",
    urlPhoto:
      "https://upload.wikimedia.org/wikipedia/commons/5/51/Marie_Curie_%281900%29.jpg",
  },
  {
    id: 6,
    name: "Camilo Sesto",
    email: "camilo@gmail.com",
    phone: "(601) 464 46 46",
    address: "Cll 45#21-56",
    urlPhoto:
      "https://img.rtve.es/i/retrato-camilo-sesto-8-cosas-siempre-quisiste-saber-del-famoso-cantante_1662469877676.jpg",
  },
];

export default App;