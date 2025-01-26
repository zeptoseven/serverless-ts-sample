import Joi from 'joi';

export class UserValidation {
    public createUserValidation<T>(data: T) {
        const schema = Joi.object({
            firstname: Joi.string()
                .min(3)
                .max(30)
                .required(),
            lastname: Joi.string()
                .min(3)
                .max(30)
                .required(),
            password: Joi.string()
                .min(8)
                .required(),
            email: Joi.string()
                .email({ minDomainSegments: 2 })
                .required()
        });

        return schema.validate(data);
    }
}