import axios from 'axios';



export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization:'Client-ID xP94jvVDXvD6VpMwCSv53tzvdA5b5Q6CmPIuujjY6r4'
    }
})
