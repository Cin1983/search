
import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers: {
        Authorization: "Client-ID v4uYrcOlgUnhQnjb9XMeY4ZmXEUlXe7tbR_qe3j_1iI"
      }
})