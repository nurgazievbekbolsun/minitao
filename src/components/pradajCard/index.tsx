import "./index.scss";
// @ts-ignore
const PradajCard = ({el}) => {
  const  {image,title, description}= el
  return (
    <div className="pradaj">
      <h2>{title}</h2>
      <p>{description}</p>
      <img src={image} alt="" />
    </div>
  );
}

export default PradajCard