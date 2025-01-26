export class SuccessHandler {
    public successResponse<T>(
        data: T,
        statusCode: number
    ) {
        return {
            statusCode,
            headers: {
                // Required for CORS support to work
                'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify({
                statusCode,
                error: false,
                data,
            }),
        };
    }
}
