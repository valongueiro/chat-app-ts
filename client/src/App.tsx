import MessagesContextProvider from "./context/messages-context";
import Header from "./components/header/Header";
import Container from "./components/layout/Container";
import NavBar from "./components/navbar/NavBar";
import Chat from "./components/chat/Chat";
import classes from "./App.module.css";

function App() {
  return (
    <div className={classes.container}>
      <Header />
      <MessagesContextProvider>
        <Container>
          <NavBar />
          <Chat />
        </Container>
      </MessagesContextProvider>
    </div>
  );
}

export default App;
