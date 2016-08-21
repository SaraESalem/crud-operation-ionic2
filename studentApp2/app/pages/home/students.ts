/**
 * Created by sara on 20/08/16.
 */
export class Students {
    id: number;
    name: string ='';
    email: string ='';
    level: string ='';
    // levels = ['primary','secondary','preparatory'];

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
