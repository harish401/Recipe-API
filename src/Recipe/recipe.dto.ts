import { ApiProperty } from '@nestjs/swagger';

export class RecipeDto {
  @ApiProperty()
  readonly title: string;

  @ApiProperty()
  readonly directions: string[];

  @ApiProperty()
  readonly ingredients: string[];

  @ApiProperty()
  readonly language: string;

  @ApiProperty()
  readonly source: string;

  @ApiProperty()
  readonly tags: string[];

  @ApiProperty()
  readonly url: string;
  @ApiProperty() // Add userId property
  readonly userId: string;
  

}
