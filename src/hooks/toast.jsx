import { toast } from "react-toastify";

const useToast = () => {
	function toastError(msg) {
		toast.error(msg, {
			position: "bottom-right",
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});
	}

	function toastSuccess(msg) {
		toast.success(msg, {
			position: "bottom-right",
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});
	}
	return { toastError, toastSuccess };
};

export default useToast;
