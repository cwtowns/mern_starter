import { prop, getModelForClass } from '@typegoose/typegoose';


class MovieClass {
    @prop()
    public name: string = "";
    @prop()
    public time: string[] = [];
    @prop()
    public rating: number = -1;
  }
  

export const MovieModel = getModelForClass(MovieClass, { schemaOptions: { timestamps: true } });
