import "./Avatar.css";

const Avatar = ({ nome }) => {
    const primeirasLetra = nome.split(" ").map(item => item[0]).join("");
  return <div className="avatar__root">{primeirasLetra}</div>;
};

export default Avatar;