import { Type, applyDecorators } from "@nestjs/common";
import { ApiExtraModels, ApiOkResponse, getSchemaPath } from "@nestjs/swagger";
import { PageDto } from "./pagination.dto";

export const ApiPaginatedRes = <TModel extends Type>(model: TModel) => {
  console.log(model);
  return applyDecorators(
    ApiExtraModels(PageDto),
    ApiExtraModels(model),
    ApiOkResponse({
      description: "成功返回数据列表",
      schema: {
        title: "Paginated" + model.name + "Res",
        allOf: [
          { $ref: getSchemaPath(PageDto) },
          {
            properties: {
              data: {
                type: "array",
                items: { $ref: getSchemaPath(model) },
              },
            },
          },
        ],
      },
    }),
  );
};
