/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { VolunteerService } from "../volunteer.service";
import { VolunteerCreateInput } from "./VolunteerCreateInput";
import { Volunteer } from "./Volunteer";
import { VolunteerFindManyArgs } from "./VolunteerFindManyArgs";
import { VolunteerWhereUniqueInput } from "./VolunteerWhereUniqueInput";
import { VolunteerUpdateInput } from "./VolunteerUpdateInput";

export class VolunteerControllerBase {
  constructor(protected readonly service: VolunteerService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Volunteer })
  async createVolunteer(
    @common.Body() data: VolunteerCreateInput
  ): Promise<Volunteer> {
    return await this.service.createVolunteer({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Volunteer] })
  @ApiNestedQuery(VolunteerFindManyArgs)
  async volunteers(@common.Req() request: Request): Promise<Volunteer[]> {
    const args = plainToClass(VolunteerFindManyArgs, request.query);
    return this.service.volunteers({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Volunteer })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async volunteer(
    @common.Param() params: VolunteerWhereUniqueInput
  ): Promise<Volunteer | null> {
    const result = await this.service.volunteer({
      where: params,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Volunteer })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateVolunteer(
    @common.Param() params: VolunteerWhereUniqueInput,
    @common.Body() data: VolunteerUpdateInput
  ): Promise<Volunteer | null> {
    try {
      return await this.service.updateVolunteer({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Volunteer })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteVolunteer(
    @common.Param() params: VolunteerWhereUniqueInput
  ): Promise<Volunteer | null> {
    try {
      return await this.service.deleteVolunteer({
        where: params,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
