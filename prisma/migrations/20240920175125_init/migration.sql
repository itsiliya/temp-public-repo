-- CreateTable
CREATE TABLE "Student" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "homePhoneNumber" TEXT NOT NULL,
    "fatherPhoneNumber" TEXT NOT NULL,
    "motherPhoneNumber" TEXT NOT NULL,
    "emergencyPhoneNumber" TEXT NOT NULL,
    "classId" INTEGER NOT NULL,
    CONSTRAINT "Student_classId_fkey" FOREIGN KEY ("classId") REFERENCES "Class" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Class" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "grade" INTEGER NOT NULL,
    "fieldOfStudy" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Absent" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "date" DATETIME NOT NULL,
    "acceptable" BOOLEAN NOT NULL,
    "reason" TEXT,
    "studentId" INTEGER NOT NULL,
    CONSTRAINT "Absent_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Delay" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "date" DATETIME NOT NULL,
    "amountOfDelay" INTEGER NOT NULL,
    "acceptable" BOOLEAN NOT NULL,
    "reason" TEXT,
    "studentId" INTEGER NOT NULL,
    CONSTRAINT "Delay_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "DisciplinaryReport" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "date" DATETIME NOT NULL,
    "report" TEXT NOT NULL,
    "studentId" INTEGER NOT NULL,
    CONSTRAINT "DisciplinaryReport_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ExtracurricularActivity" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "date" DATETIME NOT NULL,
    "activity" TEXT NOT NULL,
    "studentId" INTEGER NOT NULL,
    CONSTRAINT "ExtracurricularActivity_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
