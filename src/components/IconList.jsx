export default function IconList({ data }) {
  return (
    <div className="icon-list">
      {data &&
        data.map((item) => (
          <img className='img-icon' src={`assets/icons/${item.attributes.slug}.svg`} key={item.id} />
        ))}
    </div>
  );
}