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

// TODO: Create Order Email for Books, Donations and Store Purchases
// TODO: Create Order Email for Store Purchases when the product is shipped and any other event from the prontify webhook
export const orderConfirmationEmailTemplate = (
	language: string,
	languageOptions: any,
	products: any[]
) => {
	return `
        <h1>
          ${
						language === languageOptions.english
							? "Order Confirmation - Pastor Gary Mack"
							: "Confirmación de pedido - Pastor Gary Mack"
					}
        </h1>

        <p>
          ${
						language === languageOptions.english
							? "Thank you for your order! Here are the details of your purchase:"
							: "¡Gracias por su pedido! Aquí están los detalles de su compra:"
					}
        </p>

        <ul>
          ${products
						.map(
							(product) => `
            <li><
              ${product.name} - ${product.quantity} x $${product.price}
            </li>
          `
						)
						.join("")}
        </ul>

        <p>
          ${
						language === languageOptions.english
							? "We appreciate your support!"
							: "¡Agradecemos su apoyo!"
					}
        </p>
  `;
};
