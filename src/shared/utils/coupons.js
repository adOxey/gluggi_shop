export const isValidCoupon = (coupon) => {
    if (coupon === "20%off") {
        return 0.20
    } else {
        return false
    }
}

export const priceWithCoupon = (isValidCoupon, cost) => {
    if (isValidCoupon) {
        const deductedAmount = cost * isValidCoupon;
        return cost - deductedAmount;
    }
}
