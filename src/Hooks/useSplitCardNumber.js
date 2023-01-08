

const useSplitCardNumber = (value) => {
    return value.replace(/(\d{4}(?!\s))/g, "$1 ")
}

export default useSplitCardNumber;
