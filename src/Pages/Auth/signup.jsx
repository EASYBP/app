import { EmailOutlined, LockOutlined, Person } from "@mui/icons-material";
import { TextField, Button } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { notifier } from "../../redux/notifSlice";
import { connexion } from "../../redux/userSlice";
import SendRequest from "../../Services/requests";

const SignUp = () => {
  // Initialisation
  const dis = useDispatch();
  const [isLaoding, setisLoading] = useState(false);
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [confirm, setconfirm] = useState();
  const [name, setnom] = useState();

  // Functions
  const SendNotif = (message, type) => {
    dis(
      notifier({
        message,
        type,
      })
    );
  };
  const Check = () => {
    if (password !== confirm) {
      SendNotif("Mot de passe différent", "error");
      return false;
    }
    return true;
  };
  const Submit = (event) => {
    event.preventDefault();
    if (Check()) {
      setisLoading(true);
      SendRequest({
        method: "post",
        endpoint: "/auth/signup",
        body: { name, email, password },
        success: (res) =>
          dis(
            connexion({
              id: res.data._id,
              name: res.data.name,
              email: res.data.email,
            })
          ),
        failed: (res) => SendNotif("L'email existe déjà", "error"),
        end: () => setisLoading(false),
      });
    }
  };
  return (
    <form className="grow flex flex-col justify-center" onSubmit={Submit}>
      <div className="px-4 py-10">
        <p className="text-accent">veuillez vous incrire pour continuer</p>
        <h1 className="titre1">Création de compte</h1>
        <hr className="my-5" />

        <div className="py-3">
          <TextField
            className="mt-3"
            fullWidth
            value={name}
            onChange={(v) => setnom(v.target.value)}
            label="Nom"
            required
            InputProps={{
              endAdornment: <Person className="text-gray-600" />,
            }}
          />
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
          <TextField
            className="mt-3"
            type={"password"}
            fullWidth
            required
            value={confirm}
            onChange={(v) => setconfirm(v.target.value)}
            label="Confirmation du mot de passe"
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
          {isLaoding ? "Traitement" : "Inscription"}
        </Button>
        <div className="py-3"></div>
        <Link to={"/auth/login"}>
          <span>J'ai un compte !</span>
        </Link>
      </div>
    </form>
  );
};

export default SignUp;
