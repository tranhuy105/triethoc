import { cnxh } from "./cnxh";
import { ktct } from "./ktct";
import { lsd } from "./lsd";
import { tutuong } from "./tthcm";

// Define types for our question packages
export interface Question {
    label: string;
    dapan: string;
}

export interface QuestionPackage {
    id: string;
    name: string;
    description: string;
    questions: Question[];
}

export const questionPackages: QuestionPackage[] = [
    {
        id: "tthcm",
        name: "Tư tưởng Hồ Chí Minh",
        description: "SSH1151",
        questions: tutuong,
    },
    {
        id: "ktct",
        name: "Kinh tế chính trị",
        description: "SSH1121",
        questions: ktct,
    },
    {
        id: "lsd",
        name: "Lịch sử đảng",
        description: "SSH1141",
        questions: lsd,
    },
    {
        id: "cnxh",
        name: "Chủ nghĩa xã hội",
        description: "SSH1131",
        questions: cnxh,
    },
];
