import relayService from "../../axios/hook";
import { useNavigate } from 'react-router-dom';
import { toast } from "react-hot-toast";

const useSingUp = () => {

    const navigate = useNavigate();
    
    const userSingUp = async (initialState) => {
        try{
            const { firstName, lastName, email, password, role } = initialState;

            const response = await relayService({
                url: '/signup',
                method: 'POST',
                data: {
                    firstName,
                    lastName,
                    email,
                    password,
                    role
                }
            });

            if(response?.status === 200) {
                console.log("user created success", response);
                navigate('/login');
                return response.data;
            }
        } catch (err) {

        }
    }
      
    return [{ userSingUp }];
}

export default useSingUp;