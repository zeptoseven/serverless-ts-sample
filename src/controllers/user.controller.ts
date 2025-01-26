import { Handler } from "aws-lambda";

import { UserValidation } from "../validations/user.validation";
import { SendEmail } from "../utils/SendEmail";
import { SuccessHandler } from "../utils/SuccessHandler";
import { ErrorHandler } from "../utils/Errorhandler";

export class UserController {
    private userValidation: UserValidation;
    private sendEmail: SendEmail;
    private successHandler: SuccessHandler;
    private errorHandler: ErrorHandler;

    constructor() {
        this.userValidation = new UserValidation();
        this.sendEmail = new SendEmail();
        this.successHandler = new SuccessHandler();
        this.errorHandler = new ErrorHandler();
    }

    public register: Handler = async (event) => {
        try {
            const body = event.body;
            const { error } = this.userValidation.createUserValidation(body)
            if (error) {
                return this.errorHandler.handleValidationError(error);
            }
            const { firstname, lastname, password, email } = body;

            const randomNum = Math.random() * 9000;
            const status = Math.floor(1000 + randomNum);

            const hash = hashSync(password, 10);

            const options = {
                to: email?.toString(),
                from: {
                    name: "Sinque",
                    email: 'parthipan@efuturesworld.com'
                },
                subject: 'Sinque Verification',
                text: 'Activation Code',
                html: `<strong>${status}</strong>`,
            }

            const userExist = await this.userService.findUser(email);
            if (userExist) {
                if (userExist?.status == 1) {
                    return this.errorHandler.handleError(409, "Email already exits!");
                } else {
                    const updated = await this.userService.updateUnverifiedUser(userExist?.id, firstname, lastname, email, hash, status);
                    if (updated) {
                        const updatedUser = {
                            id: userExist?.id,
                            firstname: userExist?.firstname,
                            lastname: userExist?.lastname,
                            email: userExist?.email,
                            role: userExist?.role,
                        }
                        await this.sendEmail.send(options);
                        return this.successHandler.successResponse({ message: "Unverified User!", user: updatedUser, verfied: false }, 200);
                    }
                }
            }

            try {
                const user = await this.userService.createUser(firstname, lastname, email, hash, status);
                const createdUser = {
                    id: user?.id,
                    firstname: user?.firstname,
                    lastname: user?.lastname,
                    email: user?.email,
                    role: user?.role,
                }
                await this.sendEmail.send(options);
                return this.successHandler.successResponse(createdUser, 201);
            } catch (error) {
                console.error("MAIL SENDING ERROR", error);
            }

        } catch (error) {
            return this.errorHandler.handleError(500, "Internal server Error!");
        }
    };
