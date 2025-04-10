import { atom } from 'recoil';

export const formDataState = atom({
  key: 'formDataState',
  default: {
    name: '',  
    phone: '',  
    address: '',  
    ownsProperty: false,  
    permanentAddress: '',  
    temporaryAddress: '',  
    department: '',  
    jobPosition: '',  
    monthlyIncome: '',  
    isMarried: false,  
    spouseIncome: '',
  },
});