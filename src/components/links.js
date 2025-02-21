const Item = ({ name, link }) => {
  return (
    <a href={link}>
      <li>{name}</li>
    </a>
  );
};

export const NavLinks = () => {
  const links = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Services", link: "#services" },
    { name: "Tours", link: "#tours" },
  ];
  return (
    <ul className="navList">
      {links.map((item) => {
        return <Item key={item.name} name={item.name} link={item.link} />;
      })}
    </ul>
  );
};
