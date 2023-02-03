import FetchHelper from "../Helper/FetchHelper";
import URLHelper from "../Helper/URLHelper";
export const fetchOnGoing = async () => {
    let authen = localStorage.getItem("token");
    let retour = await (FetchHelper.getData(URLHelper.urlgen("encheres/onGoing"), { 'authorization': authen }));
    console.log(retour);
    
    return retour;
}