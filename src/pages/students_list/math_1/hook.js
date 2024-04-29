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
        console.log("initialValues", initialValues);
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

    const deleteStudent_M1 = async (id) => {
        try{
            const response = await relayService({
                url: `/delete_m1_student/${id}`,
                method: 'DELETE'
            })

            if(response && response.status === 200){
                return response.data;
            }
        } catch (error) {
            toast.error(error.message);
        }
    }

    const editStudent_M1 = async (_id, initialValues) => {
        try{
            const response = relayService({
                url: `/update_m1_student/${_id}`,
                method: 'PUT',
                data: initialValues
            })
console.log("response", response);
            if(response){
                return response;
            }
        } catch (error) {
            toast.error(error.message);
        }
    }

    const getStudentById_M1 = async (_id) => {
        console.log("id", _id);
        try {
            const response = await relayService({
                url: `/get_m1_student/${_id}`,
                method: 'GET'
            });
    
            if (response && response.status === 200) {
                return response.data;
            }
        } catch (error) {
            console.error(error.message);
            toast.error("An error occurred while fetching student data.");
            throw error; // Re-throwing the error to handle it elsewhere if necessary
        }
    }
    

    return[{ getStudentListM1, AddStudents_M1, deleteStudent_M1, editStudent_M1, getStudentById_M1 }];
}

export default useStudentListM1;