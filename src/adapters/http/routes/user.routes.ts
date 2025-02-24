import { FastifyInstance } from "fastify";
import { container } from "tsyringe";
import UserController from "@adapters/http/controllers/UserController";

export async function userRoutes(userRoute: FastifyInstance) {
   const userController = container.resolve(UserController);

   userRoute.post("/Users", userController.create.bind(userController));
   userRoute.get("/Users/:id", userController.findById.bind(userController));
   userRoute.get("/Users", userController.getList.bind(userController));
   userRoute.delete("/Users/:id", userController.delete.bind(userController));
}
