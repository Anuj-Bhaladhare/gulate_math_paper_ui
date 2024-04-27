
import relayService from "./../../axios/hook";

const useStudentList = () => {

    const getStudentList = async () => {
        try{
            const responce = await relayService({
                url: "",
                method: "GET",
                // data: {
                    
                // }
            }) 

            if(responce?.status === 200){
                console.log("responce student", responce);
            }
        } catch (error) {
            console.log("Error occure by geting the list of student ", error);
        }
    }

    return [{ getStudentList }];
}

export default useStudentList;