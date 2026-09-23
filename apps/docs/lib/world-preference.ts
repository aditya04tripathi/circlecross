export type WorldChoice = "Uni" | "Pro";

export const WORLD_COOKIE = "circlecross-world";
export const WORLD_STORAGE_KEY = "circlecross-world";
export const WORLD_COOKIE_MAX_AGE = 60 * 60 * 24 * 365;
export const WORLD_PREFERENCE_PATH = "/api/world-preference";

const VALID: WorldChoice[] = ["Uni", "Pro"];

export function isWorldChoice(value: string): value is WorldChoice {
  return VALID.includes(value as WorldChoice);
}

export function parseWorldChoice(value: string | undefined | null): WorldChoice | null {
  if (!value) {
    return null;
  }
  try {
    const decoded = decodeURIComponent(value);
    if (isWorldChoice(decoded)) {
      return decoded;
    }
  } catch {
    // fall through
  }
  return isWorldChoice(value) ? value : null;
}

export function clearLegacyWorldStorage(): void {
  try {
    localStorage.removeItem(WORLD_STORAGE_KEY);
  } catch {
    return;
  }
}

export function readWorldPreference(): WorldChoice | null {
  clearLegacyWorldStorage();
  try {
    const match = document.cookie
      .split(";")
      .map((part) => part.trim())
      .find((part) => part.startsWith(`${WORLD_COOKIE}=`));
    if (!match) {
      return null;
    }
    return parseWorldChoice(match.slice(WORLD_COOKIE.length + 1));
  } catch {
    return null;
  }
}

export async function writeWorldPreference(world: WorldChoice): Promise<boolean> {
  clearLegacyWorldStorage();
  try {
    const response = await fetch(WORLD_PREFERENCE_PATH, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ world }),
    });
    return response.ok;
  } catch {
    return false;
  }
}
