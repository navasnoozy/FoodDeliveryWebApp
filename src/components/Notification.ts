import toast from "react-hot-toast";

const notification = (message: string) => {
  toast.success(message, {
    style: {
      border: "1px solid #f44336",
      padding: "16px",
      color: "#f44336",
    },
    iconTheme: {
      primary: "#4CAF50",
      secondary: "#FFFAEE",
    },
  });
};

export default notification;
