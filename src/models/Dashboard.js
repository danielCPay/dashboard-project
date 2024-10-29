import api from "../utils/api";
//import apiNL from "../utils/apiNL";

const urlBase = "claims/count/onboarding/status";

export default class Dashboard {

    // Obtiene el conteo de los registros 
    static async getClaimsCountOnboardingStatus() {

        try {
            const res = await api.get(`${urlBase}`);
            if (res.status != 200) {
                return false;
            }
            return res.data;
        } catch (error) {
            console.dir(error);
            return false;
        }
    }

}
