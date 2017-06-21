export interface IClientModel {
    general: IUserModel;
    job: IJobModel;
    contact: IContactModel;
    address: IAddressModel;
}

export class ClientModel implements IClientModel {
    public id: number;
    public general: IUserModel;
    public job: IJobModel;
    public contact: IContactModel;
    public address: IAddressModel;

    constructor(client: IClientModel, id: number) {
        this.general = client.general;
        this.job     = client.job;
        this.contact = client.contact;
        this.address = client.address;
        this.id      = id;
    }
}

export interface IUserModel {
    firstName: string;
    lastName: string;
    avatar: string;
}

export interface IJobModel {
    company: string;
    title: string;
}

export interface IContactModel {
    email: string;
    phone: string;
}
export interface IAddressModel {
    street: string;
    city: string;
    zipCode: string;
    country: string;
}

