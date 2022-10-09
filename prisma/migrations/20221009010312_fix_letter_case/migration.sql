/*
  Warnings:

  - You are about to drop the `Record` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Record";

-- CreateTable
CREATE TABLE "record" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "description" VARCHAR(1024),
    "file_name" VARCHAR(256) NOT NULL,
    "language" VARCHAR(256) NOT NULL,
    "code" TEXT NOT NULL,

    CONSTRAINT "record_pkey" PRIMARY KEY ("id")
);
