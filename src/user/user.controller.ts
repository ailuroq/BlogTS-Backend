import { Controller, Request, Post, UseGuards, Get, Req, Body, Param, HttpCode, Res, HttpStatus } from "@nestjs/common";
import { LocalAuthGuard } from "../auth/guards/local-auth.guard";
import { AuthService } from "../auth/auth.service";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard";
import { UsersService } from "./users.service";
import { AuthUser } from "../common/decorators/auth-user.decorator";
import { User } from "./user.entity";
import { CreateUserDto } from "./dto/create-user.dto";
import {Response} from 'express'


@Controller()
export class UserController {
  constructor(
    private authService: AuthService,
    private userService: UsersService
  ) {
  }

  @Post("/:id")
  async create(@Body() userDto: CreateUserDto, @Res() res: Response) {
    if (await this.userService.findOne(userDto.username)) {
      return res.status(HttpStatus.BAD_REQUEST).send();
    }
    userDto.isAdmin = false;
    await this.userService.create(userDto);
    return res.status(HttpStatus.OK).send();
  }

  @UseGuards(LocalAuthGuard)
  @Post("login")
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get("profile/")
  getProfile(@AuthUser() user: User) {
    return user;
  }

  @UseGuards(JwtAuthGuard)
  @Post("refresh")
  async refresh(@AuthUser() user: User) {
    const newUser = await this.userService.findOne(user.username);
    return this.authService.login(newUser);
  }

  @Get()
  async getAllUserPosts() {
    return this.userService.getArticlesOfUser("ailuroq");
  }


}