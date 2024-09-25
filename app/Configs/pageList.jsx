import { 
    PiArmchairDuotone,
    PiStudentDuotone,
    PiCalendarDotsDuotone,
    PiClockCountdownDuotone,
    PiClipboardTextDuotone,
    PiBasketballDuotone,
    PiChalkboardTeacherDuotone
} from "react-icons/pi";

/*
    for each section we have an object,
    in each object
    {
        title: "TITLE OF THE SECTION" (OPTIONAL),
        pages: [
            {
                icon: Icon component (NOT THE JSX/TSX e.g. if its FaHome don't set it as <FaHome />),
                title: "TITLE OF THE PAGE",
                href: "/LINK TO THE PARTICULAR PAGE" 
            },
            ...
        ]
    }
*/

const sections = [
    {
        pages: [
            {
                icon: PiArmchairDuotone,
                title: "داشبورد",
                href: "/"
            },
        ]
    },
    {
        title: "دانش‌آموز",
        pages: [
            {
                icon: PiStudentDuotone,
                title: "دانش‌آموزان",
                href: "/students"
            }, {
                icon: PiCalendarDotsDuotone,
                title: "غیبت‌ها",
                href: "/absents"
            }, {
                icon: PiClockCountdownDuotone,
                title: "تاخیر‌ها",
                href: "/delays"
            }, {
                icon: PiClipboardTextDuotone,
                title: "گزارش انضباطی",
                href: "/disciplinaryReport"
            }, {
                icon: PiBasketballDuotone,
                title: "فعالیت پژوهشی",
                href: "/extracurricularActivity"
            }
        ]
    },
    {
        title: "کلاس",
        pages: [
            {
                icon: PiChalkboardTeacherDuotone,
                title: "کلاس‌ها",
                href: "/classes"
            }
        ]
    }
];

export { sections };