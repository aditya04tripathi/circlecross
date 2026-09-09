import { Controller, Get } from "@nestjs/common";
@Controller("health")
export class AppController {
  @Get("live")
  live() {
    return { status: "ok" };
  }

  @Get("ready")
  ready() {
    return { status: "unavailable", checks: { scaffold: "pending" } };
  }
}
