import { UserModel } from "../models/user_model";
//esta funcion sirve para filtrar los uusuarios por nombre o email, se le pasa la lista de usuarios y el string del input a buscar
export const filterUsers = (
  users: UserModel[],
  searchTerm: string
): UserModel[] => {
  return users.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.email.toLowerCase().includes(searchTerm.toLowerCase())
  );
  //realiza la busqueda o el filtro por nombre o email, si coincide alguno, lo mostrara
};
