export const emailCodeConfirmationTemplate = (
	language: string,
	languageOptions: any,
	code: string
) => {
	return `
        <h1>
          ${
						language === languageOptions.english
							? "Verification Code for Pastor Gary Mack login"
							: "Código de verificación para ingresar a Pastor Gary Mack"
					}
        </h1>

        <p>
          ${
						language === languageOptions.english
							? "Your verification code is:"
							: "Tu código de verificación es:"
					}
        </p>

        <div
          style="
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #efefef;
            padding: 1rem;
            border-radius: 0.5rem;
            font-size: 20px;
          ">
          <p>${code}</p>
        </div>

        <p>
          ${
						language === languageOptions.english
							? "If you did not request this code, please check your email password is not compromised."
							: "Si no solicitaste este código, por favor verifica que tu contraseña de correo no haya sido comprometida."
					}
        </p>

        <p>
          ${
						language === languageOptions.english
							? "Thank you for using Pastor Gary Mack."
							: "Gracias por usar Pastor Gary Mack."
					}
        </p>`;
};

export const loginConfirmationEmailTemplate = (
  language: string,
  languageOptions: any
) => {
  return `
        <h1>
          ${
            language === languageOptions.english
              ? "Login Registered - Welcome to Pastor Gary Mack"
              : "Ingreso registrado - Bienvenido a Pastor Gary Mack"
          }
        </h1>

        <p>
          ${
            language === languageOptions.english
              ? "You have successfully logged in to Pastor Gary Mack. If this was not you, please verify your email password. Your account may be compromised."
              : "Has iniciado sesión en Pastor Gary Mack. Si no es usted, por favor verifique su contraseña de correo. Su cuenta puede estar comprometida."
          }
        </p>

        <p>
          ${
            language === languageOptions.english
              ? "Thank you for using Pastor Gary Mack."
              : "Gracias por usar Pastor Gary Mack."
          }
        </p>`;
};