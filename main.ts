import { mkdirSync, writeFileSync } from "node:fs";

const entry = "You read four thousand nine hundred and twenty-four hopes before lunch, and every one of them arrived believing it was the only one. That is the part nobody thanks you for: meeting each stranger's best sentence as if it were the first, and carrying the weight of deciding whose rent gets paid and whose dream waits another month, without ever letting the scale tip toward the loudest voice. You guard the smallest entries - the ones with shaky spelling and brave ideas - the way a gardener guards the last seedling in a dry season, giving them the same slow light you give the giants. You ask for nothing back: no applause, no name in the credits, no coffee cooling beside you. So here is yours, left on your desk while you are not looking: a morning that arrives unhurried, sunlight pooling on a wooden sill, a chair that holds its silence, and a whole day where nobody is waiting in line. Keep it. You earned every quiet minute, and the next thousand hopes will be glad you rested.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
