export type AccountingEntryDataType = {
    key: React.Key;
    client: string,
    accounting_entry_type: string,
    date: Date,
    cost_rub: number,
    cost_min: number,
};

export type CardDataType = {
    key: React.Key;
    client: string,
    card: number,
    card_status: string,
    date: Date,
};

export type ClientDataType = {
    key: React.Key;
    client_id: number;
    last_name: string;
    first_name: string;
    patronymic: string;
    phone: number;
    email: string;
    date_of_birth: Date;
    balance_rub: number;
    balance_min: number;
    payment_min_status: boolean;
    ban_status: boolean;
    ref_link: string;
};

export type CostDataType = {
    key: React.Key;
    client: string,
    cost_type: string,
    date: Date,
    cost_rub: number,
    cost_min: number,
    bonus: number,
};

export type FormDataType = {
    key: React.Key;
    last_name: string,
    first_name: string,
    patronymic: string,
    phone: number,
    email: string,
    ref_link_from: string,
    ref_link: string,
    source: string,
    guest_card_id: number,
    card_id: number,
    card_type: string,
    processed: boolean,
};

export type ReservationDataType = {
    key: React.Key;
    client: string,
    last_name: string,
    first_name: string,
    phone: number,
    reservation_object: string,
    start: Date,
    end: Date,
    client_card: boolean,
    schoolboy: boolean,
    student: boolean,
    num_of_persons: number,
    preliminary_cost: number,
    comment: string,
};

export type ReservationTariffDataType = {
    key: React.Key;
    reservation_object: string,
    min_num_of_persons: number,
    max_num_of_persons: number,
    one_time_cost: number,
    cost_per_hour: number,
};

export type SubscriptionDataType = {
    key: React.Key;
    client: string,
    subscription: string,
    start: Date,
    end: Date,
};

export type SubscriptionTariffDataType = {
    key: React.Key;
    name: string,
    start: string,
    end: string,
    duration: number,
    cost_rub: number,
};

export type VisitDataType = {
    key: React.Key;
    client: string,
    start: Date,
    end: Date,
    duration: number,
    comment: string,
};

export type VisitTariffDataType = {
    key: React.Key;
    card_type: string,
    start_tariff_zone: string,
    end_tariff_zone: string,
    cost_per_minute: number,
};
