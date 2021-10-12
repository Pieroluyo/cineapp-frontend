import axios from "axios";

export const sining = async (user,password) => {
    return await axios.post('http://localhost:3030/api/usuario/singin', {
        user: user,
        password: password
      });
}
