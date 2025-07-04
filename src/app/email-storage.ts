"use server"

import { writeFile, readFile, mkdir } from "fs/promises"
import { existsSync } from "fs"
import path from "path"

export async function storeEmail(prevState: any, formData: FormData) {
  try {
    const email = formData.get("email") as string

    if (!email || !email.includes("@")) {
      return {
        success: false,
        message: "Please enter a valid email address",
      }
    }

    // Create data directory if it doesn't exist
    const dataDir = path.join(process.cwd(), "data")
    if (!existsSync(dataDir)) {
      await mkdir(dataDir, { recursive: true })
    }

    const filePath = path.join(dataDir, "emails.json")

    // Read existing emails or create empty array
    let emails = []
    try {
      if (existsSync(filePath)) {
        const fileContent = await readFile(filePath, "utf-8")
        emails = JSON.parse(fileContent)
      }
    } catch (error) {
      emails = []
    }

    // Check if email already exists
    const emailExists = emails.some((entry: any) => entry.email === email)
    if (emailExists) {
      return {
        success: false,
        message: "This email is already registered!",
      }
    }

    // Add new email with timestamp
    const newEntry = {
      email,
      timestamp: new Date().toISOString(),
      id: Date.now(),
    }

    emails.push(newEntry)

    // Write back to file
    await writeFile(filePath, JSON.stringify(emails, null, 2))

    return {
      success: true,
      message: "Successfully registered for early access! 🎉",
    }
  } catch (error) {
    console.error("Error storing email:", error)
    return {
      success: false,
      message: "Something went wrong. Please try again.",
    }
  }
}
