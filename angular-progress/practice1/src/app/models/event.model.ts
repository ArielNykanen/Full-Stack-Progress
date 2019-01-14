import { ClassModel } from "./class.model";

export interface EventModel {
    name: string;
    date: string;
    duration: string;
    eventImageUrl: string,
    classes: ClassModel[];
}