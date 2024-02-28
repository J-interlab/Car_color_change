// Region names
const REGION_IND = "IND"
const REGION_MEA = "MEA"
const REGION_MX = "MX"
const REGION_CSA = "CSA"
const REGION_APAC = "APAC"
const REGION_POC = "POC"
const REGION_EUR = "EUR"


// Index constants
//const INDEX_MX_NIRO = 11
// const INDEX_MX_SELTOS = 13
const INDEX_MX_SPORTAGE_HEV = 16

const INDEX_IND_SELTOS = 5
const INDEX_IND_SONET = 2
const INDEX_MEA_K5 = 3
// const INDEX_MEA_SORENTO = 5
// const INDEX_MEA_SPORTAGE = 6
// const INDEX_MEA_CARENS = 7

// const INDEX_CSA_NQ5_LHD = 0
// const INDEX_CSA_SG2_LHD = 2
// const INDEX_CSA_MQ4_LHD = 3
// const INDEX_CSA_SP2i_LHD = 4
// const INDEX_CSA_CV_LHD = 5
// const INDEX_CSA_QYi_LHD = 6
const INDEX_CSA_KY_LHD = 7
const INDEX_CSA_BL7m_LHD = 11

// change this line
const REGION = REGION_MX

let FOLDER_NAME, 
    CAR_INDEX,
    COLOR_COUNTS,
    COLOR_CODES

if(REGION === REGION_IND) {
    FOLDER_NAME = "car_ind"
    CAR_INDEX = INDEX_IND_SELTOS
    COLOR_COUNTS = ["8", "12", "8", "7", "0", "9"];
    COLOR_CODES = [
        ["ABP", "KLG", "GWP"],
        ["A6R+A6R", "GWP+GWP", "KCS", "KDG+KDG", "ABP+ABP", "A7A+A7A", "GWP+ABP", "A7A+GWP", "GWP+A7A", "A6R+ABP", "KLG+A7A", "1C"],
        ["A6R+ABP", "GWP+ABP", "GWP", "KCS", "KDG", "A6R", "ABP", "1C"],
        ["ABP", "KDG", "1C", "A6R", "BE2", "GWP", "KCS"],
        [],
        ["EWE","KCS","KDG","ABP","GWP","A6R","1C","A6R+ABP","GWP+ABP"],
    ]
} else if(REGION === REGION_MEA) {
    CAR_INDEX = INDEX_MEA_K5
    FOLDER_NAME = "mea" + CAR_INDEX
    
    COLOR_COUNTS = ["5", "15", "10", "9", "14", "10", "13", "8"];
    COLOR_CODES = [
        ["DU3", "CRS", "ABP", "KLM", "SWP"],
        ["UD", "KLG", "ABP", "A7A", "GWP", "KDG", "BNB", "A6R", "KLG+ABP", "A6R+ABP", "A7A+UD", "GWP+A7A", "GWP+ABP", "KLG+UD", "BNB+UD"],
        ["GWP"],
        ["UD5", "SWP5", "4SS3", "KLG3", "AGT", "ABP3", "CR53", "DU35", "B4U3"],
        ["UD", "GWP", "KLG", "KDG", "ABP", "QYG", "A6R", "BNB", "KLG+ABP", "GWP+ABP", "A6R+ABP", "QYG+ABP", "KDG+UD", "BNB+UD"],
        ["UD", "SWP", "4SS", "KLG", "ABP", "ABT", "BE2", "B4U", "CR5", "M4B"],
        ["HW2", "WD", "CSS", "HBG", "1K", "AA9", "B3L", "G2Y", "RNG", "EXG", "KCS", "M6Y", "USG"],
        ["1C", "BE27", "KCS7", "A6R7", "GWP7", "UD7", "KDG7", "ABP7"]

    ]
} else if(REGION === REGION_MX) {
    FOLDER_NAME = "car_mx"
    CAR_INDEX = INDEX_MX_SPORTAGE_HEV
    COLOR_COUNTS = ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "6", "0", "7", "0", "0", "4"];
    COLOR_CODES = [
        [], [], [], [], [], [], [], [], [], [], [],
        ["CGE+ABP","ABP+KLG","AGT+KLG","KLG11+AGT","M4B+ABP","SWP+KLG"],
        [],
        ["ABP","H3R","SWP","KCS","KDG","EWE","PLU"],
        [], [],
        ["SWP","KLG10","BB2","MGG"]
    ]
} else if(REGION === REGION_CSA) {
    CAR_INDEX = INDEX_CSA_BL7m_LHD
    FOLDER_NAME = "csa" + CAR_INDEX
    
    COLOR_COUNTS = ["0", "0", "9", "10", "8", "5", "11", "8", "0", "0", "0", "8"];
    COLOR_CODES = [
        [],
        [],
        ["CGE","CR5","DRG","M4B","ABP","AGT","KLG","SWP","UD"],
        ["UD", "SWP", "4SS", "KLG", "ABP", "ABT", "BE2", "B4U", "CR5", "M4B"],
        ["UD", "KLG", "9P", "ABP", "GWP", "A6R", "BNB", "CSS"],
        ["DU3", "CR5", "ABP", "KLM", "SWP"],
        [],
        ["ABP","UD","KDG","1C","A6R","BE2","GWP","KCS"],
        [],
        [],
        [],
        ["SWP","ABP","KLG","R4R","WVB","UD","4SS","B2R"]
    ]
} else if(REGION === REGION_APAC) {
    CAR_INDEX = 2
    FOLDER_NAME = "car_apac"
    
    COLOR_COUNTS = ["0", "0", "8"];
    COLOR_CODES = [
        [],
        [],
        ["UD","KLG","AGT","ABP","CGE","M4B","DRG","CR5"],
    ]
} else if(REGION === REGION_POC) {
    CAR_INDEX = 0
    FOLDER_NAME = "poc"
    COLOR_COUNTS = ["6"]
    COLOR_CODES = [
        ["GWP2","ERG","C7S","EB","DU3","DWR"]
    ]
} else if(REGION === REGION_EUR) {
    CAR_INDEX = 2
    FOLDER_NAME = "car_eur"
    COLOR_COUNTS = ["0", "0", "11"]
    COLOR_CODES = [
        [],
        [],
        ["KLG","AGT","GLB","UBY","G4E","B4U","DU3","CR5","ABP","KLM","SWP"]
    ]
}

export {
    FOLDER_NAME,
    CAR_INDEX,
    COLOR_COUNTS,
    COLOR_CODES
};