export type AccountingEntryDataType = {
    key: React.Key;
    client: string,
    accounting_entry_type: string,
    date: Date,
    cost_rub: number,
    cost_min: number,
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
