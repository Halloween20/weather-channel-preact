import "./WCContent.css";

export const WCContent = ({ message }) => {
  return (
    <div className={"WCContent"}>
      <div className={"main"}>{message}</div>
    </div>
  );
};
