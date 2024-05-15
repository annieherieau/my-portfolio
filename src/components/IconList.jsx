export default function IconList({ data }) {
  
  return (
    <div className="icon-list">
      {data &&
        data.map((item) => (
          <img className="img-icon" src={item.attributes.url} key={item.id} title={item.attributes.name}/>
        ))}
    </div>
  );
}
