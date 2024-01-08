import { Toaster } from "react-hot-toast";
const ToasterProvider = () => {
  return (
    <div>
      <Toaster
        position="top-right"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          className: "",
          duration: 5000,
          style: {
            background: "#fff",
            color: "#000",
            fontSize: "16px",
            lineHeight: "24px",
            fontFamily: "Roboto",
          },
        }}
      />
    </div>
  );
};

export default ToasterProvider;
