type bodyfield = {
  register: boolean;
  email: string;
  password: string;
};

const registerOrLogin = async (callObj: bodyfield) => {
  if (callObj.register) {
    const registerNewAccount = await fetch("/api/registernew", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: callObj.email,
        password: callObj.password,
      }),
    });

    const data = await registerNewAccount.json();
    return {
      status: registerNewAccount.status,
      data,
    };
  } else {
    //This means user is trying to Login
    const loginWithEmailandPassword = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: callObj.email,
        password: callObj.password,
      }),
    });
    const data = await loginWithEmailandPassword.json();
    return {
      status: loginWithEmailandPassword.status,
      data,
    };
  }
};

export default registerOrLogin;
