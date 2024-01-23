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

const info = (message: string, options?: ToastOptions): void => {
  toast.info(message, { ...toastConfig, ...options })
}

const success = (message: string, options?: ToastOptions): void => {
  toast.success(message, { ...toastConfig, ...options })
}

const error = (message: string, options?: ToastOptions): void => {
  toast.error(message, { ...toastConfig, ...options })
}

const warning = (message: string, options?: ToastOptions): void => {
  toast.warning(message, { ...toastConfig, ...options })
}

const notificationUtil = { info, success, error, warning }

export default notificationUtil;