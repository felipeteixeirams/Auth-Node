import { FastifyInstance } from "fastify";
import { container } from "tsyringe";
import UserController from "@adapters/http/controllers/UserController";

export async function userRoutes(userRoute: FastifyInstance) {
   const userController = container.resolve(UserController);

   userRoute.post("/users", userController.create.bind(userController));
   userRoute.get("/users/:id", userController.findById.bind(userController));
   userRoute.get("/users", userController.getList.bind(userController));
   userRoute.delete("/users/:id", userController.delete.bind(userController));
}
