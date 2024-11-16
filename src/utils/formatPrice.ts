export const formatPrice = (price: number | undefined): string => {
    if (price === undefined) return '';
    return new Intl.NumberFormat('en-US', { style: 'decimal' }).format(price);
};
