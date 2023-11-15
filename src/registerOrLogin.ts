
type bodyfield = {
    register: boolean
    phoneNum: string,
    password: string
} 

const registerOrLogin = async (callObj:bodyfield) => {
    if (callObj.register) {
        try {
          const registerNewAccount = await fetch("/api/registernew", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              phoneNum : callObj.phoneNum,
              password: callObj.password
            }),
          });
  
          console.log(registerNewAccount);
        } catch (err) {
            
        }
      } else {
        //This means user is trying to Login
        try{
            const loginWithEmailandPassword = await fetch("/api/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  email: callObj.phoneNum,
                  password: callObj.password,
                }),
              });
              console.log()
        }catch(err){

        }
      }
      return ''
}

export default registerOrLogin