import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Toast = ({ message }) => {
  const notify = () => {
    toast.success(message, {
      position: 'bottom-right',
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
  }

  return (
    <div
      onClick={notify}
      className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded cursor-pointer"
    >
      {message}
    </div>
  )
}

export default Toast
