import axios from "axios";

const RESIDENTIAL_API_BASE_URL = 'http://localhost:8080/residential/'

class ResidentialService{
    getResidentials(){
        return axios.get(RESIDENTIAL_API_BASE_URL + 'getAll')
    }
    createResidential(){}

}

export default new ResidentialService()