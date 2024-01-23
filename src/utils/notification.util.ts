import { ToastOptions, toast } from 'react-toastify';

const toastConfig: ToastOptions = {
  position: "bottom-right",
  autoClose: 4000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: false,
  theme: "light",
}

const success = (message: string, options?: ToastOptions): void => {
  toast.success(message, { ...toastConfig, ...options })
}

const notificationUtil = { success }

export default notificationUtil;