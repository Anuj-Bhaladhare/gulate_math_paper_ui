import toast from "react-hot-toast";
import relayService from "../../../axios/hook";

const useStudentListM1 = () => {

    const getStudentListM1 = async () => {
        try{
            const response = await relayService({
                url: '/get_all_m1_student',
                method: 'GET'
            });
            if (response.status === 200) {
                return response.data;
            }
        } catch (error) {
            toast.error(error.message);
        }
    }

    const AddStudents_M1 = async (initialValues) => {
        try{
            const response = await relayService({
                url: '/add_m1_student',
                method: 'POST',
                data: initialValues
            });
            if (response.status === 200) {
                return response.data;
            }
        } catch (error) {
            toast.error(error.message);
        }
    }

    return[{ getStudentListM1 }];
}

export default useStudentListM1;