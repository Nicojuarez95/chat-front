import axios from "axios";

const AuthPage = (props) => {
    const onSubmit = (e) => {
      e.preventDefault();
      const { value } = e.target[0];
      axios.post(
        "https://chat-e3fi.onrender.com/authenticate",
        {username: value}
      )
      .then(r => props.onAuth({ ...r.data, secret: value }))
      .catch (e => console.log("error", e))
      
    };
  
    return (
      <div className="background">
        <form onSubmit={onSubmit} className="form-card">
          <div className="form-title">Holaa 👋</div>
  
          <div className="form-subtitle">Poné tu nombre para empezar</div>
  
          <div className="auth">
            <div className="auth-label">Nombre de usuario</div>
            <input className="auth-input" name="username" />
            <button className="auth-button" type="submit">
              Entrar
            </button>
          </div>
        </form>
      </div>
    );
  };
  
  export default AuthPage;