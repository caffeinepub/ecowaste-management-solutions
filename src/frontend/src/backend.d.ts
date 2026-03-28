import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export type ServiceType = {
    __kind__: "wasteCollection";
    wasteCollection: null;
} | {
    __kind__: "cleaning";
    cleaning: null;
} | {
    __kind__: "other";
    other: string;
} | {
    __kind__: "consulting";
    consulting: null;
} | {
    __kind__: "products";
    products: null;
};
export type Time = bigint;
export interface QuoteRequest {
    organizationName: string;
    organizationType: OrganizationType;
    serviceType: ServiceType;
    name: string;
    email: string;
    message: string;
    timestamp: Time;
}
export type OrganizationType = {
    __kind__: "hospital";
    hospital: null;
} | {
    __kind__: "other";
    other: string;
} | {
    __kind__: "school";
    school: null;
} | {
    __kind__: "civilSociety";
    civilSociety: null;
};
export interface backendInterface {
    getAllQuoteRequests(): Promise<Array<QuoteRequest>>;
    submitQuoteRequest(name: string, organizationName: string, organizationType: OrganizationType, serviceType: ServiceType, email: string, message: string): Promise<void>;
}
