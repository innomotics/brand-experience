export class Item {
    Id: number;
    Label: string;
    Value: number;
    constructor(id: number, label: string, value: number) {
        this.Id = id;
        this.Label = label;
        this.Value = value;
    }
}