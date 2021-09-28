import classes from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>1 Day Chat App</h1>
      <p>All messages will be deleted at every 00:00 UTC</p>
    </div>
  );
};

export default Header;
