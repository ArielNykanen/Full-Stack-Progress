export class ProjectModel {
    constructor(private name :string, private description: string, private goal: number, 
        private balance: number = 0) {}