import * as yup from "yup"; 

export const tipSchemaValidation = yup.object().shape({
    preventionTip: yup
    .string()
    .required("The prevention Tip is required"),  // Ensures the preventionTip is a required strin

  whyItIsImportant: yup
    .string()
    .required("The 'Why It Is Important' is required"),  

  howToApply: yup
    .string()
    .required("The 'How To Apply' is required"),  

  whoCanHelp: yup
    .string()
    .required("The 'Who Can Help' is required")  
});