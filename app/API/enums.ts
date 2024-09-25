const $grades = {
    10: "دهم",
    11: "یازدهم",
    12: "دوازدهم"
};

const $fieldOfStudies = {
    "Tailoring": "خیاطی", 
    "GraphicDesign": "گرافیک", 
    "Network": "شبکه", 
    "FamilyManagement": "مدیریت خانواده", 
    "PackagingDesgin": "طراحی بسته‌بندی", 
    "Accounting": "حسابداری", 
    "Architecture": "نقشه‌کشی ساختمان", 
    "Illustration": "تصویرسازی"
};

type Grade = keyof typeof $grades
type FieldOfStudy = keyof typeof $fieldOfStudies

export { $grades, $fieldOfStudies };
export type { Grade, FieldOfStudy };