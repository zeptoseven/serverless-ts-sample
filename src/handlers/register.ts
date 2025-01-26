import { APIGatewayProxyEvent } from 'aws-lambda';

import { commonMiddleware } from "../../libs/commonMiddleware";
import { UserController } from "../../controllers/user.controller";

const userController = new UserController();

export const handler = commonMiddleware.handler(async (event: APIGatewayProxyEvent, context, callback) => {
  return userController.register(event, context, callback);
});