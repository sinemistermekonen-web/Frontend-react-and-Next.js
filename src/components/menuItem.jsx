function MenuItem(props) {
  return (
    <article className="menu-item">
      <span className="category">{props.category}</span>

      <h3>{props.name}</h3>

      <p>{props.description}</p>

      <strong>{props.price} ETB</strong>
      
    </article>
  );
}

export default MenuItem;