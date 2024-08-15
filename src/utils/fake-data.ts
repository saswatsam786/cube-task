import { v4 as uuidv4 } from "uuid";
import { faker } from "@faker-js/faker";

export interface FakeDataEntry {
  id: string;
  fullName: string;
  createdAt: string;
  description: string;
  address: string;
}

function generateRandomFullName(): string {
  const firstNames = ["John", "Jane", "Alex", "Emily", "Michael", "Sarah", "David", "Laura"];
  const lastNames = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis"];
  const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  return `${randomFirstName} ${randomLastName}`;
}

function generateRandomSentence(words: number): string {
  const wordsList = [
    "innovative",
    "solution",
    "collaborate",
    "market",
    "growth",
    "strategic",
    "efficiency",
    "dynamic",
    "impact",
    "creative",
    "technology",
    "insights",
    "development",
    "vision",
    "partnership",
    "success",
    "engagement",
    "optimization",
    "leadership",
    "strategy",
    "research",
    "advancement",
    "quality",
    "integration",
    "approach",
    "sustainability",
    "reliability",
    "performance",
    "customer",
    "feedback",
    "implementation",
    "results",
    "objective",
    "experience",
    "analysis",
    "goals",
    "innovation",
    "teamwork",
    "solutions",
    "expansion",
    "enhancement",
    "efficacy",
    "project",
    "system",
    "solution",
    "marketplace",
  ];

  let sentence = "";
  while (sentence.split(" ").length < words) {
    const randomWord = wordsList[Math.floor(Math.random() * wordsList.length)];
    sentence += randomWord + " ";
  }

  return sentence.trim().split(" ").slice(0, words).join(" ") + ".";
}

function generateLoremIpsum(words: number): string {
  const paragraphCount = Math.ceil(words / 50);
  let description = "";

  for (let i = 0; i < paragraphCount; i++) {
    const paragraphLength = Math.min(words, 250);
    description += Array.from({ length: paragraphLength / 10 }, () => generateRandomSentence(10)).join(" ") + "\n\n";
    words -= paragraphLength;
  }

  return description.trim();
}

function getRandomDate(start: Date, end: Date): Date {
  const startTimestamp = start.getTime();
  const endTimestamp = end.getTime();
  const randomTimestamp = Math.floor(Math.random() * (endTimestamp - startTimestamp + 1)) + startTimestamp;
  return new Date(randomTimestamp);
}

export function generateFakeData(entries: number): FakeDataEntry[] {
  const fakeData: FakeDataEntry[] = [];
  const startDate = new Date(2000, 0, 1);
  const endDate = new Date();

  for (let i = 0; i < entries; i++) {
    const entry: FakeDataEntry = {
      id: uuidv4(),
      fullName: generateRandomFullName(),
      createdAt: getRandomDate(startDate, endDate).toISOString(),
      description: generateLoremIpsum(250),
      address: faker.location.streetAddress(),
    };
    fakeData.push(entry);
  }

  return fakeData;
}
