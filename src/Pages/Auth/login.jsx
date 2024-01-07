import { EmailOutlined, LockOutlined } from "@mui/icons-material";
import { TextField, Button } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { notifier } from "../../redux/notifSlice";
import { connexion } from "../../redux/userSlice";
import SendRequest from "../../Services/requests";

const Login = () => {
  // Initialisation
  const dis = useDispatch();
  const [isLaoding, setisLoading] = useState(false);
  const [email, setemail] = useState();
  const [password, setpassword] = useState();

  // Functions
  const SendNotif = (message, type) => {
    dis(
      notifier({
        message,
        type,
      })
    );
  };

  const Submit = (event) => {
    event.preventDefault();

    setisLoading(true);
    SendRequest({
      method: "get",
      endpoint: "/auth/login",
      body: { email, password },
      success: (res) =>
        dis(
          connexion({
            id: res.data._id,
            name: res.data.name,
            email: res.data.email,
          })
        ),
      failed: (res) =>
        SendNotif(
          "Échec de connexion, email ou mot de passe invalide",
          "error"
        ),
      end: () => setisLoading(false),
    });
  };
  return (
    <form className="grow flex flex-col justify-center" onSubmit={Submit}>
      <div className="px-4 py-10">
        <p className="text-accent">Content de vous revoir</p>
        <h1 className="titre1">Se connecter à votre espace</h1>
        <hr className="my-5" />
        <div className="py-3">
          <TextField
            className="mt-3"
            fullWidth
            value={email}
            onChange={(v) => setemail(v.target.value)}
            label="Email"
            required
            InputProps={{
              endAdornment: <EmailOutlined className="text-gray-600" />,
            }}
          />
          <TextField
            className="mt-3"
            type={"password"}
            fullWidth
            required
            value={password}
            onChange={(v) => setpassword(v.target.value)}
            label="Mot de passe"
            InputProps={{
              endAdornment: <LockOutlined className="text-gray-600" />,
            }}
          />
        </div>
        <Button
          disabled={isLaoding}
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className="font-corps_1 mt-2 py-3"
        >
          {isLaoding ? "Traitement" : "Connexion"}
        </Button>
        <div className="py-3"></div>
        <Link to={"/auth/signup"}>
          <span>Je veux créer un compte !</span>
        </Link>
      </div>
    </form>
  );
};

export default Login;
