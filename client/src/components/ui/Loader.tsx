import classes from "./Loader.module.css";

const Loader: React.FC = () => {
  return (
    <div className={classes.container}>
      <div className={classes.loader}></div>
      <p>Loading Messages...</p>
    </div>
  );
};

export default Loader;
