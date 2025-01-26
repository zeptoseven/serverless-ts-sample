import { ValidationErrors } from "../types/utils.types";

export class ErrorHandler {

    public handleError(statusCode: number, message: string) {
        return {
            statusCode,
            headers: {
                // Required for CORS support to work
                'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify({
                statusCode,
                error: true,
                message,
            }),
        };
    }

    public handleValidationError(validationErrors: ValidationErrors) {
        const errors: string[] = [];
        for (const item of validationErrors.details) {
            errors.push(item.message);
        }
        return {
            statusCode: 400,
            headers: {
                // Required for CORS support to work
                'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify({
                statusCode: 400,
                error: true,
                message: errors[0],
            }),
        };
    }
}
