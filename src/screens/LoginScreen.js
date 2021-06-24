import { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { UserContext } from "../contexts/UsersContext";

const LoginScreen = () => {
  const { loginUser } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const loginuser = {
      email,
      password,
    };

    loginUser(loginuser);
  }

  return (
    <div
      style={{
        height: "80vh",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "50%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Form
        onSubmit={handleSubmit}
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          justifyContent: "center",
          alignItems: "center",
          gridGap: 20,
          padding: "20px",
          border: "1px solid #36cfc9",
        }}
      >
        <h1 className="text-center">LOG IN</h1>
        <Form.Control
          placeholder="enter email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Form.Control
          placeholder="enter password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit">LOGIN</Button>
      </Form>
    </div>
  );
};

export default LoginScreen;
