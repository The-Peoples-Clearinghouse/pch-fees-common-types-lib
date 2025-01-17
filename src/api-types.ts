export const FinancialEntityType = {
    NATIONAL_DFSP: 'NATIONAL_DFSP',
    CNP: 'CNP',
    FOREIGNER_DFSP: 'FOREIGNER_DFSP',
    SWITCH: 'SWITCH',
} as const;
export type FinancialEntityType = keyof typeof FinancialEntityType;

export type FinancialEntity = {
    financialEntityName: string;
    financialEntityId: string;
    financialEntityType: FinancialEntityType;
};

export const FeeType = {
    SENDER: 'SENDER',
    RECEIVER: 'RECEIVER',
    SWITCH: 'SWITCH',
    CNP: 'CNP',
} as const;
export type FeeType = keyof typeof FeeType;

export const TransferType = {
    REMMITANCE: 'REMMITANCE',
    DOMESTIC: 'DOMESTIC',
} as const;
export type TransferType = keyof typeof TransferType;

export const CalculationType = {
    SENDER_MINUS_RECEIVER: 'SENDER_MINUS_RECEIVER',
    FIXED: 'FIXED',
    TOTAL_TRANSFER_AMOUNT_PERCENTAGE: 'TOTAL_TRANSFER_AMOUNT_PERCENTAGE',
    SENDER_FEE_PERCENTAGE: 'SENDER_FEE_PERCENTAGE',
} as const;
export type CalculationType = keyof typeof CalculationType;

export type FeeDefinition = {
    _id?: string;
    financialEntityId: string;
    _active?: boolean;
    transferType: TransferType;
    feeType: FeeType;
    calculationType: CalculationType;
    feesCurrency: string | null;
    fixedAmount: number | null;
    senderFeePercentage: number | null;
    totalTransferAmountPercentage: number | null;
    startDate: number;
    endDate: number;
};