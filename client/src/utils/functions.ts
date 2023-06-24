import { Difference } from "../types";

export function calculatePercentageDifference(
    buyValue: string | undefined,
    sellValue: string | undefined
): Difference {
    const oldValue = Number(buyValue);
    const newValue = Number(sellValue);
    if (oldValue === 0 || newValue === 0) {
        // Handle zero values
        return {
            difference: 0,
            percentageDifference: 0,
        };
    }

    if (typeof oldValue === "undefined" || typeof newValue === "undefined") {
        // Handle undefined values
        return {
            difference: 0,
            percentageDifference: undefined,
        };
    }

    const difference = newValue - oldValue;
    const percentageDifference = (difference / oldValue) * 100;

    return {
        difference: difference,
        percentageDifference: percentageDifference,
    };
}
