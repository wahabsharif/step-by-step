// pages/api/fetchForm.js
export default async function handler(req, res) {
  const formUrl = "https://forms.gle/uucPQ27gBXBRMZNm9";
  try {
    const response = await fetch(formUrl);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching Google Form content:", error);
    res.status(500).json({ error: "Failed to fetch form content" });
  }
}
