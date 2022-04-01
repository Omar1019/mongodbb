import {Schema, model} from "mongoose";

const TaskSchema = Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
            unique: true
        },

        


        done: {
            type: Boolean,
            default: false,
        },



          dinero:{
            type: Number
          }


    },
    {
        timestamps: true,
        versionKey: false,
    }
);

export default model("Task", TaskSchema);