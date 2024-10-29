import api from "../utils/api";
//import apiNL from "../utils/apiNL";

const urlGetClaimsCountOnboardingStatus = "claims/count/onboarding/status";
const urlClaimsInsert = "claims/dashboard/insert";
export default class Dashboard {

    // Get Claims Count Onboarding Status
    static async getClaimsCountOnboardingStatus() {

        try {
            const res = await api.get(`${urlGetClaimsCountOnboardingStatus}`);
            if (res.status != 200) {
                return false;
            }
            return res.data;
        } catch (error) {
            console.dir(error);
            return false;
        }
    }
    //Registrar Alumno
    static async claimsDashboardInsert({ x_row_limit = 0 }) {

        try {
            let q = "";
            x_row_limit ? (q += `?x_row_limit=${x_row_limit}`) : 0;
            const res = await api.post(`${urlClaimsInsert}/${q}`);
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
