import relayService from "./../../axios/hook";

const useUserDetails = () => {
    const getUserDetails = async (email) => {
        console.log("email", email);
        try {
            const response = await relayService({
                url: "/getuser",
                method: "GET",
                params: {
                    email: email
                }
            });
            console.log("response", response);
            if (response.status === 200) {
                return response.data;
            }
        } catch (error) {
            console.log("Error occurred in getting user details: ", error);
        }
    };

    return [{ getUserDetails }];
};

export default useUserDetails;
